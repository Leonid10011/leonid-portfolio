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
                            I'm a frontend developer focused on building structured web applications with <b>Next.js</b> and headless <b>WordPress</b>.<br/>
                            </p>
                            <p>
                            My current work emphasizes scalable component systems, clean architectural thinking, and CMS integration via REST APIs.
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
                            {/*<p className={`${styles.skillsIntro} text-subline`}>Background & Technical Focus</p>*/}
                            <Skills/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}