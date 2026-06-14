"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="btn btn-secondary btn-sm btn-print-action"
      style={{ display: "inline-flex", gap: "0.5rem", fontWeight: 600 }}
      title="Télécharger ou imprimer ce diagnostic pour votre comptable"
    >
      🖨️ Imprimer ou Enregistrer en PDF
    </button>
  );
}
