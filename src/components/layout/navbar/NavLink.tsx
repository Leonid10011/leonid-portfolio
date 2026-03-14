"use client";

import { scrollToId } from "@/src/lib/utils";
import Link from "next/link";
import styles from "./NavLink.module.css";

type NavLinkProps = {
  href: string; // e.g. "#projects"
  text: string;
  className?: string;
};

export function NavLink({ href, text }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      scrollToId(id);
    }
  };

  return (
    <Link href={href} className={styles.navLink} onClick={handleClick}>
      {text}
    </Link>
  );
}
