"use client";
import React, { useEffect, useState } from "react";

const MIN_TIME = 1800;

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const start = Date.now();
    document.body.style.overflow = "hidden";

    const ticker = setInterval(() => {
      setProgress((p) => p + (90 - p) * 0.06);
    }, 50);

    const finish = () => {
      const wait = Math.max(0, MIN_TIME - (Date.now() - start));
      setTimeout(() => {
        clearInterval(ticker);
        setProgress(100);
        setTimeout(() => setDone(true), 400);
        setTimeout(() => {
          setRemoved(true);
          document.body.style.overflow = "";
        }, 1200);
      }, wait);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    return () => {
      clearInterval(ticker);
      window.removeEventListener("load", finish);
      document.body.style.overflow = "";
    };
  }, []);

  if (removed) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white transition-transform duration-700 ease-in-out ${
        done ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Cat icon */}
      <svg
        viewBox="0 0 64 64"
        className="h-20 w-20 animate-pulse"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#000" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
          <path d="M51 40 C61 38 62 24 55 15" fill="none" stroke="#fff" strokeWidth="8" />
          <path d="M51 40 C61 38 62 24 55 15" fill="none" stroke="#000" strokeWidth="5" />
          <path d="M15 46 C12 28 22 10 33 9 L35 3 L39 10 L44 6 L45 13 L51 12 L50 19 C55 26 55 38 53 47 L46 47 C46 37 45 29 40 26 C34 24 28 30 25 47 Z" />
          <path d="M14 44 L24 44 L23 56 L26 60 L12 60 L15 56 Z" />
          <path d="M44 44 L54 44 L53 56 L56 60 L42 60 L45 56 Z" />
          <path d="M3 38 C3 30 8 27 14 27 C20 27 25 30 25 38 C25 44 20 47 14 47 C8 47 3 44 3 38 Z" />
          <path d="M4 32 L4 19 L12 27 Z" />
          <path d="M24 32 L24 19 L16 27 Z" />
        </g>
        <path d="M6 35 L12 37 L12 39.5 L6 38 Z" fill="#FFD400" />
        <path d="M22 35 L16 37 L16 39.5 L22 38 Z" fill="#FFD400" />
        <path d="M10.5 43 L12 46.5 L13.5 43 Z" fill="#fff" />
        <path d="M14.5 43 L16 46.5 L17.5 43 Z" fill="#fff" />
      </svg>

      <div className="mt-8 h-px w-40 overflow-hidden bg-white/15">
        <div
          className="h-full bg-white transition-[width] duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-3 text-xs tracking-[0.3em] tabular-nums opacity-60">
        {Math.round(progress).toString().padStart(2, "0")}
      </p>
    </div>
  );
}