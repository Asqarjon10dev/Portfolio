// src/components/Header.jsx
import React, { useRef } from "react";
import { useUI } from "../context/ui";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";

function Header({ open, setOpen }) {   // ⬅️ prop orqali keladi
  const { t, lang, setLang, dark, toggleDark } = useUI();
  const panelRef = useRef(null);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        dark ? "border-b border-white/10 bg-[#0f1115]/85" : "border-b border-black/10 bg-white/80",
        "backdrop-blur-sm shadow-lg",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Brand */}
          <Link to="/" className={dark ? "text-xl font-semibold text-indigo-300" : "text-xl font-semibold text-indigo-700"}>
            {t?.brand ?? "Brand"}
          </Link>

          {/* Center nav (md+) */}
          <nav className="hidden md:flex md:absolute md:left-1/2 md:-translate-x-1/2 items-center gap-10">
            <a href="/#about" className={dark ? "text-sm font-semibold text-white/80 hover:text-white" : "text-sm font-semibold text-gray-700 hover:text-gray-900"}>
              {t?.nav?.about ?? "About"}
            </a>
            <a href="/#skills" className={dark ? "text-sm font-semibold text-white/80 hover:text-white" : "text-sm font-semibold text-gray-700 hover:text-gray-900"}>
              {t?.nav?.skills ?? "Skills"}
            </a>
            <a href="/#projects" className={dark ? "text-sm font-semibold text-white/80 hover:text-white" : "text-sm font-semibold text-gray-700 hover:text-gray-900"}>
              {t?.nav?.projects ?? "Projects"}
            </a>
            <a href="/#contact" className={dark ? "text-sm font-semibold text-white/80 hover:text-white" : "text-sm font-semibold text-gray-700 hover:text-gray-900"}>
              {t?.nav?.contact ?? "Contact"}
            </a>
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 rounded-xl p-1">
              {["en", "ru", "uz"].map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md ${
                    lang === code
                      ? "bg-indigo-600 text-white shadow-sm"
                      : dark ? "text-white/80 hover:text-white" : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              onClick={toggleDark}
              aria-label="Toggle theme"
              className={"grid h-9 w-9 place-items-center border-none rounded-lg bg-transparent"}
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Mobile menu */}
            <button
              className="md:hidden grid h-9 w-9 place-items-center border-none rounded-lg bg-transparent"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className={dark ? "h-5 w-5 text-white" : "h-5 w-5 text-gray-900"} />
            </button>
          </div>
        </div>
      </div>

      {/* Drawer (overlay App’da) */}
      {open && (
        <div
          ref={panelRef}
          className={`fixed right-0 top-0 z-60 h-full w-72 md:hidden
                      ${dark ? "bg-[#0b0c10] text-white" : "bg-white text-gray-900"}
                      shadow-2xl ring-1 ${dark ? "ring-white/10" : "ring-black/10"}
                      animate-[slide-in_0.2s_ease-out]`}
        >
          <div className={`flex items-center justify-between p-4 border-b ${dark ? "border-white/10" : "border-black/10"}`}>
            <div className="flex items-center gap-2 opacity-90">
              <Globe className="h-4 w-4" />
              <span className="text-sm">Language</span>
            </div>
            <button className={`rounded-lg p-2 ${dark ? "hover:bg-white/10" : "hover:bg-black/5"}`} onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="px-4 py-3 flex items-center gap-2">
            {["en", "ru", "uz"].map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-3 py-1.5 text-xs rounded-md border transition-colors ${
                  lang === code
                    ? "bg-indigo-600 text-white border-transparent"
                    : dark ? "border-white/10 text-white/80 hover:text-white" : "border-black/10 text-gray-700 hover:text-gray-900"
                }`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <nav className="px-4 pb-4 flex flex-col gap-1.5">
            {[
              { href: "/#about", label: t?.nav?.about ?? "About" },
              { href: "/#skills", label: t?.nav?.skills ?? "Skills" },
              { href: "/#projects", label: t?.nav?.projects ?? "Projects" },
              { href: "/#contact", label: t?.nav?.contact ?? "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`${dark ? "text-white/90 hover:text-white hover:bg-white/10" : "text-gray-800 hover:bg-black/5"} rounded-lg px-3 py-2 transition-colors`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
