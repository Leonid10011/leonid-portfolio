import styles from "./Skills.module.css";

export default function Skills () {
    return (
        <div className={styles.inner}>
            <div className={styles.group}>
                <h3 className={styles.title}>Frontend</h3>
                <ul>
                    <li>Next.js</li>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Modern CSS</li>
                </ul>
            </div>
            <div className={styles.group}>
                <h3 className={styles.title}>Tools</h3>
                <ul>
                    <li>GitHub</li>
                    <li>Figma</li>
                </ul>
            </div>
            <div className={styles.group}>
                <h3 className={styles.title}>CMS & Backend</h3>
                <ul>
                    <li>WordPress (Headless)</li>
                    <li>Cutsom Post Types</li>
                    <li>ACF</li>
                    <li>REST APIs</li>
                </ul>
            </div>

        </div>
    )
}