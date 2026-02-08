import Link from "next/link";
import Container from "../layout/Container";

export default function Hero() {
    return (
        <section id="hero">
            <Container>
                <div className="hero__inner">
                    <div className="hero__content">
                        <h1 className="hero__headline">Frontend Developer focused on design and architecture</h1>
                        <p className="hero__subline">I build fast, scalable websites with Next.js and WordPress.</p>
                        <div className="hero__ctas">
                            <Link href={"https://www.google.de"} className="btn btn-primary">CONTACT</Link>
                            <Link href={"https://www.google.de"} className="btn btn-secondary">PROJECTS</Link>
                        </div>
                    </div>
                    <div className="hero__visuals" aria-hidden="true"></div>
                </div>
            </Container>
        </section>
    )
}