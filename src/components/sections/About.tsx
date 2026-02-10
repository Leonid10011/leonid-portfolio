import Skills from "../about/Skills";
import Container from "../layout/Container";

export default function About() {
    return (
        <section id="about" className="about" aria-labelledby="about-heading">
            <Container>
                <div className="about__inner">
                    <h2 id="about-heading" className="about__headline">About</h2>
                    <div className="about__content">
                        <p>
                            I’m a frontend-focused developer with an interest in clean architecture, performance and modern CMS-driven workflows.
                        </p>
                        <p>
                        I work primarily with Next.js and headless WordPress, building scalable interfaces that balance structure, flexibility and maintainability.<br/>
                        </p>
                        <p>
                        My focus is on production-ready code and clear system design rather than visual gimmicks.
                        </p>
                        <div className="about__skill">
                            <p className="about__skillIntro">A short overview of my background and technical focus.</p>
                            <Skills/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}