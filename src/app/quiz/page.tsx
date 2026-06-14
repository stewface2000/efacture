import type { Metadata } from "next";
import QuizEngine from "@/components/QuizEngine";

export const metadata: Metadata = {
  title: "Quiz Gratuit — Quelle Solution de Facturation Électronique Choisir ?",
  description:
    "Répondez à 5 questions simples et recevez une recommandation personnalisée de solution de facturation électronique adaptée à votre profil.",
};

export default function QuizPage() {
  return (
    <article>
      <section
        className="section"
        id="quiz-page"
        aria-label="Quiz de recommandation"
        style={{ paddingBottom: "2rem" }}
      >
        <div className="container">
          <div
            className="animate-fade-in-up"
            style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 2.5rem" }}
          >
            <span className="badge badge-teal" style={{ marginBottom: "1rem", display: "inline-flex" }}>
              ✨ Gratuit · 2 minutes
            </span>
            <h1>Trouvez votre solution en 2 minutes</h1>
            <p style={{ margin: "0.75rem auto 0", fontSize: "1.0625rem" }}>
              5 questions simples pour identifier la solution de facturation
              électronique parfaitement adaptée à votre situation.
            </p>
          </div>

          <QuizEngine />
        </div>
      </section>
    </article>
  );
}
