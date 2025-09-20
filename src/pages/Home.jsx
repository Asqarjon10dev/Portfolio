import React from "react";
import { Link } from "react-router-dom";
import { useUI } from "../context/ui";
import Rasmim from "../assets/rasmim.jpg";

function Home() {
    const { t, dark } = useUI();
    const hero = t?.hero ?? { title: "", role: "", desc: "", cta: "Contact" };

    return (
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14">
            <section className="grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-2 pt-14">
                <div className="order-2 md:order-1 pt-28" >
                    <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                        <span className={`${dark ? "text-white" : "text-black"}`}>{hero.title}</span>
                        <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                            {hero.role}
                        </span>
                    </h1>

                    <p className={`mt-5 max-w-xl text-base sm:text-lg leading-relaxed ${dark ? "text-white/70" : "text-gray-600"}`}>
                        {hero.desc}
                    </p>

                    <div className="mt-8">
                        <Link
                            to="/#contact"
                            className="
    inline-block rounded-lg px-5 py-3 text-sm font-medium
    text-white bg-indigo-600
    transition-all duration-200
    active:scale-95
    hover:cursor-pointer hover:bg-indigo-700
    motion-safe:animate-glow hover:motion-safe:animate-glow-strong
  "
                        >
                            {hero.cta}
                        </Link>



                    </div>
                </div>

                <div className="order-1 md:order-2 flex items-center justify-center pt-14">
                    <div className="relative">
                        <div className="pointer-events-none absolute -inset-8 rounded-full bg-[radial-gradient(closest-side,rgba(124,58,237,0.25),transparent_70%)] blur-xl" />
                        <div className="relative rounded-full p-1.5 ring-2 ring-indigo-500/60">
                            <img
                                src={Rasmim}
                                alt="Profile"
                                className="h-[300px] w-[300px] rounded-full object-cover sm:h-[360px] sm:w-[360px]"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;