import React from "react";
import Link from "next/link";
import { Projects as projectsData, ProjectsType } from "@/lib/projects";

function ProjectCard({ project }: { project: ProjectsType }) {
  return (
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${project.name}`}
      className="group relative block aspect-video w-full overflow-hidden rounded-2xl bg-black"
    >
      <video
        src={project.vid_url}
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

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