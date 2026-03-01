import Header from "../components/layout/Header";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import styles from "./page.module.css"

// src/app/projects/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leonid Design Portfolio - Frontend Engineer with Next.js and Headless WordPress',
  description: 'My portfolio showcasing projects built with Next.js and Headless WordPress. Explore case studies, technical details, and the impact of my work.',
};

export default function Home() {
  return (
    <>
    <Header />
    <main className={styles.page}>
      <Hero />
      <Projects/>
      <About/>
      <Contact/>
    </main>
    </>
  );
}
