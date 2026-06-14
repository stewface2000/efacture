"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ProfileData {
  companyName: string;
  siret: string;
  vatNumber: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
  iban: string;
  bic: string;
  accentColor: string;
}

const defaultProfile: ProfileData = {
  companyName: "",
  siret: "",
  vatNumber: "",
  address: "",
  city: "",
  postalCode: "",
  phone: "",
  iban: "",
  bic: "",
  accentColor: "#0f766e",
};

export default function ProfilPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<ProfileData>(defaultProfile);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/user/profile");
        if (res.status === 401) {
          router.push("/login");
          return;
        }
        if (!res.ok) throw new Error("Erreur de chargement");
        const data = await res.json();
        setProfile({
          companyName: data.companyName || "",
          siret: data.siret || "",
          vatNumber: data.vatNumber || "",
          address: data.address || "",
          city: data.city || "",
          postalCode: data.postalCode || "",
          phone: data.phone || "",
          iban: data.iban || "",
          bic: data.bic || "",
          accentColor: data.accentColor || "#0f766e",
        });
      } catch {
        setError("Impossible de charger le profil.");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [router]);

  const handleChange = (field: keyof ProfileData, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
    setSuccess(false);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch("/api/user/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile),
      });

      if (res.status === 401) {
        router.push("/login");
        return;
      }

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erreur lors de la sauvegarde.");
      }

      setSuccess(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Impossible de sauvegarder.";
      setError(message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <article style={{ background: "var(--bg-warm)", minHeight: "100vh" }}>
        <section className="section">
          <div
            className="container"
            style={{
              maxWidth: "680px",
              textAlign: "center",
              padding: "4rem 2rem",
            }}
          >
            <p style={{ color: "var(--text-muted)", fontSize: "1rem" }}>
              Chargement du profil...
            </p>
          </div>
        </section>
      </article>
    );
  }

  const fieldGroups: {
    label: string;
    fields: {
      key: keyof ProfileData;
      label: string;
      type?: string;
      placeholder: string;
      half?: boolean;
    }[];
  }[] = [
    {
      label: "Informations de l'entreprise",
      fields: [
        {
          key: "companyName",
          label: "Raison sociale / Nom commercial",
          placeholder: "Ex: Martin Peinture SARL",
        },
        {
          key: "siret",
          label: "SIRET",
          placeholder: "Ex: 123 456 789 00001",
          half: true,
        },
        {
          key: "vatNumber",
          label: "Numéro de TVA intracommunautaire",
          placeholder: "Ex: FR12345678901",
          half: true,
        },
      ],
    },
    {
      label: "Adresse",
      fields: [
        {
          key: "address",
          label: "Adresse",
          placeholder: "Ex: 12 rue de la Paix",
        },
        {
          key: "city",
          label: "Ville",
          placeholder: "Ex: Paris",
          half: true,
        },
        {
          key: "postalCode",
          label: "Code postal",
          placeholder: "Ex: 75001",
          half: true,
        },
        {
          key: "phone",
          label: "Téléphone",
          placeholder: "Ex: 06 12 34 56 78",
        },
      ],
    },
    {
      label: "Coordonnées bancaires",
      fields: [
        {
          key: "iban",
          label: "IBAN",
          placeholder: "Ex: FR76 3000 1007 9400 0001 2345 678",
        },
        {
          key: "bic",
          label: "BIC / SWIFT",
          placeholder: "Ex: BNPAFRPP",
        },
      ],
    },
  ];

  return (
    <article style={{ background: "var(--bg-warm)", minHeight: "100vh" }}>
      {/* Header bar */}
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
            ← Retour au tableau de bord
          </Link>
        </div>
      </nav>

      <section
        className="section"
        style={{ paddingTop: "2rem", paddingBottom: "4rem" }}
      >
        <div className="container" style={{ maxWidth: "680px" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span
              className="badge badge-teal"
              style={{ marginBottom: "1rem", display: "inline-flex" }}
            >
              ⚙️ Paramètres
            </span>
            <h1
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                marginBottom: "0.5rem",
                marginTop: "0.5rem",
              }}
            >
              Mon profil émetteur
            </h1>
            <p
              style={{
                margin: "0 auto",
                fontSize: "0.9375rem",
                color: "var(--text-muted)",
                maxWidth: "50ch",
              }}
            >
              Ces informations apparaîtront sur toutes vos factures générées.
            </p>
          </div>

          {/* Form card */}
          <div
            style={{
              background: "var(--bg-white)",
              borderRadius: "var(--radius-xl)",
              padding: "clamp(1.5rem, 5vw, 2.5rem)",
              border: "1px solid var(--border-subtle)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              {fieldGroups.map((group) => (
                <div key={group.label}>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--teal-dark)",
                      margin: "0 0 1rem",
                      paddingBottom: "0.5rem",
                      borderBottom: "2px solid var(--teal-bg)",
                    }}
                  >
                    {group.label}
                  </h3>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(240px, 1fr))",
                      gap: "1.25rem",
                    }}
                  >
                    {group.fields.map((field) => (
                      <div
                        key={field.key}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.375rem",
                          gridColumn: field.half ? "span 1" : "1 / -1",
                        }}
                      >
                        <label
                          htmlFor={field.key}
                          style={{
                            fontWeight: 600,
                            fontSize: "0.875rem",
                            color: "var(--text-deep)",
                          }}
                        >
                          {field.label}
                        </label>
                        <input
                          type={field.type || "text"}
                          id={field.key}
                          value={profile[field.key]}
                          onChange={(e) =>
                            handleChange(field.key, e.target.value)
                          }
                          placeholder={field.placeholder}
                          className="input-premium"
                          disabled={saving}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Accent Color */}
              <div>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--teal-dark)",
                    margin: "0 0 1rem",
                    paddingBottom: "0.5rem",
                    borderBottom: "2px solid var(--teal-bg)",
                  }}
                >
                  Personnalisation
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.375rem",
                  }}
                >
                  <label
                    htmlFor="accentColor"
                    style={{
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      color: "var(--text-deep)",
                    }}
                  >
                    Couleur d&apos;accent des factures
                  </label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <input
                      type="color"
                      id="accentColor"
                      value={profile.accentColor}
                      onChange={(e) =>
                        handleChange("accentColor", e.target.value)
                      }
                      disabled={saving}
                      style={{
                        width: "3.5rem",
                        height: "3.5rem",
                        border: "2px solid var(--border-medium)",
                        borderRadius: "var(--radius-md)",
                        cursor: "pointer",
                        padding: "2px",
                        background: "var(--bg-white)",
                      }}
                    />
                    <div>
                      <p
                        style={{
                          margin: 0,
                          fontWeight: 600,
                          fontSize: "0.9375rem",
                          color: "var(--text-deep)",
                          fontFamily: "monospace",
                        }}
                      >
                        {profile.accentColor}
                      </p>
                      <p
                        style={{
                          margin: "0.125rem 0 0",
                          fontSize: "0.8125rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        Barre d&apos;en-tête, tableau et totaux de la facture
                      </p>
                    </div>
                    {/* Preview swatch */}
                    <div
                      style={{
                        marginLeft: "auto",
                        width: "4rem",
                        height: "2.5rem",
                        borderRadius: "var(--radius-sm)",
                        background: profile.accentColor,
                        boxShadow: "var(--shadow-sm)",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Error / Success */}
              {error && (
                <div
                  style={{
                    color: "var(--rust)",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                  role="alert"
                >
                  ⚠ {error}
                </div>
              )}

              {success && (
                <div
                  style={{
                    color: "var(--teal-dark)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    background: "var(--teal-bg)",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                  role="status"
                >
                  ✅ Profil sauvegardé avec succès
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="btn btn-accent btn-lg"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  marginTop: "0.5rem",
                }}
                disabled={saving}
              >
                {saving ? "Sauvegarde en cours..." : "💾 Sauvegarder le profil"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </article>
  );
}
