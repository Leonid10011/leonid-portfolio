import Link from "next/link";
import Container from "../layout/Container";
import styles from "./Contact.module.css";

export default function Contact () {
    return (
        <section id="contact" className={styles.contact} aria-labelledby="contact-heading">
            <Container>
            <div className={styles.inner}>
                <h2 id="contact-heading" className={styles.headline}>Contact</h2>
                <div className={styles.content}>
                    <p>I’m currently open to frontend roles or project-based work. Feel free to reach out if you’d like to get in touch.</p>
                    <Link href={"mailto:leo@domain.com?subject=Frontend%20Opportunity"} className="btn btnPrimary">Contact Now</Link>
                </div>
            </div>
            </Container>
        </section>
    )   
}