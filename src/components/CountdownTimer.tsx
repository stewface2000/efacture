"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/components/LanguageContext";

const TARGET_DATE = new Date("2026-09-01T00:00:00+02:00");

interface TimeLeft {
  jours: number;
  heures: number;
  minutes: number;
  secondes: number;
}

function calculateTimeLeft(): TimeLeft {
  const now = new Date();
  const diff = TARGET_DATE.getTime() - now.getTime();

  if (diff <= 0) {
    return { jours: 0, heures: 0, minutes: 0, secondes: 0 };
  }

  return {
    jours: Math.floor(diff / (1000 * 60 * 60 * 24)),
    heures: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    secondes: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Server-side / initial render — avoid hydration mismatch
  if (!timeLeft) {
    return (
      <div className="countdown" aria-label={t("countdown.title")}>
        {(["days", "hours", "minutes", "seconds"] as const).map((key) => (
          <div className="countdown-unit" key={key}>
            <span className="countdown-value">--</span>
            <span className="countdown-label">{t(`countdown.${key}`)}</span>
          </div>
        ))}
      </div>
    );
  }

  const units = [
    { label: t("countdown.days"), value: timeLeft.jours },
    { label: t("countdown.hours"), value: timeLeft.heures },
    { label: t("countdown.minutes"), value: timeLeft.minutes },
    { label: t("countdown.seconds"), value: timeLeft.secondes },
  ];

  return (
    <div className="countdown" role="timer" aria-label={`${t("countdown.title")} - 1er septembre 2026`}>
      {units.map((unit, i) => (
        <div key={unit.label} className="countdown-item">
          <div className="countdown-unit">
            <span className="countdown-value">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="countdown-label">{unit.label}</span>
          </div>
          {i < units.length - 1 && (
            <span className="countdown-separator" aria-hidden="true">:</span>
          )}
        </div>
      ))}
    </div>
  );
}

