// === File: src/components/Asosiy.jsx ===
import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Project from "../pages/Project";
import Contact from "../pages/Contact";

function Asosiy() {
  return (
    <div>
      <section id="home" className="scroll-mt-24"><Home /></section>
      <section id="about" className="scroll-mt-24"><About /></section>
      <section id="skills" className="scroll-mt-24"><Skills /></section>
      <section id="projects" className="scroll-mt-24"><Project /></section>
      <section id="contact" className="scroll-mt-24"> <Contact /></section>
      {/* Contact uchun footerga id beramiz (quyida) */}
    </div>
  );
}

export default Asosiy;
