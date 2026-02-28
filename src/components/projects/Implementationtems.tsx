import { ImplementationItem } from "@/src/types/projects";
import styles from "./Implementationtems.module.css";

export default function ImplementationItems ({items} : {items: ImplementationItem[]}) {
    return (
        <div className="inner">
            {items.map((i ,k ) => (
                <div className={styles.item} key={`item${k}`}>
                    <p>{i.description}</p>
                    <div className={styles.itemMedia}>

                    </div>
                </div>
            ))}
        </div>
    )
}