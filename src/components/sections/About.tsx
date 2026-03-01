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
                            I'm a frontend developer focused on building structured web applications with <b>Next.js</b> and headless <b>WordPress</b>.<br/>
                            </p>
                            <p>
                            I emphasize scalable component systems, clean architecture, and CMS integration via REST APIs.<br/>
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