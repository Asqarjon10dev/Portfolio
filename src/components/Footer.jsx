import React from "react";
import { Link } from "react-router-dom";
import { useUI } from "../context/ui";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const { t, dark } = useUI();
  const year = new Date().getFullYear();

  // Tarjima bo'lmasa ham ishlaydigan matnlar
  const f = t?.footer ?? {
    backToTop: "Back to top ↑",
    rights: "All rights reserved.",
  };

  const scrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="mt-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* chiziq */}
        <div className={`h-px w-full ${dark ? "bg-white/10" : "bg-black/10"}`} />

        <div className="grid grid-cols-3 items-center py-6">
          {/* chap: copyright */}
          <div className={`${dark ? "text-white/60" : "text-gray-600"} text-sm`}>
            © {year} {t.brand}. {f.rights}
          </div>

          {/* o'rtada: brend */}
          <div className="text-center">
            <Link
              to="/"
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              {t.brand}
            </Link>
          </div>

          {/* o'ng: back to top */}
          <div className="text-right">
            <a
              href="#top"
              onClick={scrollTop}
              className="inline-flex items-center gap-1 text-sm font-medium text-indigo-400 hover:text-indigo-300"
            >
              {f.backToTop}
              <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
