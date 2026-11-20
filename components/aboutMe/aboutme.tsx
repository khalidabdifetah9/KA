"use client";
import React, { useContext } from "react";
import LiveClock from "./LiveClock";
import Link from "next/link";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";

const AboutMe = () => {
  const themeData = useContext(ThemeContext);
  return (
    <section className="flex flex-col w-full space-y-4 text-sm sm:text-base">
      <div className="flex justify-between gap-4">
        <div className="shrink-0">
          <button
            className={`${themeData?.light ? "opacity-100" : "opacity-40"} cursor-pointer`}
            onClick={() => themeData?.setLight(true)}
          >
            LIGHT
          </button>
          <span>{" / "}</span>
          <button
            className={`${themeData?.light ? "opacity-40" : "opacity-100"} cursor-pointer`}
            onClick={() => themeData?.setLight(false)}
          >
            DARK
          </button>
        </div>
        <div className="text-right">
          <LiveClock />
        </div>
      </div>

      <div className="flex items-center space-x-3 sm:items-start">
        <div className="relative h-20 w-20 shrink-0 sm:h-27 sm:w-27">
          <Image
            src={"/images/profile.png"}
            alt="Developer Image"
            sizes="(max-width: 640px) 80px, 108px"
            fill
            priority
            className="object-cover rounded-2xl"
          ></Image>
        </div>
        <div className="sm:pt-10">
          <p className="text-base sm:text-lg">Kalid Abdifeta</p>
          <p className="text-xs opacity-85 sm:text-base">
            WEB DESIGNER AND FULL STACK DEVELOPER
          </p>
        </div>
      </div>

      <div>
        <h1 className="opacity-65 text-base sm:text-lg mb-4 sm:mb-6">
          {"[ About Me ]"}
        </h1>
        <p>
          Basically, I write code, break things, fix things, and somehow call it
          a career.
          <br />
          <br />
          I&apos;m a Full Stack Developer. I make computers do things,
          occasionally make them stop doing things, and then spend 3 hours
          figuring out why. I work with React, Next.js, TypeScript, Node.js,
          PostgreSQL, Tailwind CSS,Framer Motion and more. I design interfaces,
          build applications, connect APIs, and make buttons that actually work
          (a surprisingly rare achievement).
          <br />
          <br />
          I&apos;ve got around 5 years of experience building things for the
          web. I enjoy good design, clean code, smooth animations, and making
          sure a website doesn&apos;t look like it was assembled during a power
          outage. I like building cool stuff, solving weird problems, and
          pretending &quot;one last adjustment&quot; means one last adjustment.
        </p>
      </div>

      <div>
        <h1 className="opacity-65 text-base sm:text-lg mb-4 sm:mb-6">
          {"[ Achivements ]"}
        </h1>
        <div className="flex flex-col gap-3 opacity-85">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-4">
            <h2 className="opacity-70 sm:opacity-100">Degree</h2>
            <h2 className="sm:text-right">
              In Batchler&apos;s of Computer Science
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-4">
            <h2 className="opacity-70 sm:opacity-100">Completed Projects</h2>
            <h2 className="sm:text-right">More Than 10</h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-4">
            <h2 className="opacity-70 sm:opacity-100">Replit Expert</h2>
            <h2 className="sm:text-right">On Contra</h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-4">
            <h2 className="opacity-70 sm:opacity-100">
              Qualified AI Web Trainer
            </h2>
            <h2 className="sm:text-right">Classified</h2>
          </div>
        </div>
      </div>

      <div>
        <h1 className="opacity-65 text-base sm:text-lg mb-4">{"[ Links ]"}</h1>
        <Link className="uppercase opacity-85" href={""}>
          GitHub
        </Link>
      </div>
    </section>
  );
};

export default AboutMe;
