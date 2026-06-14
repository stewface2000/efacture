"use client";

import { useRouter } from "next/navigation";
import { useState, Suspense } from "react";

function CheckoutSimuContent() {
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSimulatePayment = async () => {
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/billing/webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "SIMULATE_PAYMENT_SUCCESS" }),
      });

      if (!res.ok) {
        throw new Error("Erreur de traitement du paiement simulé.");
      }

      router.push("/generateur?subscribed=true");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Erreur de communication.";
      setError(message);
      setSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: "480px", margin: "4rem auto", padding: "0 1rem" }}>
      <div style={{
        background: "#ffffff",
        borderRadius: "16px",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        border: "1px solid #e2e8f0",
        overflow: "hidden",
      }}>
        {/* Stripe Header */}
        <div style={{
          padding: "1.5rem 2rem",
          background: "#635bff",
          color: "#ffffff",
          textAlign: "center",
        }}>
          <h2 style={{ margin: 0, fontSize: "1.25rem", color: "#fff", fontWeight: 700 }}>
            Stripe Checkout <span style={{ opacity: 0.8, fontSize: "0.875rem", fontWeight: 400 }}>(Simulateur)</span>
          </h2>
        </div>

        {/* Checkout Summary */}
        <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div>
            <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>
              Abonnement
            </div>
            <div style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text-deep)" }}>
              Abonnement Générateur Factur-X
            </div>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
              Génération illimitée de factures Factur-X
            </div>
          </div>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem 0",
            borderTop: "1px dashed #e2e8f0",
            borderBottom: "1px dashed #e2e8f0",
          }}>
            <span style={{ fontWeight: 600, color: "var(--text-secondary)" }}>Prix mensuel</span>
            <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#635bff" }}>9,00&nbsp;€/mois</span>
          </div>

          {/* Fake credit card inputs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                Numéro de carte
              </label>
              <input
                type="text"
                placeholder="4242 4242 4242 4242"
                disabled
                style={{
                  padding: "0.625rem 0.875rem",
                  border: "1px solid #cbd5e1",
                  borderRadius: "6px",
                  fontSize: "0.875rem",
                  background: "#f8fafc",
                  color: "#64748b",
                }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                  Date d&apos;expiration
                </label>
                <input
                  type="text"
                  placeholder="12/28"
                  disabled
                  style={{
                    padding: "0.625rem 0.875rem",
                    border: "1px solid #cbd5e1",
                    borderRadius: "6px",
                    fontSize: "0.875rem",
                    background: "#f8fafc",
                    color: "#64748b",
                  }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                  CVC
                </label>
                <input
                  type="text"
                  placeholder="123"
                  disabled
                  style={{
                    padding: "0.625rem 0.875rem",
                    border: "1px solid #cbd5e1",
                    borderRadius: "6px",
                    fontSize: "0.875rem",
                    background: "#f8fafc",
                    color: "#64748b",
                  }}
                />
              </div>
            </div>
          </div>

          {error && (
            <div style={{ color: "var(--rust)", fontSize: "0.875rem", fontWeight: 500 }}>
              ⚠ {error}
            </div>
          )}

          {/* Simulate Action Button */}
          <button
            onClick={handleSimulatePayment}
            disabled={submitting}
            style={{
              padding: "1rem",
              background: "#635bff",
              color: "#ffffff",
              border: "none",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#5b51e6")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#635bff")}
          >
            {submitting ? "Traitement en cours..." : "Simuler l\u2019abonnement"}
          </button>

          <p style={{ margin: 0, fontSize: "0.75rem", color: "var(--text-muted)", textAlign: "center" }}>
            Ceci est un environnement de test. Aucun débit réel ne sera effectué.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutSimuPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: "center", padding: "4rem" }}>Chargement...</div>}>
      <CheckoutSimuContent />
    </Suspense>
  );
}
