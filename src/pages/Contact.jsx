import React from 'react'
import { useUI } from '../context/ui'
import { FaTelegram } from "react-icons/fa";
import { ExternalLink, Globe, Github, Instagram, Linkedin, Twitter,Facebook} from 'lucide-react'

function Contact() {
  const { t, lang, dark } = useUI();
  const linkText = dark ? "text-white" : "text-black";
  const iconText = dark ? "text-white/80" : "text-black/70";

  // Fallback (agar translations.projects bo'lmasa).



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
    if (name === "github") return <Github className={className} />;
    if (name === "instagram") return <Instagram className={className} />;
    if (name === "linkedin") return <Linkedin className={className} />;
    if (name === "twitter") return <Twitter className={className} />;
    if (name === "facebook") return <Facebook className={className} />;
    if (name === "globe") return <Globe className={className} />;

    return <FaTelegram className={className} />;
  };
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-0 pb-10">
      {/* Tashqi havolalar / External links */}
      <section
        className={`mt-12 rounded-3xl p-8 text-center ring-1 ${dark
            ? "border border-white/10 bg-[radial-gradient(900px_500px_at_50%_0%,rgba(124,58,237,0.14),transparent)] ring-indigo-400/20"
            : "border border-black/10 bg-[radial-gradient(900px_500px_at_50%_0%,rgba(124,58,237,0.10),transparent)] ring-indigo-400/20"
          }`}
      >
        <h3 className="text-xl font-semibold">{p.linksTitle}</h3>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          {p.links.map((l) => (

            <a
              key={l.title}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkPillBase} ${linkPillSurface} ${linkText}`}
            >
              <Icon name={l.icon} className={`h-4 w-4 ${iconText}`} />
              <span className={linkText}>{l.title}</span>
              <ExternalLink className={`h-3.5 w-3.5 ${iconText}`} />
            </a>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mt-14 text-center">
        <h3 className="text-2xl font-semibold">{p.contactTitle}</h3>
        <p className={`mx-auto mt-2 max-w-2xl ${dark ? "text-white/70" : "text-gray-600"}`}>
          {p.contactDesc}
        </p>
        <div className="mt-6">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors active:scale-95"
          >
            < FaTelegram className="h-4 w-4" />
            {p.contactCta}
          </a>
        </div>
      </section>
    </div>
  )
}

export default Contact