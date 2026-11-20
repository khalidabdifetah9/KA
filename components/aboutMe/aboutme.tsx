import React from "react";
import Image from "next/image";
const AboutMe = () => {
  return (
    <section className="flex flex-col w-full space-y-5">
      <div className="flex justify-between">
        <div>
          <button>LIGHT</button>
          <span>{" / "}</span>
          <button>DARK</button>
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
            <p>Kalid Abdifeta</p>
            <p className="opacity-95">WEB DESIGNER AND FULL STACK DEVELOPER</p>
        </div>
      </div>
      <div></div>
      <div></div>
    </section>
  );
};

export default AboutMe;
