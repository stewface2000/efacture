"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { quizQuestions, TOTAL_STEPS } from "@/lib/quiz-data";

type Answers = Record<string, string>;

type QuizStep = "quiz" | "email" | "submitting";

export default function QuizEngine() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [phase, setPhase] = useState<QuizStep>("quiz");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  const currentQuestion = quizQuestions[currentStep];
  const progress = ((currentStep + (phase === "email" ? 1 : 0)) / (TOTAL_STEPS + 1)) * 100;

  const handleSelectOption = useCallback(
    (value: string) => {
      setSelectedOption(value);
      setError(null);

      // Auto-advance after a short delay for visual feedback
      setTimeout(() => {
        const newAnswers = { ...answers, [currentQuestion.id]: value };
        setAnswers(newAnswers);

        if (currentStep < TOTAL_STEPS - 1) {
          setDirection("forward");
          setCurrentStep((prev) => prev + 1);
          setSelectedOption(null);
        } else {
          // All questions answered — show email capture
          setPhase("email");
        }
      }, 300);
    },
    [answers, currentQuestion, currentStep]
  );

  const handleBack = useCallback(() => {
    if (phase === "email") {
      setPhase("quiz");
      setSelectedOption(answers[quizQuestions[TOTAL_STEPS - 1].id] || null);
      return;
    }
    if (currentStep > 0) {
      setDirection("backward");
      setCurrentStep((prev) => prev - 1);
      setSelectedOption(answers[quizQuestions[currentStep - 1].id] || null);
    }
  }, [phase, currentStep, answers]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!email || !email.includes("@")) {
        setError("Veuillez entrer une adresse email valide.");
        return;
      }

      setPhase("submitting");
      setError(null);

      try {
        const res = await fetch("/api/quiz", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ answers, email }),
        });

        if (!res.ok) {
          throw new Error("Erreur lors de l'envoi");
        }

        const data = await res.json();
        router.push(`/quiz/resultat/${data.resultId}`);
      } catch {
        setError("Une erreur est survenue. Veuillez réessayer.");
        setPhase("email");
      }
    },
    [answers, email, router]
  );

  return (
    <div className="quiz-container">
      {/* Progress Bar */}
      <div className="quiz-progress" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}>
        <div className="quiz-progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <div className="quiz-progress-label">
        {phase === "email"
          ? "Dernière étape"
          : `Question ${currentStep + 1} sur ${TOTAL_STEPS}`}
      </div>

      {/* Quiz Questions */}
      {phase === "quiz" && (
        <div className="quiz-step" key={currentQuestion.id}>
          <div className="quiz-question-card">
            <h2 className="quiz-question">{currentQuestion.question}</h2>
            {currentQuestion.helpText && (
              <p className="quiz-help">{currentQuestion.helpText}</p>
            )}

            <div className="quiz-options" role="radiogroup" aria-label={currentQuestion.question}>
              {currentQuestion.options.map((option) => {
                const isSelected = selectedOption === option.value || answers[currentQuestion.id] === option.value;
                return (
                  <button
                    key={option.id}
                    className={`quiz-option${isSelected ? " selected" : ""}`}
                    onClick={() => handleSelectOption(option.value)}
                    role="radio"
                    aria-checked={isSelected}
                    type="button"
                  >
                    <span className="quiz-option-icon" aria-hidden="true">
                      {option.icon}
                    </span>
                    <span className="quiz-option-text">{option.text}</span>
                    <span className="quiz-option-check" aria-hidden="true" />
                  </button>
                );
              })}
            </div>
          </div>

          {currentStep > 0 && (
            <button className="quiz-back" onClick={handleBack} type="button">
              ← Question précédente
            </button>
          )}
        </div>
      )}

      {/* Email Capture Step */}
      {phase === "email" && (
        <div className="quiz-step">
          <div className="quiz-question-card">
            <div className="quiz-email-icon" aria-hidden="true">📩</div>
            <h2 className="quiz-question">
              Où devons-nous envoyer votre diagnostic personnalisé ?
            </h2>
            <p className="quiz-help">
              Recevez votre recommandation détaillée par email, avec un accès 
              direct à votre résultat en ligne.
            </p>

            <form onSubmit={handleSubmit} className="quiz-email-form">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(null);
                }}
                placeholder="votre@email.com"
                className="quiz-email-input"
                required
                autoFocus
                id="quiz-email"
                aria-label="Adresse email pour le diagnostic"
              />
              {error && (
                <p className="quiz-error" role="alert">{error}</p>
              )}
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }}>
                Voir mon diagnostic personnalisé →
              </button>
              <p className="quiz-email-privacy">
                🔒 Vos données sont protégées. Pas de spam, désinscription en un clic.
              </p>
            </form>
          </div>

          <button className="quiz-back" onClick={handleBack} type="button">
            ← Question précédente
          </button>
        </div>
      )}

      {/* Submitting State */}
      {phase === "submitting" && (
        <div className="quiz-step">
          <div className="quiz-question-card" style={{ textAlign: "center" }}>
            <div className="quiz-loading" aria-hidden="true">
              <div className="quiz-spinner" />
            </div>
            <h2 className="quiz-question" style={{ fontSize: "1.25rem" }}>
              Analyse de votre profil en cours...
            </h2>
            <p className="quiz-help">
              Nous comparons votre situation avec les solutions disponibles.
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        .quiz-container {
          max-width: 640px;
          margin: 0 auto;
        }

        .quiz-progress {
          height: 6px;
          background: var(--border-subtle);
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .quiz-progress-bar {
          height: 100%;
          background: var(--teal);
          border-radius: 3px;
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .quiz-progress-label {
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }

        .quiz-step {
          animation: quizFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes quizFadeIn {
          from {
            opacity: 0;
            transform: translateX(${direction === "forward" ? "20px" : "-20px"});
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .quiz-question-card {
          background: var(--bg-white);
          border-radius: var(--radius-xl);
          padding: clamp(1.5rem, 4vw, 2.5rem);
          border: 1px solid rgba(15, 118, 110, 0.08);
          box-shadow: 0 10px 30px rgba(15, 118, 110, 0.03), var(--shadow-md);
          position: relative;
          overflow: hidden;
        }

        .quiz-question-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--gradient-teal);
        }

        .quiz-question {
          font-size: clamp(1.25rem, 3vw, 1.5rem);
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 0.5rem;
          color: var(--text-deep);
          letter-spacing: -0.02em;
        }

        .quiz-help {
          font-size: 0.875rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.75rem;
          max-width: none;
        }

        .quiz-options {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .quiz-option {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.125rem 1.5rem;
          background: var(--bg-warm);
          border: 1.5px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all var(--duration-normal) var(--ease-out-expo);
          text-align: left;
          font-family: inherit;
          font-size: 0.9375rem;
          color: var(--text-deep);
          width: 100%;
          position: relative;
        }

        .quiz-option:hover {
          border-color: var(--teal-light);
          background: var(--teal-bg);
          transform: translateY(-2px) scale(1.01);
          box-shadow: 0 4px 12px rgba(15, 118, 110, 0.04);
        }

        .quiz-option:active {
          transform: translateY(0) scale(1);
        }

        .quiz-option.selected {
          border-color: var(--teal);
          background: var(--teal-bg);
          box-shadow: 0 0 0 1px var(--teal), 0 4px 12px rgba(15, 118, 110, 0.08);
          transform: translateY(-1px);
        }

        .quiz-option-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
          width: 2.25rem;
          height: 2.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.6);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
          transition: all 0.2s ease;
        }

        .quiz-option:hover .quiz-option-icon,
        .quiz-option.selected .quiz-option-icon {
          background: #ffffff;
          border-color: var(--teal-light);
          transform: scale(1.05);
        }

        .quiz-option-text {
          flex: 1;
          font-weight: 500;
        }

        .quiz-option-check {
          flex-shrink: 0;
          width: 1.25rem;
          height: 1.25rem;
          border-radius: var(--radius-full);
          border: 2px solid var(--border-medium);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          background: #ffffff;
        }

        .quiz-option:hover .quiz-option-check {
          border-color: var(--teal-light);
        }

        .quiz-option.selected .quiz-option-check {
          border-color: var(--teal);
          background: var(--teal);
        }

        .quiz-option.selected .quiz-option-check::after {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ffffff;
          display: block;
        }

        .quiz-back {
          display: inline-block;
          margin-top: 1.25rem;
          padding: 0.5rem 0;
          background: none;
          border: none;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-muted);
          cursor: pointer;
          font-family: inherit;
          transition: color 0.2s ease;
        }

        .quiz-back:hover {
          color: var(--text-deep);
        }

        .quiz-email-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .quiz-email-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .quiz-email-input {
          padding: 1rem 1.25rem;
          font-size: 1rem;
          border: 2px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          background: var(--bg-warm);
          color: var(--text-deep);
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .quiz-email-input:focus {
          border-color: var(--teal);
        }

        .quiz-email-privacy {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-align: center;
          max-width: none;
          margin: 0;
        }

        .quiz-error {
          color: var(--rust);
          font-size: 0.875rem;
          font-weight: 500;
          margin: 0;
          max-width: none;
        }

        .quiz-loading {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .quiz-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid var(--border-subtle);
          border-top-color: var(--teal);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
