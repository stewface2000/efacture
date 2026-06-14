"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

type ConsentState = {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
  thirdParty: boolean;
};

const CONSENT_KEY = "cookie_consent";
const CONSENT_VERSION = "v1";

function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed.consent;
  } catch {
    return null;
  }
}

function storeConsent(consent: ConsentState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(
    CONSENT_KEY,
    JSON.stringify({ consent, version: CONSENT_VERSION, timestamp: Date.now() })
  );
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    necessary: true,
    analytics: false,
    functional: false,
    thirdParty: false,
  });

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      // Small delay for smoother entrance animation
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setConsent(stored);
    }
  }, []);

  const handleAcceptAll = useCallback(() => {
    const allAccepted: ConsentState = {
      necessary: true,
      analytics: true,
      functional: true,
      thirdParty: true,
    };
    setConsent(allAccepted);
    storeConsent(allAccepted);
    setVisible(false);
  }, []);

  const handleRejectAll = useCallback(() => {
    const onlyNecessary: ConsentState = {
      necessary: true,
      analytics: false,
      functional: false,
      thirdParty: false,
    };
    setConsent(onlyNecessary);
    storeConsent(onlyNecessary);
    setVisible(false);
  }, []);

  const handleSavePreferences = useCallback(() => {
    storeConsent(consent);
    setVisible(false);
  }, [consent]);

  const toggleCategory = (key: keyof ConsentState) => {
    if (key === "necessary") return; // Always on
    setConsent((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Allow re-opening from cookie settings button on legal/cookies page
  useEffect(() => {
    const handler = () => {
      setVisible(true);
      setShowDetails(true);
    };
    const btn = document.getElementById("legal-cookie-settings-btn");
    btn?.addEventListener("click", handler);
    return () => btn?.removeEventListener("click", handler);
  }, []);

  if (!visible) return null;

  return (
    <div className="cookie-overlay" role="dialog" aria-label="Gestion des cookies" aria-modal="true">
      <div className="cookie-banner">
        <div className="cookie-banner-header">
          <span className="cookie-banner-icon">🍪</span>
          <h3>Nous respectons votre vie privée</h3>
        </div>

        <p className="cookie-banner-text">
          Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et 
          personnaliser nos recommandations. Vous pouvez choisir les cookies que vous acceptez.
        </p>

        {showDetails && (
          <div className="cookie-details">
            <div className="cookie-category">
              <label className="cookie-toggle">
                <input
                  type="checkbox"
                  checked={consent.necessary}
                  disabled
                  aria-label="Cookies nécessaires"
                />
                <span className="cookie-toggle-slider cookie-toggle-locked" />
                <div className="cookie-toggle-info">
                  <strong>Cookies nécessaires</strong>
                  <span>Indispensables au fonctionnement du site</span>
                </div>
                <span className="badge badge-teal" style={{ fontSize: "0.75rem" }}>Requis</span>
              </label>
            </div>

            <div className="cookie-category">
              <label className="cookie-toggle">
                <input
                  type="checkbox"
                  checked={consent.analytics}
                  onChange={() => toggleCategory("analytics")}
                  aria-label="Cookies analytiques"
                />
                <span className="cookie-toggle-slider" />
                <div className="cookie-toggle-info">
                  <strong>Cookies analytiques</strong>
                  <span>Mesure d'audience et amélioration du site</span>
                </div>
              </label>
            </div>

            <div className="cookie-category">
              <label className="cookie-toggle">
                <input
                  type="checkbox"
                  checked={consent.functional}
                  onChange={() => toggleCategory("functional")}
                  aria-label="Cookies fonctionnels"
                />
                <span className="cookie-toggle-slider" />
                <div className="cookie-toggle-info">
                  <strong>Cookies fonctionnels</strong>
                  <span>Sauvegarde des préférences et du quiz</span>
                </div>
              </label>
            </div>

            <div className="cookie-category">
              <label className="cookie-toggle">
                <input
                  type="checkbox"
                  checked={consent.thirdParty}
                  onChange={() => toggleCategory("thirdParty")}
                  aria-label="Cookies tiers / affiliation"
                />
                <span className="cookie-toggle-slider" />
                <div className="cookie-toggle-info">
                  <strong>Cookies tiers</strong>
                  <span>Suivi d'affiliation (Indy, Pennylane, etc.)</span>
                </div>
              </label>
            </div>
          </div>
        )}

        <div className="cookie-actions">
          {showDetails ? (
            <>
              <button
                className="btn btn-primary btn-sm"
                onClick={handleSavePreferences}
                id="cookie-save-prefs"
              >
                Enregistrer mes choix
              </button>
              <button
                className="btn btn-accent btn-sm"
                onClick={handleAcceptAll}
                id="cookie-accept-all-detail"
              >
                Tout accepter
              </button>
            </>
          ) : (
            <>
              <button
                className="btn btn-primary btn-sm"
                onClick={handleAcceptAll}
                id="cookie-accept-all"
              >
                Tout accepter
              </button>
              <button
                className="btn btn-secondary btn-sm"
                onClick={handleRejectAll}
                id="cookie-reject-all"
              >
                Tout refuser
              </button>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setShowDetails(true)}
                id="cookie-customize"
              >
                Personnaliser
              </button>
            </>
          )}
        </div>

        <p className="cookie-policy-link">
          En savoir plus dans notre{" "}
          <Link href="/legal/cookies" className="legal-link">
            politique de cookies
          </Link>
        </p>
      </div>
    </div>
  );
}
