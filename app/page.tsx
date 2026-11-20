"use client"
import React, { useContext } from "react";
import AboutMe from "@/components/aboutMe/aboutme";
import Projects from "@/components/projects/projects";
import { ThemeContext } from "@/context/ThemeContext";

export default function Home() {
  const themeData = useContext(ThemeContext);
  return (
    <section
      className={`min-h-screen font-poppins w-full ${themeData?.light ? "bg-white text-black" : "bg-black text-white"} transition-all duration-700  sm:px-10 flex flex-col lg:flex-row lg:items-start`}
    >
      <div className="w-full p-4 sm:p-10 border-b border-black/15 lg:sticky lg:top-0 lg:h-screen lg:w-2/5 lg:overflow-y-auto lg:border-b-0 lg:border-r">
        <AboutMe />
      </div>
      <div className="w-full lg:w-3/5">
        <Projects />
      </div>
    </section>
  );
}