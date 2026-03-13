"use client"; // Wichtig, da onClick ein Client-Event ist

import { scrollToId } from "@/src/lib/utils";
import Link from "next/link";

type ButtonProps = {
  href: string;
  text: string;
  variant?: "primary" | "secondary" | "nav";
  id?: string;
};

export default function Button({
  href,
  text = "Button",
  variant = "primary",
  id = "",
}: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevents browser to write # in the URL when clicking the link
    scrollToId(id);
  };

  return (
    <Link href={href} className={`btn btn--${variant}`} onClick={handleClick}>
      {text}
    </Link>
  );
}
