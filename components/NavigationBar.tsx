"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "contact", name: "Contact" },
  { id: "blog", name: "Blog" },
];

function Header() {
  const pathname = usePathname();
  const [state, setState] = useState("home");
  return (
    <nav className="sticky top-0 z-50 flex w-screen items-center justify-center gap-3 font-semibold px-10 py-5 border-b border-zinc-700 bg-zinc-900/30 backdrop-blur-md  mb-5 md:mb-10">
      {tabs.map((tab) => (
        <button
        key={tab.id}
          onClick={() => setState(tab.id)}
          className={`${
            state === tab.id ? "hover:text-primary-200" : "hover:text-primary-400"
          }  relative px-3 py-1 transition-colors`}
        >
          {state === tab.id && (
            <motion.div
              layoutId="active-pill"
              transition={{ duration: 0.3, type: "spring" }}
              className="absolute inset-0 bg-border-gradient border-zinc-600/40 border"
              style={{ borderRadius: 1000 }}
            />
          )}
          <span className="relative z-10"> {tab.name}</span>
        </button>
      ))}
    </nav>
  );
}

export default Header;
