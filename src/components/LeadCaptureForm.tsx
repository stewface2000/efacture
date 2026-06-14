"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function LeadCaptureForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Une erreur est survenue.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Une erreur est survenue. Veuillez réessayer.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "1rem 0" }}>
        <p style={{ color: "rgba(255,255,255,0.9)", fontWeight: 600, fontSize: "1.0625rem" }}>
          {t("leadCapture.successMsg")}
        </p>
      </div>
    );
  }

  return (
    <div style={{ width: "100%", maxWidth: "480px", marginInline: "auto" }}>
      <form className="lead-capture-form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="lead-capture-input"
          placeholder={t("leadCapture.emailPlaceholder")}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError(null);
          }}
          required
          aria-label={t("leadCapture.emailPlaceholder")}
          id="lead-email-input"
          disabled={submitting}
        />
        <button 
          type="submit" 
          className="btn btn-accent" 
          style={{ borderColor: "var(--teal-light)" }}
          disabled={submitting}
        >
          {submitting ? t("leadCapture.subscribingBtn") : t("leadCapture.subscribeBtn")}
        </button>
      </form>
      {error && (
        <p style={{ color: "var(--rust-light)", fontSize: "0.8125rem", marginTop: "0.5rem", textAlign: "left", marginInline: "auto", maxWidth: "480px" }}>
          ⚠ {error}
        </p>
      )}
    </div>
  );
}

