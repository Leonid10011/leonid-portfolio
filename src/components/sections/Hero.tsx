import Link from "next/link";
import Container from "../layout/Container";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section id="hero" aria-labelledby="hero-heading">
            <Container>
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <h1 id="hero-heading" className={styles.headline}>Frontend Developer focused on design and architecture</h1>
                        <p className={styles.subline}>I build fast, scalable websites with Next.js and WordPress.</p>
                        <div className={styles.ctas}>
                            <Link href={"#contact"} className="btn btnPrimary">CONTACT</Link>
                            <Link href={"#projects"} className="btn btnSecondary">PROJECTS</Link>
                        </div>
                    </div>
                    <div  className={styles.visuals} aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="469" height="650" viewBox="0 0 469 650" fill="none">
<rect opacity="0.78" y="125" width="217.046" height="200" rx="8" fill="#7EA5F2"/>
<rect opacity="0.48" x="3.60986" y="389" width="209.593" height="190" rx="8" fill="#7EA5F2"/>
<rect opacity="0.86" x="275.041" width="186.439" height="160" rx="8" fill="#7EA5F2"/>
<rect opacity="0.33" x="267.655" y="245" width="201.345" height="180" rx="8" fill="#7EA5F2"/>
<rect opacity="0.93" x="285.656" y="510" width="171.533" height="140" rx="8" fill="#7EA5F2"/>
</svg>
                    </div>
                </div>
            </Container>
        </section>
    )
}