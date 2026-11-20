"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
const AboutMe = () => {
  const themeData = useContext(ThemeContext);
  return (
    <section className="flex flex-col w-full space-y-5">
      <div className="flex justify-between">
        <div>
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
        <div>
          <p>TEXT ONE</p>
          <p>TEXT TWO</p>
        </div>
      </div>
      <div className="flex space-x-3">
        <div className="relative w-27 h-27 ">
          <Image
            src={"/images/profile.png"}
            alt="Developer Image"
            fill
            priority
            className="object-cover rounded-2xl"
          ></Image>
        </div>
        <div className="pt-10">
          <p className="text-lg">Kalid Abdifeta</p>
          <p className="opacity-85">WEB DESIGNER AND FULL STACK DEVELOPER</p>
        </div>
      </div>
      <div>
        <h1 className="opacity-65 text-lg mb-6">{"[ About Me ]"}</h1>
        <p className="text-lg">
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
        <h1 className="opacity-65 text-lg mb-6">{"[ Achivements ]"}</h1>
        <div className="flex opacity-85 justify-between">
          <h2>Degree</h2>
          <h2>In Batchler&apos;s of Computer Science</h2>
        </div>
        <div className="flex opacity-85 justify-between">
          <h2>Completed Projects</h2>
          <h2>More Than 10</h2>
        </div>
        <div className="flex opacity-85 justify-between">
          <h2>Replit Expert</h2>
          <h2>On Contra</h2>
        </div>
        <div className="flex opacity-85 justify-between">
          <h2>Qualified AI Web Trainer</h2>
          <h2>Classified</h2>
        </div>
      </div>
      <div>
        <h1 className="opacity-65 text-lg mb-4">{"[ Links ]"}</h1>
        <Link className="uppercase opacity-85" href={""}>
          GitHub
        </Link>
      </div>
    </section>
  );
};

export default AboutMe;
