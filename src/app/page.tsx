import About from "../components/sections/About";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects/>
      <About/>
    </main>
  );
}
