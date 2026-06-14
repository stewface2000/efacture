"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageContext";

interface InvoiceSummary {
  id: string;
  invoiceNumber: string;
  issueDate: string;
  clientName: string;
  totalTTC: number;
}

interface DashboardProps {
  user: {
    id: string;
    email: string;
    companyName: string | null;
    hasActiveSubscription: boolean;
  };
  invoiceCount: number;
  invoices: InvoiceSummary[];
  justSubscribed: boolean;
}

export default function GenerateurDashboard({
  user,
  invoiceCount,
  invoices,
  justSubscribed,
}: DashboardProps) {
  const router = useRouter();
  const { t, locale } = useLanguage();
  const [loggingOut, setLoggingOut] = useState(false);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const freeQuota = 3;
  const quotaUsed = Math.min(invoiceCount, freeQuota);
  const quotaExhausted = invoiceCount >= freeQuota && !user.hasActiveSubscription;

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/");
    } catch {
      setLoggingOut(false);
    }
  };

  const handleDownloadPDF = async (invoiceId: string, invoiceNumber: string) => {
    setDownloadingId(invoiceId);
    try {
      const res = await fetch(`/api/invoices/${invoiceId}/pdf`);
      if (!res.ok) throw new Error("Erreur lors du téléchargement");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${invoiceNumber}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      alert(t("generateur.dashboard.downloadError"));
    } finally {
      setDownloadingId(null);
    }
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    const dateLocale = locale === "ar" ? "ar-EG" : locale === "en" ? "en-US" : locale === "pl" ? "pl-PL" : locale === "pt" ? "pt-PT" : "fr-FR";
    return d.toLocaleDateString(dateLocale, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };


  return (
    <article style={{ background: "var(--bg-warm)", minHeight: "100vh" }}>
      {/* Navbar */}
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
            href="/"
            style={{
              fontWeight: 800,
              fontSize: "1.125rem",
              color: "var(--text-deep)",
              letterSpacing: "-0.02em",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "2rem",
                height: "2rem",
                background: "var(--teal)",
                color: "white",
                borderRadius: "var(--radius-sm)",
                fontSize: "0.875rem",
                fontWeight: 700,
              }}
            >
              eF
            </span>
            efacture
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <Link href="/generateur/profil" className="btn btn-secondary btn-sm">
              {t("generateur.dashboard.profileBtn")}
            </Link>
            <button
              onClick={handleLogout}
              disabled={loggingOut}
              className="btn btn-sm"
              style={{
                background: "transparent",
                color: "var(--text-muted)",
                border: "1px solid var(--border-subtle)",
                cursor: loggingOut ? "not-allowed" : "pointer",
              }}
            >
              {loggingOut ? "..." : t("generateur.dashboard.logoutBtn")}
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="section" style={{ paddingTop: "2.5rem" }}>
        <div className="container" style={{ maxWidth: "960px" }}>
          {/* Subscription success banner */}
          {justSubscribed && (
            <div
              style={{
                background: "var(--teal-bg)",
                border: "1px solid var(--teal-muted)",
                borderRadius: "var(--radius-lg)",
                padding: "1.25rem 1.5rem",
                marginBottom: "2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>🎉</span>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    color: "var(--teal-dark)",
                    margin: 0,
                    fontSize: "0.9375rem",
                  }}
                >
                  {t("generateur.dashboard.justSubscribedTitle")}
                </p>
                <p
                  style={{
                    color: "var(--teal)",
                    margin: "0.25rem 0 0",
                    fontSize: "0.8125rem",
                  }}
                >
                  {t("generateur.dashboard.justSubscribedDesc")}
                </p>
              </div>
            </div>
          )}

          {/* Welcome header */}
          <div style={{ marginBottom: "2rem" }}>
            <h1
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                marginBottom: "0.5rem",
                marginTop: 0,
              }}
            >
              {t("generateur.dashboard.welcome").replace("{name}", user.companyName || user.email)}
            </h1>
            <p
              style={{
                color: "var(--text-muted)",
                margin: 0,
                fontSize: "1rem",
              }}
            >
              {t("generateur.dashboard.subtitle")}
            </p>
          </div>

          {/* Quota & Actions row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            {/* Quota card */}
            <div
              className="card"
              style={{ position: "relative", overflow: "hidden" }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: quotaExhausted
                    ? "var(--rust)"
                    : "var(--gradient-teal)",
                  borderRadius: "var(--radius-lg) var(--radius-lg) 0 0",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  marginBottom: "1rem",
                }}
              >
                <div>
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      color: "var(--text-muted)",
                      margin: "0 0 0.375rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {t("generateur.dashboard.quotaTitle")}
                  </p>
                  <p
                    style={{
                      fontWeight: 800,
                      fontSize: "1.75rem",
                      color: "var(--text-deep)",
                      margin: 0,
                      lineHeight: 1,
                    }}
                  >
                    {user.hasActiveSubscription ? "∞" : `${quotaUsed}/${freeQuota}`}
                  </p>
                </div>
                <span
                  className={`badge ${
                    user.hasActiveSubscription ? "badge-teal" : "badge-muted"
                  }`}
                >
                  {user.hasActiveSubscription ? t("generateur.dashboard.quotaPro") : t("generateur.dashboard.quotaFree")}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  margin: "0 0 1rem",
                }}
              >
                {user.hasActiveSubscription
                  ? t("generateur.dashboard.quotaDescPro")
                  : t("generateur.dashboard.quotaDescFree")
                      .replace("{used}", String(quotaUsed))
                      .replace("{s}", quotaUsed > 1 ? "s" : "")
                      .replace("{total}", String(freeQuota))}
              </p>

              {/* Progress bar */}
              {!user.hasActiveSubscription && (
                <div
                  style={{
                    width: "100%",
                    height: "8px",
                    background: "var(--bg-cream)",
                    borderRadius: "var(--radius-full)",
                    overflow: "hidden",
                    marginBottom: quotaExhausted ? "1rem" : 0,
                  }}
                >
                  <div
                    style={{
                      width: `${(quotaUsed / freeQuota) * 100}%`,
                      height: "100%",
                      background: quotaExhausted
                        ? "var(--rust)"
                        : "var(--gradient-teal)",
                      borderRadius: "var(--radius-full)",
                      transition: "width 500ms var(--ease-out-expo)",
                    }}
                  />
                </div>
              )}

              {quotaExhausted && (
                <Link
                  href="/api/stripe/checkout"
                  className="btn btn-cta btn-sm"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  {t("generateur.dashboard.quotaUpgradeCta")}
                </Link>
              )}
            </div>

            {/* Quick actions card */}
            <div className="card" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  color: "var(--text-muted)",
                  margin: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {t("generateur.dashboard.quickActions")}
              </p>
              <Link
                href="/generateur/nouvelle"
                className="btn btn-accent"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  fontSize: "1rem",
                  padding: "1rem 2rem",
                }}
              >
                {t("generateur.dashboard.actionNew")}
              </Link>
              <Link
                href="/generateur/profil"
                className="btn btn-secondary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                {t("generateur.dashboard.actionProfile")}
              </Link>
            </div>
          </div>

          {/* Invoices list */}
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1.25rem",
              }}
            >
              <h2 style={{ margin: 0, fontSize: "1.375rem" }}>
                {t("generateur.dashboard.myInvoices")}
              </h2>
              <span className="badge badge-muted">
                {t("generateur.dashboard.invoicesCountBadge")
                  .replace("{count}", String(invoices.length))
                  .replace("{s}", invoices.length !== 1 ? "s" : "")}
              </span>
            </div>

            {invoices.length === 0 ? (
              <div
                className="card"
                style={{
                  textAlign: "center",
                  padding: "3rem 2rem",
                }}
              >
                <p
                  style={{
                    fontSize: "2.5rem",
                    margin: "0 0 1rem",
                  }}
                >
                  📄
                </p>
                <p
                  style={{
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    margin: "0 0 0.5rem",
                  }}
                >
                  {t("generateur.dashboard.emptyTitle")}
                </p>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.875rem",
                    margin: "0 0 1.5rem",
                    maxWidth: "40ch",
                    marginInline: "auto",
                  }}
                >
                  {t("generateur.dashboard.emptyDesc")}
                </p>
                <Link
                  href="/generateur/nouvelle"
                  className="btn btn-accent btn-sm"
                >
                  {t("generateur.dashboard.emptyCta")}
                </Link>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {invoices.map((inv) => (
                  <div
                    key={inv.id}
                    className="card"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr auto",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "1.25rem 1.5rem",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontWeight: 700,
                          color: "var(--text-deep)",
                          margin: 0,
                          fontSize: "0.9375rem",
                        }}
                      >
                        {inv.invoiceNumber}
                      </p>
                      <p
                        style={{
                          color: "var(--text-muted)",
                          fontSize: "0.8125rem",
                          margin: "0.125rem 0 0",
                        }}
                      >
                        {formatDate(inv.issueDate)}
                      </p>
                    </div>
                    <p
                      style={{
                        color: "var(--text-secondary)",
                        margin: 0,
                        fontSize: "0.9375rem",
                      }}
                    >
                      {inv.clientName}
                    </p>
                    <p
                      style={{
                        fontWeight: 700,
                        color: "var(--teal-dark)",
                        margin: 0,
                        fontSize: "1rem",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {inv.totalTTC.toFixed(2)} €
                    </p>
                    <button
                      onClick={() => handleDownloadPDF(inv.id, inv.invoiceNumber)}
                      disabled={downloadingId === inv.id}
                      className="btn btn-sm btn-secondary"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {downloadingId === inv.id ? "⏳" : "📥"} {t("generateur.dashboard.downloadBtn")}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </article>
  );
}

