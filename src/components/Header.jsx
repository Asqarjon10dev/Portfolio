// === File: src/components/Header.jsx ===
import React, { useState } from "react";   // 👈 MUHIM qo‘shildi
import { useUI } from "../context/ui";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon, Globe } from "lucide-react"; // 👈 Languages ikon o‘rniga Globe ishlatish mumkin

function Header() {
  const { t, lang, setLang, dark, toggleDark } = useUI();
  const [open, setOpen] = useState(false);

  const linkCls = ({ isActive }) =>
    `text-sm font-semibold tracking-wide transition-colors ${isActive ? "text-white" : "text-white/80 hover:text-white"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-[#0f1115]/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            className="text-xl font-semibold tracking-tight text-indigo-400 hover:text-indigo-300"
          >
            {t?.brand ?? "Brand"}

          </Link>

          {/* Center nav */}
          <nav className="pointer-events-auto absolute left-1/2 hidden -translate-x-1/2 md:flex items-center gap-10">
            <Link to="/#about" className="text-sm font-semibold text-white/80 hover:text-white">{t?.nav?.about ?? "About"}</Link>
            <Link to="/#skills" className="text-sm font-semibold text-white/80 hover:text-white">{t?.nav?.skills ?? "Skills"}</Link>
            <Link to="/#projects" className="text-sm font-semibold text-white/80 hover:text-white">{t?.nav?.projects ?? "Projects"}</Link>
            <Link to="/#contact" className="text-sm font-semibold text-white/80 hover:text-white">{t?.nav?.contact ?? "Contact"}</Link>
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Language pill */}
            <div className="hidden sm:flex items-center rounded-xl bg-white/5  p-1">
              {["en", "ru", "uz"].map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md  bg-transparent transition-colors ${lang === code
                      ? "bg-indigo-500 text-white shadow-sm"
                      : "text-white/80 hover:text-white"
                    }`}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Theme icon */}
            <button
              onClick={toggleDark}
              aria-label="Toggle theme"
              className="grid h-7 w-7 pr-8 pb-7 rounded-lg bg-transparent border-none"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Mobile menu */}
            <button
              className="md:hidden grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-72 bg-[#12141a] shadow-2xl ring-1 ring-white/10 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white/80">
                <Globe className="h-4 w-4" />
                <span className="text-sm">Language</span>
              </div>
              <button
                className="rounded-lg p-2 hover:bg-white/10"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mb-6 flex items-center gap-2">
              {["en", "ru", "uz"].map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-3 py-1.5 text-xs rounded-md border ${lang === code
                      ? "bg-indigo-600 text-white border-transparent"
                      : "border-white/10 text-white/80 hover:text-white"
                    }`}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>

            <nav className="flex flex-col gap-2">
              <NavLink
                to="/about"
                className={() =>
                  "rounded-lg px-3 py-2 text-white/80 hover:text-white hover:bg-white/5"
                }
                onClick={() => setOpen(false)}
              >
                {t?.nav?.about ?? "About"}
              </NavLink>
              <NavLink
                to="/skills"
                className={() =>
                  "rounded-lg px-3 py-2 text-white/80 hover:text-white hover:bg-white/5"
                }
                onClick={() => setOpen(false)}
              >
                {t?.nav?.skills ?? "Skills"}
              </NavLink>
              <NavLink
                to="/projects"
                className={() =>
                  "rounded-lg px-3 py-2 text-white/80 hover:text-white hover:bg-white/5"
                }
                onClick={() => setOpen(false)}
              >
                {t?.nav?.projects ?? "Projects"}
              </NavLink>
              <NavLink
                to="/contact"
                className={() =>
                  "rounded-lg px-3 py-2 text-white/80 hover:text-white hover:bg-white/5"
                }
                onClick={() => setOpen(false)}
              >
                {t?.nav?.contact ?? "Contact"}
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
