import Skills from "../about/Skills";
import Container from "../layout/Container";
import styles from "./About.module.css";

export default function About() {
    return (
        <section id="about" className={styles.about} aria-labelledby="about-heading">
            <Container>
                <div className={styles.inner}>
                    <h2 id="about-heading" className={styles.headline}>About Me</h2>
                    <div className={styles.content}>
                        <div className={`${styles.text} ${styles.textDesktop} prose`}>
                            <p>
                                I’m a frontend-focused developer with an interest in clean architecture, performance and modern CMS-driven workflows.
                            </p>
                            <p>
                            I work primarily with Next.js and headless WordPress, building scalable interfaces that balance structure, flexibility and maintainability.<br/>
                            </p>
                            <p>
                            My focus is on production-ready code and clear system design rather than visual gimmicks.
                            </p>
                        </div>

                        <div className={`${styles.text} ${styles.textMobile} prose`}>
                            <p>
                                I’m a frontend-focused developer with a strong interest in clean architecture, performance and modern CMS-driven workflows.
                            </p>
                            <p>
                            I work primarily with Next.js and headless WordPress, building scalable, maintainable interfaces.<br/>
                            </p>
                            <p>
                            I focus on production-ready code and clear system design — not visual gimmicks.
                            </p>
                        </div>

                        <div className={styles.skills}>
                            <p className={`${styles.skillsIntro} text-subline`}>A short overview of my background and technical focus.</p>
                            <Skills/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}