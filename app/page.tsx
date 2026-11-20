import AboutMe from "@/components/aboutMe/aboutme";
import Projects from "@/components/projects/projects";
export default function Home() {
  return (
    <section className="min-h-screen w-full px-10 flex">
      <div className="w-2/4 p-10 border-r border-black/15 ">
        <AboutMe />
      </div>
      <div className="bg-amber-950 w-3/4">
        <Projects />
      </div>
    </section>
  );
}
