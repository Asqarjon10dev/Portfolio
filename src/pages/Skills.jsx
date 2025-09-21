import React from "react";
import { useUI } from "../context/ui";
import { Code2, Server, Database } from "lucide-react";

export default function Skills() {
  const { t, dark } = useUI();
  const s = t?.skills;

  // Ikonkalar xaritasi (key bo'yicha)
  const IconByKey = {
    frontend: Code2,
    backend: Server,
    db: Database,
  };

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-10">
      <div className="text-center">
        <h1 className={`text-4xl sm:text-5xl font-extrabold ${dark ? "text-white" : "text-black"}`}>
          {s.title}
        </h1>
        <p className={`mt-3 text-base sm:text-lg ${dark ? "text-white/70" : "text-gray-600"}`}>{s.subtitle}</p>
      </div>

      <section className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {s.groups.map((g) => {
          const Icon = IconByKey[g.key] ?? Code2;
          const ringByKey = {
            frontend: "ring-sky-400/25",
            backend: "ring-emerald-400/25",
            db: "ring-violet-400/25",
          }[g.key];

          const bgByKey = {
            frontend: "bg-[radial-gradient(900px_500px_at_0%_0%,rgba(56,189,248,0.18),transparent)]",
            backend:  "bg-[radial-gradient(900px_500px_at_100%_0%,rgba(34,197,94,0.18),transparent)]",
            db:       "bg-[radial-gradient(900px_500px_at_100%_0%,rgba(168,85,247,0.20),transparent)]",
          }[g.key];

          return (
            <div
              key={g.key}
              className={[
                "relative overflow-hidden rounded-3xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)] ring-1",
                dark ? "border border-white/10 bg-white/[0.03]" : "border border-black/10 bg-black/[0.02]",
                ringByKey,
              ].join(" ")}
            >
              <div className={`pointer-events-none absolute inset-0 ${bgByKey}`} />

              <div className="relative">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{g.title}</h3>

                <ul className="mt-5 space-y-3">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className={[
                        "rounded-xl border px-4 py-2.5 text-sm",
                        dark ? "border-white/10 bg-white/5 text-white/90" : "border-black/10 bg-black/5 text-gray-800",
                      ].join(" ")}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </section>

      <section
        className={[
          "mt-10 rounded-3xl p-10 text-center shadow-[0_10px_30px_rgba(0,0,0,0.35)]",
          dark
            ? "border border-white/10 bg-[radial-gradient(900px_500px_at_50%_0%,rgba(124,58,237,0.14),transparent)]"
            : "border border-black/10 bg-[radial-gradient(900px_500px_at_50%_0%,rgba(124,58,237,0.10),transparent)]",
        ].join(" ")}
      >
        <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-300">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
          </svg>
        </div>
        <h3 className="mt-4 text-2xl font-semibold">{s.extra.title}</h3>
        <p className={`mt-2 ${dark ? "text-white/70" : "text-gray-600"}`}>{s.extra.desc}</p>
      </section>
    </main>
  );
}
