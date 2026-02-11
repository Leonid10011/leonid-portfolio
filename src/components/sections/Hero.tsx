import Link from "next/link";
import Container from "../layout/Container";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section id="hero" aria-labelledby="hero-heading">
            <Container>
                <div className={styles.heroInner}>
                    <div className={styles.heroContent}>
                        <h1 id="hero-heading" className={styles.heroHeadline}>Frontend Developer focused on design and architecture</h1>
                        <p className={styles.heroSubline}>I build fast, scalable websites with Next.js and WordPress.</p>
                        <div className={styles.heroCtas}>
                            <Link href={"#contact"} className="btn btnPrimary">CONTACT</Link>
                            <Link href={"#projects"} className="btn btnSecondary">PROJECTS</Link>
                        </div>
                    </div>
                    <div className={styles.hero__visuals} aria-hidden="true"></div>
                </div>
            </Container>
        </section>
    )
}