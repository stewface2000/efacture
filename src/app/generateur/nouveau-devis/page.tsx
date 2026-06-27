"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageContext";

interface QuoteItem {
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

function createEmptyItem(): QuoteItem {
  return {
    id: generateId(),
    description: "",
    quantity: 1,
    unitPrice: 0,
    vatRate: 20,
  };
}

export default function NouveauDevisPage() {
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

  // Client fields
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [clientCity, setClientCity] = useState("");
  const [clientPostalCode, setClientPostalCode] = useState("");
  const [clientSiret, setClientSiret] = useState("");
  const [clientVatNumber, setClientVatNumber] = useState("");
  const [validUntil, setValidUntil] = useState("");
  const [notes, setNotes] = useState("");

  // Quote items
  const [items, setItems] = useState<QuoteItem[]>([createEmptyItem()]);

  // UI state
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
  const computeLineTotalHT = (item: QuoteItem) =>
    Math.round(item.quantity * item.unitPrice * 100) / 100;
  const computeLineTotalVAT = (item: QuoteItem) =>
    Math.round(computeLineTotalHT(item) * (item.vatRate / 100) * 100) / 100;
  const computeLineTotalTTC = (item: QuoteItem) =>
    Math.round((computeLineTotalHT(item) + computeLineTotalVAT(item)) * 100) / 100;

  // Quote totals
  const totalHT = items.reduce((sum, item) => sum + computeLineTotalHT(item), 0);
  const totalVAT = items.reduce((sum, item) => sum + computeLineTotalVAT(item), 0);
  const totalTTC = items.reduce((sum, item) => sum + computeLineTotalTTC(item), 0);

  const updateItem = useCallback(
    (id: string, field: keyof QuoteItem, value: string | number) => {
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
      setError(t("generateur.devis.errClientName"));
      return;
    }

    const validItems = items.filter((item) => item.description.trim());
    if (validItems.length === 0) {
      setError(t("generateur.devis.errNoItems"));
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/quotes", {
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
          validUntil: validUntil || undefined,
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

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erreur lors de la création.");
      }

      // Download PDF
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      const disposition = res.headers.get("Content-Disposition");
      const match = disposition?.match(/filename="(.+)"/);
      a.download = match ? match[1] : "devis.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      router.push("/generateur");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Impossible de créer le devis.";
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
            {t("generateur.devis.back")}
          </Link>
          <span
            className="badge"
            style={{ fontSize: "0.75rem", background: "var(--teal-dark)", color: "white" }}
          >
            {t("generateur.devis.badge")}
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
              {t("generateur.devis.title")}
            </h1>
            <p
              style={{
                margin: "0 auto",
                fontSize: "0.9375rem",
                color: "var(--text-muted)",
                maxWidth: "50ch",
              }}
            >
              {t("generateur.devis.subtitle")}
            </p>
          </div>

          <form onSubmit={handleSubmit}>
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
                  {t("generateur.devis.issuerTitle")}
                </h2>
                <Link
                  href="/generateur/profil"
                  style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--teal)", textDecoration: "underline" }}
                >
                  {t("generateur.devis.editProfile")}
                </Link>
              </div>

              {loadingProfile ? (
                <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--text-muted)" }}>{t("generateur.devis.profileLoading")}</p>
              ) : profile ? (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem", fontSize: "0.875rem" }}>
                  <div>
                    <span style={{ color: "var(--text-muted)", display: "block", marginBottom: "0.125rem" }}>{locale === "en" ? "Company" : locale === "pl" ? "Firma" : locale === "pt" ? "Empresa" : locale === "ar" ? "الشركة" : "Entreprise"}</span>
                    <strong style={{ color: "var(--text-deep)", fontSize: "0.9375rem" }}>
                      {profile.companyName || <span style={{ color: "var(--rust)" }}>{t("generateur.devis.profileCompanyErr")}</span>}
                    </strong>
                  </div>
                  <div>
                    <span style={{ color: "var(--text-muted)", display: "block", marginBottom: "0.125rem" }}>SIRET</span>
                    <strong style={{ color: "var(--text-deep)" }}>
                      {profile.siret || <span style={{ color: "var(--rust)" }}>{t("generateur.devis.profileSiretErr")}</span>}
                    </strong>
                  </div>
                  <div>
                    <span style={{ color: "var(--text-muted)", display: "block", marginBottom: "0.125rem" }}>{locale === "en" ? "VAT No." : locale === "pl" ? "NIP" : locale === "pt" ? "N° IVA" : locale === "ar" ? "رقم الضريبة" : "N° TVA"}</span>
                    <strong style={{ color: "var(--text-deep)" }}>
                      {profile.vatNumber || <span style={{ color: "var(--text-muted)" }}>{t("generateur.devis.profileVatNone")}</span>}
                    </strong>
                  </div>
                  <div>
                    <span style={{ color: "var(--text-muted)", display: "block", marginBottom: "0.125rem" }}>{locale === "en" ? "Address" : locale === "pl" ? "Adres" : locale === "pt" ? "Endereço" : locale === "ar" ? "العنوان" : "Adresse"}</span>
                    <strong style={{ color: "var(--text-deep)" }}>
                      {profile.address ? (
                        `${profile.address}, ${profile.postalCode || ""} ${profile.city || ""}`
                      ) : (
                        <span style={{ color: "var(--rust)" }}>{t("generateur.devis.profileAddrErr")}</span>
                      )}
                    </strong>
                  </div>
                </div>
              ) : (
                <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--rust)" }}>{t("generateur.devis.profileError")}</p>
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
                {t("generateur.devis.clientTitle")}
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
                    {t("generateur.devis.clientNameLabel")}
                  </label>
                  <input
                    type="text"
                    id="clientName"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder={t("generateur.devis.clientNamePlaceholder")}
                    className="input-premium"
                    required
                    disabled={submitting}
                  />
                </div>

                {/* Address row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
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
                      {t("generateur.devis.clientAddressLabel")}
                    </label>
                    <input
                      type="text"
                      id="clientAddress"
                      value={clientAddress}
                      onChange={(e) => setClientAddress(e.target.value)}
                      placeholder={t("generateur.devis.clientAddressPlaceholder")}
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
                      {t("generateur.devis.clientCityLabel")}
                    </label>
                    <input
                      type="text"
                      id="clientCity"
                      value={clientCity}
                      onChange={(e) => setClientCity(e.target.value)}
                      placeholder={t("generateur.devis.clientCityPlaceholder")}
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
                      {t("generateur.devis.clientPostalCodeLabel")}
                    </label>
                    <input
                      type="text"
                      id="clientPostalCode"
                      value={clientPostalCode}
                      onChange={(e) => setClientPostalCode(e.target.value)}
                      placeholder={t("generateur.devis.clientPostalCodePlaceholder")}
                      className="input-premium"
                      disabled={submitting}
                    />
                  </div>
                </div>

                {/* SIRET & VAT row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
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
                      {t("generateur.devis.clientSiretLabel")}
                    </label>
                    <input
                      type="text"
                      id="clientSiret"
                      value={clientSiret}
                      onChange={(e) => setClientSiret(e.target.value)}
                      placeholder={t("generateur.devis.clientSiretPlaceholder")}
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
                      {t("generateur.devis.clientVatLabel")}
                    </label>
                    <input
                      type="text"
                      id="clientVatNumber"
                      value={clientVatNumber}
                      onChange={(e) => setClientVatNumber(e.target.value)}
                      placeholder={t("generateur.devis.clientVatPlaceholder")}
                      className="input-premium"
                      disabled={submitting}
                    />
                  </div>
                </div>

                {/* Validity Limit */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.375rem",
                    maxWidth: "280px",
                  }}
                >
                  <label
                    htmlFor="validUntil"
                    style={{
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      color: "var(--text-deep)",
                    }}
                  >
                    {t("generateur.devis.validUntilLabel")}
                  </label>
                  <input
                    type="date"
                    id="validUntil"
                    value={validUntil}
                    onChange={(e) => setValidUntil(e.target.value)}
                    className="input-premium"
                    disabled={submitting}
                  />
                </div>
              </div>
            </div>

            {/* Quote items card */}
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
                {t("generateur.devis.linesTitle")}
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {/* Table header (desktop) */}
                <div className="invoice-items-header">
                  <span>{t("generateur.devis.thDescription")}</span>
                  <span>{t("generateur.devis.thQty")}</span>
                  <span>{t("generateur.devis.thUnitPrice")}</span>
                  <span>{t("generateur.devis.thVat")}</span>
                  <span>{t("generateur.devis.thTotalHT")}</span>
                  <span></span>
                </div>

                {items.map((item, index) => (
                  <div
                    key={item.id}
                    className={`invoice-item-row ${
                      index % 2 === 0 ? "invoice-item-row-even" : ""
                    }`}
                  >
                    {/* Description */}
                    <div className="item-field-wrapper">
                      <span className="mobile-field-label">
                        {t("generateur.devis.thDescription")}
                      </span>
                      <textarea
                        value={item.description}
                        onChange={(e) =>
                          updateItem(item.id, "description", e.target.value)
                        }
                        placeholder={t("generateur.devis.placeholderDescription")}
                        className="input-premium invoice-item-desc"
                        disabled={submitting}
                        rows={2}
                      />
                    </div>

                    {/* Quantity */}
                    <div className="item-field-wrapper">
                      <span className="mobile-field-label">
                        {t("generateur.devis.thQty")}
                      </span>
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
                        placeholder="1"
                        className="input-premium"
                        style={{
                          padding: "0.625rem 0.5rem",
                          fontSize: "0.875rem",
                          textAlign: "center",
                        }}
                        disabled={submitting}
                      />
                    </div>

                    {/* Unit Price */}
                    <div className="item-field-wrapper">
                      <span className="mobile-field-label">
                        {t("generateur.devis.thUnitPrice")}
                      </span>
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
                        placeholder="0.00"
                        className="input-premium"
                        style={{
                          padding: "0.625rem 0.5rem",
                          fontSize: "0.875rem",
                          textAlign: "right",
                        }}
                        disabled={submitting}
                      />
                    </div>

                    {/* VAT Rate */}
                    <div className="item-field-wrapper">
                      <span className="mobile-field-label">
                        {t("generateur.devis.thVat")}
                      </span>
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
                          width: "100%",
                        }}
                        disabled={submitting}
                      >
                        {VAT_RATES.map((rate) => (
                          <option key={rate.value} value={rate.value}>
                            {rate.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Total HT */}
                    <div className="item-field-wrapper">
                      <span className="mobile-field-label">
                        {t("generateur.devis.thTotalHT")}
                      </span>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: "0.9375rem",
                          color: "var(--text-deep)",
                          textAlign: "right",
                          fontVariantNumeric: "tabular-nums",
                          padding: "0 0.25rem",
                          minHeight: "42px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                        }}
                      >
                        {formatEuro(computeLineTotalHT(item))} €
                      </div>
                    </div>

                    {/* Delete button */}
                    <div
                      className="item-field-wrapper"
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        className="mobile-field-label"
                        style={{ visibility: "hidden", marginBottom: "0.25rem" }}
                      >
                        Supprimer
                      </span>
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
                        title={t("generateur.devis.deleteLineTooltip")}
                      >
                        ×
                      </button>
                    </div>
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
                  {t("generateur.devis.addLineBtn")}
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
                    {t("generateur.devis.notesLabel")}
                  </label>
                  <textarea
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={t("generateur.devis.notesPlaceholder")}
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
                    <span>{t("generateur.devis.totalHT")}</span>
                    <span style={{ fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>
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
                    <span>{t("generateur.devis.totalVAT")}</span>
                    <span style={{ fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>
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
                      {t("generateur.devis.totalTTC")}
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
              {submitting ? t("generateur.devis.submitBtnLoading") : t("generateur.devis.submitBtn")}
            </button>

            <div style={{ textAlign: "center", marginTop: "0.75rem" }}>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                }}
              >
                {t("generateur.devis.footerDisclaimer")}
              </span>
            </div>
          </form>
        </div>
      </section>
    </article>
  );
}
