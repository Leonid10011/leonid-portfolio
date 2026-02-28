import Link from "next/link";

type ButtonProps = {
    href: string;
    text: string;
    variant?: "primary" | "secondary" |"nav";
}

export default function Button({ href, text="Button", variant = "primary" }: ButtonProps) {        
    return (    
        <Link href={href} className={`btn btn--${variant}`}>
            {text}
        </Link>
    )
};