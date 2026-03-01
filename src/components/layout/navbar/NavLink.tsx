'use client';

import { scrollToId } from "@/src/lib/utils";
import Link from "next/link";

type NavLinkProps = {
    href: string; // z.B. "#projekte"
    text: string;
    className?: string;
}

export function NavLink({ href, text, className }: NavLinkProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // Prüfen, ob der Link mit # beginnt (interner Anker)
        if (href.startsWith('#')) {
            e.preventDefault();
            const id = href.replace('#', ''); // Entfernt das # für die scrollToId Funktion
            scrollToId(id);
        }
    };

    return (
        <Link href={href} className={className} onClick={handleClick}>
            {text}
        </Link>
    );
}
