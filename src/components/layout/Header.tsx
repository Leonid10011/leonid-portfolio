import { navLink } from "@/src/types/navLinks";
import Link from "next/link";
import Container from "../layout/Container";
import styles from "./Header.module.css";

export default function Header() {

    const links: navLink[] = [
        { href: "#projects", label: "Projects" },
        { href: "#about", label: "About" },
        { href: "#contact", label: "Contact" },

    ];

    return (
        <nav className="navbar">
            <Container>
                <div className={styles.inner}>
                    <img src="/logo.svg" alt="Leonid Design" className={styles.logo} />
                    <ul className={styles.navLinks}>
                        {links.map((link, index) => (
                            <li key={index}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                    <Link href={"#contact"} className={`${styles.navCta} btn btnSecondary`}>CONTACT</Link>
                </div>
            </Container>
        </nav>
    )
} 