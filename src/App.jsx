// === File: src/App.jsx ===
import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { UIProvider, useUI } from "./context/ui";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Asosiy from "./components/Asosiy";

function ScrollToHash() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/" && hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash, pathname]);
  return null;
}

function Shell() {
  const { dark } = useUI();

  return (
    <div className={`${dark ? "bg-[#0e0f13] text-white" : "bg-white text-black"} min-h-screen transition-colors scroll-smooth`}>
      <Header />
      <ScrollToHash />

      {/* Decorative background */}
       <div aria-hidden className="pointer-events-none fixed inset-0 -z-20">
        {dark ? (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_20%,rgba(99,102,241,0.12),transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_60%,rgba(168,85,247,0.08),transparent)]" />
          </>
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_80%_30%,rgba(124,58,237,0.18),transparent_60%)]" />
        )}
      </div>

      <Routes>
        <Route path="/" element={<Asosiy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <UIProvider>
      <Shell />
    </UIProvider>
  );
}
