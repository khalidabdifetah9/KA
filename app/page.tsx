"use client"
import React, { useContext } from "react";
import AboutMe from "@/components/aboutMe/aboutme";
import Projects from "@/components/projects/projects";
import { ThemeContext } from "@/context/ThemeContext";

export default function Home() {
  const themeData = useContext(ThemeContext);
  return (
    <section
      className={`min-h-screen w-full ${themeData?.light ? "bg-white text-black" : "bg-black text-white"} transition-all duration-700 px-10 flex items-start`}
    >
      <div className="sticky top-0 h-screen w-2/4 overflow-y-auto p-10 border-r border-black/15">
        <AboutMe />
      </div>
      <div className="w-3/4">
        <Projects />
      </div>
    </section>
  );
}