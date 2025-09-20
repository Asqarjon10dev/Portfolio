import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const UIContext = createContext(null);

// --- Tarjimalar ---
// src/context/ui.jsx ichida:
// --- Tarjimalar ---
const translations = {
  uz: {
    brand: "Asqarjon",
    nav: { about: "Haqida", skills: "Ko‘nikmalar", projects: "Loyihalar", contact: "Aloqa" },

    hero: {
      title: "Salom, men Asqarjon.",
      role: "Fullstack Dasturchi",
      desc: "Zamonaviy veb ilovalarni mehr va aniqlik bilan yarataman",
      cta: "Men bilan aloqa",
    },

    about: {
      title: "Men haqimda",
      desc: "Men Asqarjon — Fullstack dasturchiman. 2024 yildan beri dasturlash va loyihalar yaratish bilan shug‘ullanaman.",
      stats: [
        { value: "2024+", label: "Yillardan beri Coding" },
        { value: "10+",   label: "Loyihalar" },
        { value: "∞",     label: "O‘rganish" },
      ],
    },

    skills: {
      title: "Ko'nikmalar va texnologiyalar",
      subtitle: "Quyidagi texnologiya va vositalar bilan ishlayman:",
      groups: [
        { key: "frontend", title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Redux Toolkit", "TailwindCSS"] },
        { key: "backend",  title: "Backend",  items: ["Node.js (Express)", "Python (FastAPI)", "SQLAlchemy"] },
        { key: "db",       title: "Ma'lumotlar bazasi", items: ["MySQL", "MongoDB"] },
      ],
      extra: { title: "Qo'shimcha tajriba", desc: "Telegram botlar, Git/GitHub, deploy va hosting" },
    },

    projects: {
      title: "Loyihalar",
      cards: [
        { title: "Yog'och do'kon crm", href: "https://yog-och-do-kon.vercel.app" },
        { title: "TezkorMarket sayt", href: "https://www.tezkormarket.uz" },
        { title: "online talim tizim", href: "#" },
        { title: "Sportkids platforma boshqaruv tizim", href: "https://sportkids.vercel.app/login" },
        { title: "Bir-bir onlayn do'kon", href: "" },
        { title: "Kiyim do'kon crm", href: "#" },
        { title: "Telegram bot hisobchi bot", href: "https://t.me/AsqarjonHisobchi_bot" },
        { title: "va boshqalar bor man uchun mashhurlar shular" },
      ],
      view: "Loyihani ko‘rish",
      linksTitle: "Tashqi havolalar",
      links: [

        { title: "Telegram", href: "https://t.me/My_name_is_Asqarjon", icon: "telegram" },
        { title: "Shaxsiy sayt", href: "https://asqarjon.uz", icon: "globe" },
        { title: "GitHub",       href: "https://github.com/Asqarjon10dev", icon: "github" },
        { title: "Instagram",    href: "https://www.instagram.com/a__7o7__/", icon: "instagram" },

      ],
      contactTitle: "Aloqaga chiqing",
      contactDesc: "Doimo yangi imkoniyatlar va qiziqarli loyihalarga ochiqman. Savolingiz bo‘lsa yoki salom demoqchi bo‘lsangiz, bemalol yozing!",
      contactCta: "Menga yozing",
    },
    footer: { backToTop: "Tepaga qaytish ↑", rights: "Barcha huquqlar himoyalangan." },
  },

  ru: {
    brand: "Аскаржон",
    nav: { about: "Обо мне", skills: "Навыки", projects: "Проекты", contact: "Контакты" },

    hero: {
      title: "Аскаржон —",
      role: "Fullstack Разработчик",
      desc: "Создаю современные веб-приложения с увлечением и точностью",
      cta: "Связаться со мной",
    },

    about: {
      title: "Обо мне",
      desc: "Я Аскаржон — фуллстек-разработчик. С 2024 года занимаюсь программированием и созданием проектов.",
      stats: [
        { value: "2024+", label: "Лет в кодинге" },
        { value: "10+",   label: "Проектов" },
        { value: "∞",     label: "Обучение" },
      ],
    },

    skills: {
      title: "Навыки и технологии",
      subtitle: "Технологии и инструменты, с которыми я работаю:",
      groups: [
        { key: "frontend", title: "Фронтенд", items: ["HTML", "CSS", "JavaScript", "React", "Redux Toolkit", "TailwindCSS"] },
        { key: "backend",  title: "Бэкенд",   items: ["Node.js (Express)", "Python (FastAPI)", "SQLAlchemy"] },
        { key: "db",       title: "Базы данных", items: ["MySQL", "MongoDB"] },
      ],
      extra: { title: "Дополнительный опыт", desc: "Телеграм-боты, Git/GitHub, деплой и хостинг" },
    },

    projects: {
      title: "Проекты",
      cards: [
        { title: "Платформа E-Commerce", href: "#" },
        { title: "Приложение для задач", href: "#" },
        { title: "Аналитическая панель", href: "#" },
        { title: "Приложение Погода", href: "#" },
      ],
      view: "Посмотреть",
      linksTitle: "Внешние ссылки",
      links: [
        { title: "Telegram", href: "https://t.me/My_name_is_Asqarjon", icon: "telegram" },

        { title: "Личный сайт", href: "https://example.com", icon: "globe" },
        { title: "GitHub",      href: "https://github.com/", icon: "github" },
        { title: "Instagram",   href: "https://instagram.com/", icon: "instagram" },
      ],
      contactTitle: "Связаться",
      contactDesc: "Открыт для новых возможностей и интересных проектов. Есть вопрос или хотите просто поздороваться? Пишите!",
      contactCta: "Написать мне",
    },
    footer: { backToTop: "Наверх ↑", rights: "Все права защищены." },
  },

  en: {
    brand: "Asqarjon",
    nav: { about: "About", skills: "Skills", projects: "Projects", contact: "Contact" },

    hero: {
      title: "Asqarjon —",
      role: "Fullstack Developer",
      desc: "Building modern web applications with passion and precision",
      cta: "Contact Me",
    },

    about: {
      title: "About Me",
      desc: "I'm Asqarjon — a full-stack developer. Since 2024, I’ve been building projects and honing my craft.",
      stats: [
        { value: "2024+", label: "Years Coding" },
        { value: "10+",   label: "Projects" },
        { value: "∞",     label: "Learning" },
      ],
    },

    skills: {
      title: "Skills & Technologies",
      subtitle: "Here are the technologies and tools I work with:",
      groups: [
        { key: "frontend", title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Redux Toolkit", "TailwindCSS"] },
        { key: "backend",  title: "Backend",  items: ["Node.js (Express)", "Python (FastAPI)", "SQLAlchemy"] },
        { key: "db",       title: "Databases", items: ["MySQL", "MongoDB"] },
      ],
      extra: { title: "Additional Experience", desc: "Telegram bots, Git/GitHub, deploy & hosting" },
    },

    projects: {
      title: "Projects",
      cards: [
        { title: "E-Commerce Platform", href: "#" },
        { title: "Task Management App", href: "#" },
        { title: "Analytics Dashboard", href: "#" },
        { title: "Weather App", href: "#" },
      ],
      view: "View Project",
      linksTitle: "External Links",
      links: [
        { title: "Telegram", href: "https://t.me/My_name_is_Asqarjon", icon: "telegram" },

        { title: "Personal Website", href: "https://example.com", icon: "globe" },
        { title: "GitHub",           href: "https://github.com/", icon: "github" },
        { title: "Instagram",        href: "https://instagram.com/", icon: "instagram" },
      ],
      contactTitle: "Get In Touch",
      contactDesc: "I’m always interested in new opportunities and interesting projects. Have a question or just want to say hi? Reach out!",
      contactCta: "Contact Me",
    },
    footer: { backToTop: "Back to top ↑", rights: "All rights reserved." },
  },
};



export function UIProvider({ children }) {
  // --- Initial from localStorage or system
  const getInitialTheme = () => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    // sistemani tekshirish
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };
  const getInitialLang = () => localStorage.getItem("lang") || "uz";

  const [theme, setTheme] = useState(getInitialTheme);
  const dark = theme === "dark";
  const toggleDark = () => setTheme((p) => (p === "dark" ? "light" : "dark"));

  const [lang, setLang] = useState(getInitialLang);
  const t = translations[lang] || translations.uz;

  const [isNavOpen, setIsNavOpen] = useState(false);

  // html tagiga class qo‘yish
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    localStorage.setItem("theme", theme);
  }, [dark, theme]);

  // lang ni saqlash
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const value = useMemo(
    () => ({
      t,
      lang,
      setLang,
      dark,
      toggleDark,
      theme,
      setTheme,
      isNavOpen,
      setIsNavOpen,
    }),
    [t, lang, dark, theme, isNavOpen]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI() UIProvider ichida ishlatilishi kerak");
  return ctx;
}
