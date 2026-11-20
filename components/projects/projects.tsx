"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Projects as projectsData, ProjectsType } from "@/lib/projects";

function ProjectCard({ project }: { project: ProjectsType }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const poster = project.vid_url.replace(".mp4", ".webp");
  const webm = project.vid_url.replace(".mp4", ".webm");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      ref={cardRef}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${project.name}`}
      className="group relative block aspect-[2.1/1] w-full overflow-hidden rounded-2xl bg-neutral-900"
    >
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-neutral-800" />
      )}

      {inView && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          onLoadedData={() => setLoaded(true)}
          className={`absolute bottom-0 left-0 block h-auto w-full origin-bottom scale-[1.02] transition-all duration-500${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={webm} type="video/webm" />
          <source src={project.vid_url} type="video/mp4" />
        </video>
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="text-lg font-medium text-white">{project.name}</span>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <div className="flex flex-col gap-4 p-4">
      {projectsData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}