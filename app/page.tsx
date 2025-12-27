import About from "@/components/about";
import Contact from "@/components/contact";
import Contributions from "@/components/contributions";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contributions />
      <Contact />
    </main>
  );
}
