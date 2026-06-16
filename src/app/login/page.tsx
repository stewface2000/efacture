"use client";

import { useState, FormEvent } from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [devLink, setDevLink] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [errorDetails, setErrorDetails] = useState<string | null>(null);
  const { t } = useLanguage();

  // Check URL for error and redirect params
  const urlParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;
  const urlError = urlParams ? urlParams.get("error") : null;
  const redirectUrl = urlParams ? urlParams.get("redirect") : null;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setErrorDetails(null);
    setDevLink(null);

    try {
      const res = await fetch("/api/auth/magic-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, redirectUrl }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || t("login.serverError"));
        if (data.details) {
          setErrorDetails(data.details);
        }
        return;
      }

      setSuccess(true);

      if (data.devLink) {
        setDevLink(data.devLink);
      }
    } catch (err) {
      setError(t("login.serverError"));
      setErrorDetails(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  }


  return (
    <div
      style={{
        minHeight: "calc(100vh - 8rem)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1rem",
        background: "var(--bg-warm)",
      }}
    >
      <div
        className="glass-card animate-fade-in-up"
        style={{
          width: "100%",
          maxWidth: "440px",
          padding: "clamp(2rem, 5vw, 3rem)",
        }}
      >
        {/* Branding */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "3.5rem",
              height: "3.5rem",
              background: "var(--teal)",
              color: "#ffffff",
              borderRadius: "var(--radius-md)",
              fontSize: "1.5rem",
              fontWeight: 800,
              marginBottom: "1rem",
            }}
          >
            ef
          </div>
          <h1
            style={{
              fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
              fontWeight: 800,
              color: "var(--text-deep)",
              margin: "0 0 0.5rem 0",
              letterSpacing: "-0.02em",
            }}
          >
            {t("login.title")}
          </h1>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "var(--text-muted)",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            {t("login.description")}
          </p>
        </div>

        {/* URL error message (e.g. invalid magic link) */}
        {urlError === "invalid" && !success && (
          <div
            style={{
              padding: "0.75rem 1rem",
              marginBottom: "1.5rem",
              background: "var(--rust-bg)",
              border: "1px solid var(--rust-light)",
              borderRadius: "var(--radius-md)",
              color: "var(--rust-dark)",
              fontSize: "0.875rem",
              lineHeight: 1.5,
            }}
          >
            {t("login.invalidLink")}
          </div>
        )}

        {!success ? (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "1rem" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  marginBottom: "0.5rem",
                }}
              >
                {t("login.emailLabel")}
              </label>
              <input
                id="email"
                type="email"
                className="input-premium"
                placeholder={t("login.emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                autoFocus
                disabled={loading}
              />
            </div>

            {error && (
              <div
                style={{
                  padding: "0.625rem 1rem",
                  marginBottom: "1rem",
                  background: "var(--rust-bg)",
                  border: "1px solid var(--rust-light)",
                  borderRadius: "var(--radius-md)",
                  color: "var(--rust-dark)",
                  fontSize: "0.8125rem",
                  lineHeight: 1.5,
                }}
              >
                <div>{error}</div>
                {errorDetails && (
                  <pre
                    style={{
                      marginTop: "0.5rem",
                      padding: "0.5rem",
                      background: "rgba(0,0,0,0.05)",
                      borderRadius: "4px",
                      fontSize: "0.7rem",
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-all",
                      fontFamily: "monospace",
                    }}
                  >
                    {errorDetails}
                  </pre>
                )}
              </div>
            )}


            <button
              type="submit"
              className="btn btn-accent"
              disabled={loading}
              style={{
                width: "100%",
                fontSize: "0.9375rem",
                position: "relative",
              }}
            >
              {loading ? (
                <span
                  style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ animation: "spin 1s linear infinite" }}
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray="31.4 31.4"
                      strokeLinecap="round"
                    />
                  </svg>
                  {t("login.sendingBtn")}
                </span>
              ) : (
                t("login.ctaBtn")
              )}
            </button>
          </form>
        ) : (
          <div className="animate-fade-in-up" style={{ textAlign: "center" }}>
            {/* Success state */}
            <div
              style={{
                width: "3rem",
                height: "3rem",
                margin: "0 auto 1rem",
                background: "var(--teal-bg)",
                borderRadius: "var(--radius-full)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--teal)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <span className="badge badge-teal" style={{ marginBottom: "1rem" }}>
              {t("login.successTitle")}
            </span>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                marginTop: "1rem",
                marginBottom: 0,
              }}
            >
              {t("login.successDesc")}
            </p>

            {devLink && (
              <div
                style={{
                  marginTop: "1.5rem",
                  padding: "1rem",
                  background: "var(--bg-cream)",
                  borderRadius: "var(--radius-md)",
                  border: "1px dashed var(--border-medium)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    margin: "0 0 0.5rem 0",
                  }}
                >
                  {t("login.devModeTitle")}
                </p>
                <a
                  href={devLink}
                  style={{
                    color: "var(--teal)",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    wordBreak: "break-all",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                  }}
                >
                  {t("login.devModeLink")}
                </a>
              </div>
            )}

            <button
              type="button"
              onClick={() => {
                setSuccess(false);
                setDevLink(null);
                setEmail("");
              }}
              style={{
                marginTop: "1.5rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--text-muted)",
                fontSize: "0.8125rem",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                fontFamily: "inherit",
              }}
            >
              {t("login.useAnotherEmail")}
            </button>
          </div>
        )}

        {/* Footer note */}
        <p
          style={{
            textAlign: "center",
            fontSize: "0.75rem",
            color: "var(--text-light)",
            marginTop: "2rem",
            marginBottom: 0,
            lineHeight: 1.6,
          }}
        >
          {t("login.footerNote")}
          <a
            href="/legal/cgu"
            style={{
              color: "var(--teal)",
              textDecoration: "underline",
              textUnderlineOffset: "2px",
            }}
          >
            {t("login.footerNoteLink")}
          </a>
          .
        </p>
      </div>
    </div>
  );
}

