"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const legalLinks = [
  { href: "/legal", label: "Mentions légales", icon: "§" },
  { href: "/legal/confidentialite", label: "Confidentialité", icon: "🔒" },
  { href: "/legal/cgv", label: "CGV", icon: "📋" },
  { href: "/legal/cookies", label: "Cookies", icon: "🍪" },
];

export default function LegalNav() {
  const pathname = usePathname();

  return (
    <nav className="legal-nav animate-fade-in-up delay-100" aria-label="Navigation légale">
      <ul className="legal-nav-list">
        {legalLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`legal-nav-link ${
                pathname === link.href ? "active" : ""
              }`}
            >
              <span className="legal-nav-icon">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
