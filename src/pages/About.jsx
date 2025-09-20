// === File: src/pages/About.jsx ===
import React from "react";
import { useUI } from "../context/ui";
import Rasmim from "../assets/image.png";
import { Code2, Folder, Infinity as InfinityIcon } from "lucide-react";

export default function About() {
  const { t, dark } = useUI();

  // Tarjima bo'lmasa ham ishlasin
  const about = t?.about ?? {
    title: "Men haqimda",
    desc:
      "Men Asqarjon — Fullstack dasturchiman. 2024 yildan beri dasturlash va loyihalar yaratish bilan shug‘ullanaman.",
    stats: [
      { value: "2024+", label: "Years Coding", icon: <Code2 className="h-5 w-5" /> },
      { value: "10+",   label: "Projects",     icon: <Folder className="h-5 w-5" /> },
      { value: "∞",     label: "Learning",     icon: <InfinityIcon className="h-5 w-5" /> },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 pt-24">
      <h1 className={`text-center text-4xl sm:text-5xl font-extrabold ${dark ? "text-white" : "text-black"}`}>
        {about.title}
      </h1>

      <section className="mt-12 grid grid-cols-1 items-start gap-10 md:grid-cols-2">
        {/* Chap: rasm — 300x300, to‘rtburchak, ring + glow */}
        <div className="flex justify-center md:justify-start">
          <div className="relative" style={{ width: 300, height: 300 }}>
            {/* tashqi yumshoq glow (clip bo‘lmasligi uchun alohida qatlam) */}
            <div className="pointer-events-none absolute -inset-6 rounded-2xl bg-[radial-gradient(closest-side,rgba(124,58,237,0.25),transparent_70%)] blur-xl" />
            {/* rasm konteyneri: ring + shadow + clip */}
            <div className="relative overflow-hidden rounded-2xl ring-2 ring-indigo-500/60 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
              <img
                src={Rasmim}
                alt="Asqarjon"
                className="block h-[300px] w-[300px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* O‘ng: matn va statistikalar */}
        <div>
          <p className={`text-base sm:text-lg mt-14 leading-relaxed ${dark ? "text-white/80" : "text-gray-700 "}`}>
            {about.desc}
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {about.stats.map((s, i) => (
              <div
                key={i}
                className={`rounded-xl border p-5 {
                  dark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"
                }`}
              >
                {/* <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-indigo-500/10 p-2">
                  {s.icon}
                </div> */}
                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-violet-600 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className={`${dark ? "text-white/70" : "text-gray-600"} text-sm mt-1`}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
