// === File: src/pages/Projects.jsx ===
import React from "react";
import { useUI } from "../context/ui";
import { ExternalLink, Globe, Github, Instagram,    Mail } from "lucide-react";
import { FaTelegram } from "react-icons/fa6"

export default function Projects() {
  const { t, lang, dark } = useUI();

  // Fallback (agar translations.projects bo'lmasa)


  const p = t?.projects ?? useUI[lang || "uz"];

  // Uslublar — avvalgi kartalar bilan bir xil ruhda
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
  const linkPillBase =
    "inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm transition-colors";
  const linkPillSurface = dark
    ? "border-white/10 bg-white/5 hover:bg-white/10"
    : "border-black/10 bg-black/5 hover:bg-black/10";

  const Button = ({ href, children }) => (
    <a
      href={href}
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

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-24">
      {/* Sarlavha */}
      <h1
        className={`text-center text-4xl sm:text-5xl font-extrabold ${
          dark ? "text-white" : "text-black"
        }`}
      >
        {p.title}
      </h1>

      {/* Loyihalar grid */}
      <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {p.cards.map((proj, i) => (
          <div
            key={proj.title}
            className={`${cardBase} ${cardSurface} ${
              gradientByIndex[i % gradientByIndex.length]
            }`}
          >
            <div className="pointer-events-none absolute inset-0" />
            <div className="relative">
              <h3 className="text-lg font-semibold">{proj.title}</h3>
              <div className="mt-5">
                <Button href={proj.href}>{p.view}</Button>
              </div>
            </div>
          </div>
        ))}
      </section>

   
    </main>
  );
}
