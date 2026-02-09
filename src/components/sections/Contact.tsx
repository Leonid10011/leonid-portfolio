import Link from "next/link";
import Container from "../layout/Container";

export default function Contact () {
    return (
        <section className="contact" aria-labelledby="contact-heading">
            <Container>
            <div className="contact__inner">
                <h2 id="contact-heading" className="contact__headline">Contact</h2>
                <div className="contact__content">
                    <p>I’m currently open to frontend roles or project-based work. Feel free to reach out if you’d like to get in touch.</p>
                    <Link href={"mailto:leo@domain.com?subject=Frontend%20Opportunity"} className="btn btn-primary">Contact Now</Link>
                </div>
            </div>
            </Container>
        </section>
    )   
}