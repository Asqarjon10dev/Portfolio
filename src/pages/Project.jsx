// === File: src/pages/Projects.jsx ===
import React, { useState, useMemo } from "react";
import { useUI } from "../context/ui";
import { ExternalLink, Globe, Github, Instagram } from "lucide-react";
import { FaTelegram } from "react-icons/fa6";

export default function Projects() {
  const { t, lang, dark } = useUI();
  const p = t?.projects ?? {};
  const cards = useMemo(() => (Array.isArray(p.cards) ? p.cards : []), [p]);

  const [showAll, setShowAll] = useState(false);
  const visibleCards = showAll ? cards : cards.slice(0, 4);

  // Uslublar
  const cardBase =
    "relative overflow-hidden rounded-3xl p-6 border shadow-[0_10px_30px_rgba(0,0,0,0.35)] ring-1";
  const cardSurface = dark
    ? "border-white/10 bg-white/[0.03]"
    : "border-black/10 bg-black/[0.02]";
  const gradientByIndex = [
    "bg-[radial-gradient(900px_500px_at_0%_0%,rgba(56,189,248,0.18),transparent)] ring-sky-400/25",
    "bg-[radial-gradient(900px_500px_at_100%_0%,rgba(34,197,94,0.18),transparent)] ring-emerald-400/25",
    "bg-[radial-gradient(900px_500px_at_0%_100%,rgba(168,85,247,0.18),transparent)] ring-violet-400/25",
    "bg-[radial-gradient(900px_500px_at_100%_100%,rgba(251,146,60,0.18),transparent)] ring-orange-400/25",
  ];

  const ButtonLink = ({ href, children }) => (
    <a
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors active:scale-95"
    >
      {children}
      <ExternalLink className="h-4 w-4" />
    </a>
  );

  const Icon = ({ name, className = "h-4 w-4" }) => {
    if (name === "globe") return <Globe className={className} />;
    if (name === "github") return <Github className={className} />;
    if (name === "instagram") return <Instagram className={className} />;
    return <FaTelegram className={className} />;
  };

  const showAllText = p.showAll || {
    uz: "Barchasini ko‘rsatish",
    ru: "Показать все",
    en: "Show all",
  }[lang || "uz"];

  const showLessText = p.showLess || {
    uz: "Yopish",
    ru: "Скрыть",
    en: "Show less",
  }[lang || "uz"];

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-10">
      {/* Sarlavha */}
      <h1
        className={`text-center text-4xl sm:text-5xl font-extrabold ${
          dark ? "text-white" : "text-black"
        }`}
      >
        {p.title || "Projects"}
      </h1>

      {/* Loyihalar grid */}
      <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {visibleCards.map((proj, i) => (
          <div
            key={`${proj.title}-${i}`}
            className={`${cardBase} ${cardSurface} ${
              gradientByIndex[i % gradientByIndex.length]
            }`}
          >
            <div className="pointer-events-none absolute inset-0" />
            <div className="relative">
              <h3 className="text-lg font-semibold">{proj.title}</h3>
              <div className="mt-5">
                <ButtonLink href={proj.href}>{p.view || "View"}</ButtonLink>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Pastdagi “Barchasini ko‘rsatish / Yopish” tugmasi */}
      {cards.length > 4 && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll((s) => !s)}
            className="rounded-lg border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium hover:bg-white/10 active:scale-95 transition
                       dark:border-white/10 dark:bg-white/5
                       light:border-black/10 light:bg-black/5"
          >
            {showAll ? showLessText : showAllText}
          </button>
        </div>
      )}
    </main>
  );
}
