import Link from "next/link";
import Container from "../layout/Container";
import styles from "./Contact.module.css";
import Button from "../ui/Button";

export default function Contact () {
    return (
        <section id="contact" className={styles.contact} aria-labelledby="contact-heading">
            <Container>
            <div className={styles.inner}>
                <h2 id="contact-heading" className={styles.headline}>Contact</h2>
                <div className={styles.content}>
                    <p>I’m currently open to frontend roles or project-based work. Feel free to reach out if you’d like to get in touch.</p>
                    <Button href={"mailto:leo@domain.com?subject=Frontend%20Opportunity"} text="Contact Now" type="btnPrimary"/>
                </div>
            </div>
            </Container>
        </section>
    )   
}