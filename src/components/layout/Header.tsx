import { navLink } from "@/src/types/navLinks";
import Link from "next/link";
import Container from "../layout/Container";
import styles from "./Header.module.css";
import Button from "../ui/Button";
import { scrollToId } from "@/src/lib/utils";
import { NavLink } from "./navbar/NavLink";

type HeaderProps = {
    variant?: "sections" | "simple";
}

export default function Header({ variant = "sections" }: HeaderProps) {

    const links: navLink[] = [
        { href: "#projects", label: "Projects" },
        { href: "#about", label: "About" },
        { href: "#contact", label: "Contact" },

    ];

    return (
        <nav className="navbar">
            <Container>
                <div className={styles.inner}>
                    <Link href="/" className={styles.logoLink} aria-label="Leonid Design Home">
                        <img src="/logo.svg" alt="Leonid Design" className={styles.logo} />
                    </Link>
                    {variant === "sections" && (
                        <ul className={styles.navLinks}>
                            {links.map((link, index) => (
                                <NavLink key={index} href={link.href} text={link.label} />
                            ))}
                        </ul>)}
                        
                    <Button href={"#contact"} text="CONTACT" variant="nav" id="contact"/>
                </div>
            </Container>
        </nav>
    )
} 