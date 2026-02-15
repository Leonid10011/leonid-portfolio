import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero />
      <Projects/>
      <About/>
      <Contact/>
    </main>
  );
}
