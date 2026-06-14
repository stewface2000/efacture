"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageContext";

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  vatRate: number;
}

const VAT_RATES = [
  { label: "0%", value: 0 },
  { label: "5,5%", value: 5.5 },
  { label: "10%", value: 10 },
  { label: "20%", value: 20 },
];

function generateId() {
  return Math.random().toString(36).substring(2, 9);
}

function createEmptyItem(): InvoiceItem {
  return {
    id: generateId(),
    description: "",
    quantity: 1,
    unitPrice: 0,
    vatRate: 20,
  };
}

export default function NouvellePage() {
  const router = useRouter();
  const { t, locale } = useLanguage();


  // Profile / Issuer fields
  interface ProfileData {
    companyName: string | null;
    siret: string | null;
    vatNumber: string | null;
    address: string | null;
    city: string | null;
    postalCode: string | null;
    phone: string | null;
    iban: string | null;
    bic: string | null;
    email: string;
  }
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [profileReady, setProfileReady] = useState(false);

  // Client fields
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [clientCity, setClientCity] = useState("");
  const [clientPostalCode, setClientPostalCode] = useState("");
  const [clientSiret, setClientSiret] = useState("");
  const [clientVatNumber, setClientVatNumber] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");

  // Invoice items
  const [items, setItems] = useState<InvoiceItem[]>([createEmptyItem()]);

  // UI state
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [quotaError, setQuotaError] = useState(false);

  // Prefill loading & banner states
  const [prefillLoading, setPrefillLoading] = useState(false);
  const [prefillSuccess, setPrefillSuccess] = useState(false);

  const handlePrefillFile = useCallback(async (fileName: string, fileType: string, base64: string) => {
    console.log(`[Prefill] Starting extraction for: ${fileName}, type: ${fileType}, base64 length: ${base64?.length || 0}`);
    setPrefillLoading(true);
    setError(null);
    setPrefillSuccess(false);

    try {
      const payload = {
        fileBase64: base64,
        fileName: fileName,
        fileType: fileType,
      };
      console.log(`[Prefill] Sending payload (${JSON.stringify(payload).length} bytes) to /api/invoices/extract`);

      const res = await fetch("/api/invoices/extract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      console.log(`[Prefill] Response status: ${res.status}`);

      if (res.status === 401) {
        // User is not authenticated — redirect to login
        console.log('[Prefill] 401 - redirecting to login');
        router.push("/login?redirect=/generateur/nouvelle&prefill=true");
        return;
      }

      if (!res.ok) {
        const errBody = await res.text().catch(() => "");
        console.error("[Prefill] Extract API error:", res.status, errBody);
        throw new Error(t("generateur.nouvelle.prefillError"));
      }

      const data = await res.json();
      console.log("[Prefill] Extracted data:", JSON.stringify(data).substring(0, 500));
      
      // Populate inputs
      if (data.clientName) setClientName(data.clientName);
      if (data.clientAddress) setClientAddress(data.clientAddress);
      if (data.clientCity) setClientCity(data.clientCity);
      if (data.clientPostalCode) setClientPostalCode(data.clientPostalCode);
      if (data.clientSiret) setClientSiret(data.clientSiret);
      if (data.clientVatNumber) setClientVatNumber(data.clientVatNumber);
      if (data.notes) setNotes(data.notes);

      if (Array.isArray(data.items) && data.items.length > 0) {
        const mappedItems = data.items.map((item: { description?: string; quantity?: number; unitPrice?: number; vatRate?: number }) => ({
          id: generateId(),
          description: item.description || "",
          quantity: typeof item.quantity === "number" ? item.quantity : 1,
          unitPrice: typeof item.unitPrice === "number" ? item.unitPrice : 0,
          vatRate: typeof item.vatRate === "number" ? item.vatRate : 20,
        }));
        setItems(mappedItems);
        console.log(`[Prefill] Set ${mappedItems.length} items`);
      }

      setPrefillSuccess(true);
      console.log("[Prefill] ✅ Form populated successfully");
    } catch (err) {
      console.error("Error prefilling form", err);
      setError(t("generateur.nouvelle.prefillError"));
    } finally {
      setPrefillLoading(false);
    }
  }, [t, router]);

  useEffect(() => {
    // Wait until we know the user is authenticated (profileReady)
    // before trying to call the extract API from sessionStorage
    if (!profileReady) return;

    const checkPrefill = async () => {
      const stored = sessionStorage.getItem("efacture_prefill_file");
      if (!stored) return;

      try {
        const parsed = JSON.parse(stored);
        await handlePrefillFile(parsed.name, parsed.type, parsed.base64);
      } catch (err) {
        console.error("Error parsing stored prefill", err);
      } finally {
        sessionStorage.removeItem("efacture_prefill_file");
      }
    };

    checkPrefill();
  }, [handlePrefillFile, profileReady]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = (reader.result as string).split(",")[1];
      handlePrefillFile(file.name, file.type, base64String);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/user/profile");
        if (res.status === 401) {
          router.push("/login");
          return;
        }
        if (res.ok) {
          const data = await res.json();
          setProfile(data);
          setProfileReady(true);
        }
      } catch (err) {
        console.error("Erreur de chargement du profil émetteur", err);
      } finally {
        setLoadingProfile(false);
      }
    };
    fetchProfile();
  }, [router]);

  // Compute line totals
  const computeLineTotalHT = (item: InvoiceItem) =>
    Math.round(item.quantity * item.unitPrice * 100) / 100;
  const computeLineTotalVAT = (item: InvoiceItem) =>
    Math.round(computeLineTotalHT(item) * (item.vatRate / 100) * 100) / 100;
  const computeLineTotalTTC = (item: InvoiceItem) =>
    Math.round((computeLineTotalHT(item) + computeLineTotalVAT(item)) * 100) / 100;

  // Invoice totals
  const totalHT = items.reduce((sum, item) => sum + computeLineTotalHT(item), 0);
  const totalVAT = items.reduce((sum, item) => sum + computeLineTotalVAT(item), 0);
  const totalTTC = items.reduce((sum, item) => sum + computeLineTotalTTC(item), 0);

  const updateItem = useCallback(
    (id: string, field: keyof InvoiceItem, value: string | number) => {
      setItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, [field]: value } : item
        )
      );
    },
    []
  );

  const addItem = () => {
    setItems((prev) => [...prev, createEmptyItem()]);
  };

  const removeItem = (id: string) => {
    if (items.length <= 1) return;
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) {
      setError(t("generateur.nouvelle.errClientName"));
      return;
    }

    const validItems = items.filter((item) => item.description.trim());
    if (validItems.length === 0) {
      setError(t("generateur.nouvelle.errNoItems"));
      return;
    }

    setSubmitting(true);
    setError(null);
    setQuotaError(false);

    try {
      const res = await fetch("/api/invoices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName: clientName.trim(),
          clientAddress: clientAddress.trim() || undefined,
          clientCity: clientCity.trim() || undefined,
          clientPostalCode: clientPostalCode.trim() || undefined,
          clientCountry: "France",
          clientSiret: clientSiret.trim() || undefined,
          clientVatNumber: clientVatNumber.trim() || undefined,
          dueDate: dueDate || undefined,
          notes: notes.trim() || undefined,
          items: validItems.map((item) => ({
            description: item.description.trim(),
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            vatRate: item.vatRate,
          })),
        }),
      });

      if (res.status === 401) {
        router.push("/login");
        return;
      }

      if (res.status === 403) {
        setQuotaError(true);
        setSubmitting(false);
        return;
      }

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erreur lors de la création.");
      }

      // Response is a PDF — trigger download
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      // Extract filename from Content-Disposition or use default
      const disposition = res.headers.get("Content-Disposition");
      const match = disposition?.match(/filename="(.+)"/);
      a.download = match ? match[1] : "facture.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      // Redirect to dashboard
      router.push("/generateur");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Impossible de créer la facture.";
      setError(message);
      setSubmitting(false);
    }
  };

  const formatEuro = (n: number) => {
    const localeMap: Record<string, string> = {
      fr: "fr-FR",
      en: "en-US",
      ar: "ar-EG",
      pl: "pl-PL",
      pt: "pt-PT",
    };
    return n.toLocaleString(localeMap[locale] || "fr-FR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <article style={{ background: "var(--bg-warm)", minHeight: "100vh" }}>
      {prefillLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(248, 246, 241, 0.95)",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            className="spinner"
            style={{
              width: "56px",
              height: "56px",
              border: "4px solid rgba(15, 118, 110, 0.1)",
              borderTop: "4px solid var(--teal)",
              borderRadius: "50%",
              marginBottom: "1.5rem",
              animation: "spin 1s linear infinite",
            }}
          />
          <style jsx global>{`
            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
          `}</style>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "var(--text-deep)",
              margin: "0 0 0.5rem",
            }}
          >
            {t("generateur.nouvelle.prefillLoadingTitle")}
          </h3>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.9375rem",
              margin: 0,
            }}
          >
            {t("generateur.nouvelle.prefillLoadingDesc")}
          </p>
        </div>
      )}
      {/* Nav */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(248, 246, 241, 0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "4rem",
          }}
        >
          <Link
            href="/generateur"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontWeight: 600,
              fontSize: "0.9375rem",
              color: "var(--text-secondary)",
            }}
          >
            {t("generateur.nouvelle.back")}
          </Link>
          <span
            className="badge badge-teal"
            style={{ fontSize: "0.75rem" }}
          >
            {t("generateur.nouvelle.badge")}
          </span>
        </div>
      </nav>

      <section
        className="section"
        style={{ paddingTop: "2rem", paddingBottom: "4rem" }}
      >
        <div className="container" style={{ maxWidth: "860px" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h1
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                marginBottom: "0.5rem",
                marginTop: 0,
              }}
            >
              {t("generateur.nouvelle.title")}
            </h1>
            <p
              style={{
                margin: "0 auto",
                fontSize: "0.9375rem",
                color: "var(--text-muted)",
                maxWidth: "50ch",
              }}
            >
              {t("generateur.nouvelle.subtitle")}
            </p>
          </div>

          {/* Quota error */}
          {quotaError && (
            <div
              style={{
                background: "var(--rust-bg)",
                border: "1px solid var(--rust-light)",
                borderRadius: "var(--radius-lg)",
                padding: "1.5rem",
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  color: "var(--rust-dark)",
                  margin: "0 0 0.5rem",
                  fontSize: "1.0625rem",
                }}
              >
                {t("generateur.nouvelle.quotaReachedTitle")}
              </p>
              <p
                style={{
                  color: "var(--rust-dark)",
                  fontSize: "0.875rem",
                  margin: "0 0 1rem",
                  maxWidth: "45ch",
                  marginInline: "auto",
                }}
              >
                {t("generateur.nouvelle.quotaReachedDesc")}
              </p>
              <Link
                href="/api/stripe/checkout"
                className="btn btn-cta"
              >
                {t("generateur.nouvelle.quotaUpgradeBtn")}
              </Link>
            </div>
          )}

          {/* Uploader Card */}
          <div
            style={{
              background: "var(--bg-white)",
              borderRadius: "var(--radius-xl)",
              padding: "2rem",
              border: "2px dashed var(--teal-muted)",
              textAlign: "center",
              marginBottom: "2rem",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>🤖</div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text-deep)", margin: "0 0 0.5rem 0" }}>
              {t("generateur.nouvelle.uploadBoxTitle")}
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", margin: "0 0 1.25rem 0" }}>
              {t("generateur.nouvelle.uploadBoxDesc")}
            </p>
            <label className="btn btn-secondary btn-sm" style={{ cursor: "pointer", display: "inline-block" }}>
              {t("generateur.nouvelle.uploadBoxBtn")}
              <input
                type="file"
                accept=".pdf,.png,.jpg,.jpeg,.doc,.docx,.xls,.xlsx"
                style={{ display: "none" }}
                onChange={handleFileUpload}
              />
            </label>
          </div>

          <form onSubmit={handleSubmit}>
            {prefillSuccess && (
              <div
                style={{
                  background: "var(--teal-bg)",
                  border: "1px solid var(--teal-muted)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.25rem 1.5rem",
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>✨</span>
                <div>
                  <p
                    style={{
                      fontWeight: 700,
                      color: "var(--teal-dark)",
                      margin: 0,
                      fontSize: "0.9375rem",
                    }}
                  >
                    {t("generateur.nouvelle.prefillSuccessTitle")}
                  </p>
                  <p
                    style={{
                      color: "var(--teal)",
                      margin: "0.25rem 0 0",
                      fontSize: "0.8125rem",
                    }}
                  >
                    {t("generateur.nouvelle.prefillSuccessDesc")}
                  </p>
                </div>
              </div>
            )}

            {/* Émetteur info card */}
            <div
              style={{
                background: "var(--bg-white)",
                borderRadius: "var(--radius-xl)",
                padding: "clamp(1.5rem, 5vw, 2.5rem)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "var(--shadow-md)",
                marginBottom: "1.5rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem", paddingBottom: "0.5rem", borderBottom: "2px solid var(--teal-bg)" }}>
                <h2
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "var(--teal-dark)",
                    margin: 0,
                  }}
                >
                  {t("generateur.nouvelle.issuerTitle")}
                </h2>
                <Link
                  href="/generateur/profil"
                  style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--teal)", textDecoration: "underline" }}
                >
                  {t("generateur.nouvelle.editProfile")}
                </Link>
              </div>

              {loadingProfile ? (
                <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--text-muted)" }}>{t("generateur.nouvelle.profileLoading")}</p>
              ) : profile ? (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem", fontSize: "0.875rem" }}>
                  <div>
                    <span style={{ color: "var(--text-muted)", display: "block", marginBottom: "0.125rem" }}>{locale === "en" ? "Company" : locale === "pl" ? "Firma" : locale === "pt" ? "Empresa" : locale === "ar" ? "الشركة" : "Entreprise"}</span>
                    <strong style={{ color: "var(--text-deep)", fontSize: "0.9375rem" }}>
                      {profile.companyName || <span style={{ color: "var(--rust)" }}>{t("generateur.nouvelle.profileCompanyErr")}</span>}
                    </strong>
                  </div>
                  <div>
                    <span style={{ color: "var(--text-muted)", display: "block", marginBottom: "0.125rem" }}>SIRET</span>
                    <strong style={{ color: "var(--text-deep)" }}>
                      {profile.siret || <span style={{ color: "var(--rust)" }}>{t("generateur.nouvelle.profileSiretErr")}</span>}
                    </strong>
                  </div>
                  <div>
                    <span style={{ color: "var(--text-muted)", display: "block", marginBottom: "0.125rem" }}>{locale === "en" ? "VAT No." : locale === "pl" ? "NIP" : locale === "pt" ? "N° IVA" : locale === "ar" ? "رقم الضريبة" : "N° TVA"}</span>
                    <strong style={{ color: "var(--text-deep)" }}>
                      {profile.vatNumber || <span style={{ color: "var(--text-muted)" }}>{t("generateur.nouvelle.profileVatNone")}</span>}
                    </strong>
                  </div>
                  <div>
                    <span style={{ color: "var(--text-muted)", display: "block", marginBottom: "0.125rem" }}>{locale === "en" ? "Address" : locale === "pl" ? "Adres" : locale === "pt" ? "Endereço" : locale === "ar" ? "العنوان" : "Adresse"}</span>
                    <strong style={{ color: "var(--text-deep)" }}>
                      {profile.address ? (
                        `${profile.address}, ${profile.postalCode || ""} ${profile.city || ""}`
                      ) : (
                        <span style={{ color: "var(--rust)" }}>{t("generateur.nouvelle.profileAddrErr")}</span>
                      )}
                    </strong>
                  </div>
                  <div style={{ gridColumn: "1 / -1", borderTop: "1px solid var(--border-subtle)", paddingTop: "0.75rem", marginTop: "0.25rem" }}>
                    <span style={{ color: "var(--text-muted)", display: "block", marginBottom: "0.125rem" }}>{locale === "en" ? "Payment" : locale === "pl" ? "Płatność" : locale === "pt" ? "Pagamento" : locale === "ar" ? "الدفع" : "Règlement"}</span>
                    <strong style={{ color: "var(--text-deep)" }}>
                      {profile.iban ? (
                        `IBAN : ${profile.iban.substring(0, 4)}... (BIC: ${profile.bic || t("generateur.nouvelle.profileVatNone")})`
                      ) : (
                        <span style={{ color: "var(--rust)" }}>{t("generateur.nouvelle.profileRibErr")}</span>
                      )}
                    </strong>
                  </div>
                </div>
              ) : (
                <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--rust)" }}>{t("generateur.nouvelle.profileError")}</p>
              )}
            </div>

            {/* Client info card */}
            <div
              style={{
                background: "var(--bg-white)",
                borderRadius: "var(--radius-xl)",
                padding: "clamp(1.5rem, 5vw, 2.5rem)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "var(--shadow-md)",
                marginBottom: "1.5rem",
              }}
            >
              <h2
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "var(--teal-dark)",
                  margin: "0 0 1.25rem",
                  paddingBottom: "0.5rem",
                  borderBottom: "2px solid var(--teal-bg)",
                }}
              >
                {t("generateur.nouvelle.clientTitle")}
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                {/* Client Name */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.375rem",
                  }}
                >
                  <label
                    htmlFor="clientName"
                    style={{
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      color: "var(--text-deep)",
                    }}
                  >
                    {t("generateur.nouvelle.clientNameLabel")}
                  </label>
                  <input
                    type="text"
                    id="clientName"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder={t("generateur.nouvelle.clientNamePlaceholder")}
                    className="input-premium"
                    required
                    disabled={submitting}
                  />
                </div>

                {/* Address row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.375rem",
                      gridColumn: "1 / -1",
                    }}
                  >
                    <label
                      htmlFor="clientAddress"
                      style={{
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        color: "var(--text-deep)",
                      }}
                    >
                      {t("generateur.nouvelle.clientAddressLabel")}
                    </label>
                    <input
                      type="text"
                      id="clientAddress"
                      value={clientAddress}
                      onChange={(e) => setClientAddress(e.target.value)}
                      placeholder={t("generateur.nouvelle.clientAddressPlaceholder")}
                      className="input-premium"
                      disabled={submitting}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.375rem",
                    }}
                  >
                    <label
                      htmlFor="clientCity"
                      style={{
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        color: "var(--text-deep)",
                      }}
                    >
                      {t("generateur.nouvelle.clientCityLabel")}
                    </label>
                    <input
                      type="text"
                      id="clientCity"
                      value={clientCity}
                      onChange={(e) => setClientCity(e.target.value)}
                      placeholder={t("generateur.nouvelle.clientCityPlaceholder")}
                      className="input-premium"
                      disabled={submitting}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.375rem",
                    }}
                  >
                    <label
                      htmlFor="clientPostalCode"
                      style={{
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        color: "var(--text-deep)",
                      }}
                    >
                      {t("generateur.nouvelle.clientPostalCodeLabel")}
                    </label>
                    <input
                      type="text"
                      id="clientPostalCode"
                      value={clientPostalCode}
                      onChange={(e) => setClientPostalCode(e.target.value)}
                      placeholder={t("generateur.nouvelle.clientPostalCodePlaceholder")}
                      className="input-premium"
                      disabled={submitting}
                    />
                  </div>
                </div>

                {/* SIRET & VAT row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.375rem",
                    }}
                  >
                    <label
                      htmlFor="clientSiret"
                      style={{
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        color: "var(--text-deep)",
                      }}
                    >
                      {t("generateur.nouvelle.clientSiretLabel")}
                    </label>
                    <input
                      type="text"
                      id="clientSiret"
                      value={clientSiret}
                      onChange={(e) => setClientSiret(e.target.value)}
                      placeholder={t("generateur.nouvelle.clientSiretPlaceholder")}
                      className="input-premium"
                      disabled={submitting}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.375rem",
                    }}
                  >
                    <label
                      htmlFor="clientVatNumber"
                      style={{
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        color: "var(--text-deep)",
                      }}
                    >
                      {t("generateur.nouvelle.clientVatLabel")}
                    </label>
                    <input
                      type="text"
                      id="clientVatNumber"
                      value={clientVatNumber}
                      onChange={(e) => setClientVatNumber(e.target.value)}
                      placeholder={t("generateur.nouvelle.clientVatPlaceholder")}
                      className="input-premium"
                      disabled={submitting}
                    />
                  </div>
                </div>

                {/* Due date */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.375rem",
                    maxWidth: "280px",
                  }}
                >
                  <label
                    htmlFor="dueDate"
                    style={{
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      color: "var(--text-deep)",
                    }}
                  >
                    {t("generateur.nouvelle.dueDateLabel")}
                  </label>
                  <input
                    type="date"
                    id="dueDate"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="input-premium"
                    disabled={submitting}
                  />
                </div>
              </div>
            </div>

            {/* Invoice items card */}
            <div
              style={{
                background: "var(--bg-white)",
                borderRadius: "var(--radius-xl)",
                padding: "clamp(1.5rem, 5vw, 2.5rem)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "var(--shadow-md)",
                marginBottom: "1.5rem",
              }}
            >
              <h2
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "var(--teal-dark)",
                  margin: "0 0 1.25rem",
                  paddingBottom: "0.5rem",
                  borderBottom: "2px solid var(--teal-bg)",
                }}
              >
                {t("generateur.nouvelle.linesTitle")}
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {/* Table header (desktop) */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 80px 100px 100px 100px 40px",
                    gap: "0.5rem",
                    padding: "0 0.25rem",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  <span>{t("generateur.nouvelle.thDescription")}</span>
                  <span>{t("generateur.nouvelle.thQty")}</span>
                  <span>{t("generateur.nouvelle.thUnitPrice")}</span>
                  <span>{t("generateur.nouvelle.thVat")}</span>
                  <span>{t("generateur.nouvelle.thTotalHT")}</span>
                  <span></span>
                </div>

                {items.map((item, index) => (
                  <div
                    key={item.id}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 80px 100px 100px 100px 40px",
                      gap: "0.5rem",
                      alignItems: "center",
                      padding: "0.75rem",
                      background:
                        index % 2 === 0
                          ? "var(--bg-cream)"
                          : "transparent",
                      borderRadius: "var(--radius-md)",
                    }}
                  >
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) =>
                        updateItem(item.id, "description", e.target.value)
                      }
                      placeholder={t("generateur.nouvelle.placeholderDescription")}
                      className="input-premium"
                      style={{ padding: "0.625rem 0.75rem", fontSize: "0.875rem" }}
                      disabled={submitting}
                    />
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateItem(
                          item.id,
                          "quantity",
                          Math.max(0, parseFloat(e.target.value) || 0)
                        )
                      }
                      min="0"
                      step="0.01"
                      className="input-premium"
                      style={{
                        padding: "0.625rem 0.5rem",
                        fontSize: "0.875rem",
                        textAlign: "center",
                      }}
                      disabled={submitting}
                    />
                    <input
                      type="number"
                      value={item.unitPrice}
                      onChange={(e) =>
                        updateItem(
                          item.id,
                          "unitPrice",
                          Math.max(0, parseFloat(e.target.value) || 0)
                        )
                      }
                      min="0"
                      step="0.01"
                      className="input-premium"
                      style={{
                        padding: "0.625rem 0.5rem",
                        fontSize: "0.875rem",
                        textAlign: "right",
                      }}
                      disabled={submitting}
                    />
                    <select
                      value={item.vatRate}
                      onChange={(e) =>
                        updateItem(
                          item.id,
                          "vatRate",
                          parseFloat(e.target.value)
                        )
                      }
                      className="input-premium"
                      style={{
                        padding: "0.625rem 0.5rem",
                        fontSize: "0.875rem",
                      }}
                      disabled={submitting}
                    >
                      {VAT_RATES.map((rate) => (
                        <option key={rate.value} value={rate.value}>
                          {rate.label}
                        </option>
                      ))}
                    </select>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: "0.9375rem",
                        color: "var(--text-deep)",
                        textAlign: "right",
                        fontVariantNumeric: "tabular-nums",
                        padding: "0 0.25rem",
                      }}
                    >
                      {formatEuro(computeLineTotalHT(item))} €
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      disabled={items.length <= 1 || submitting}
                      style={{
                        width: "2rem",
                        height: "2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "none",
                        background:
                          items.length <= 1
                            ? "transparent"
                            : "rgba(234, 88, 12, 0.1)",
                        color:
                          items.length <= 1
                            ? "var(--text-light)"
                            : "var(--rust)",
                        borderRadius: "var(--radius-sm)",
                        cursor:
                          items.length <= 1 ? "not-allowed" : "pointer",
                        fontSize: "1rem",
                        fontWeight: 700,
                        transition: "all 200ms ease",
                      }}
                      title={t("generateur.nouvelle.deleteLineTooltip")}
                    >
                      ×
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addItem}
                  disabled={submitting}
                  className="btn btn-secondary btn-sm"
                  style={{
                    alignSelf: "flex-start",
                    marginTop: "0.5rem",
                  }}
                >
                  {t("generateur.nouvelle.addLineBtn")}
                </button>
              </div>
            </div>

            {/* Totals card */}
            <div
              style={{
                background: "var(--bg-white)",
                borderRadius: "var(--radius-xl)",
                padding: "clamp(1.5rem, 5vw, 2rem)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "var(--shadow-md)",
                marginBottom: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "1rem 2rem",
                }}
              >
                {/* Notes */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.375rem",
                  }}
                >
                  <label
                    htmlFor="notes"
                    style={{
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      color: "var(--text-deep)",
                    }}
                  >
                    {t("generateur.nouvelle.notesLabel")}
                  </label>
                  <textarea
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={t("generateur.nouvelle.notesPlaceholder")}
                    className="input-premium"
                    style={{
                      minHeight: "80px",
                      resize: "vertical",
                    }}
                    disabled={submitting}
                  />
                </div>

                {/* Totals summary */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    minWidth: "200px",
                    justifyContent: "flex-end",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "0.9375rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <span>{t("generateur.nouvelle.totalHT")}</span>
                    <span
                      style={{
                        fontWeight: 600,
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {formatEuro(totalHT)} €
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "0.9375rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <span>{t("generateur.nouvelle.totalVAT")}</span>
                    <span
                      style={{
                        fontWeight: 600,
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {formatEuro(totalVAT)} €
                    </span>
                  </div>
                  <div
                    style={{
                      height: "1px",
                      background: "var(--border-subtle)",
                      margin: "0.25rem 0",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: "var(--teal-bg)",
                      padding: "0.75rem 1rem",
                      borderRadius: "var(--radius-md)",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "var(--teal-dark)",
                      }}
                    >
                      {t("generateur.nouvelle.totalTTC")}
                    </span>
                    <span
                      style={{
                        fontWeight: 800,
                        fontSize: "1.25rem",
                        color: "var(--teal-dark)",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {formatEuro(totalTTC)} €
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Error display */}
            {error && (
              <div
                style={{
                  color: "var(--rust)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  marginBottom: "1rem",
                }}
                role="alert"
              >
                ⚠ {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-accent btn-lg"
              style={{
                width: "100%",
                justifyContent: "center",
                fontSize: "1.0625rem",
              }}
              disabled={submitting}
            >
              {submitting
                ? t("generateur.nouvelle.submitBtnLoading")
                : t("generateur.nouvelle.submitBtn")}
            </button>

            <div style={{ textAlign: "center", marginTop: "0.75rem" }}>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                }}
              >
                {t("generateur.nouvelle.footerDisclaimer")}
              </span>
            </div>
          </form>
        </div>
      </section>
    </article>
  );
}
