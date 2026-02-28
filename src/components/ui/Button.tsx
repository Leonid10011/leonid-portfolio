import Link from "next/link";

type ButtonProps = {
    href: string;
    text: string;
    type?: "btnPrimary" | "btnSecondary";
}

export default function Button({ href, text="Button", type = "btnPrimary" }: ButtonProps) {        
    return (    
        <Link href={href} className={`btn ${type}`}>
            {text}
        </Link>
    )
};