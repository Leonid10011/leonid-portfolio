import styles from "./Skills.module.css";

export default function Skills () {
    return (
        <div className={styles.inner}>
            <div className={`${styles.group} ${styles.frontend}`}>
                <h3 className={styles.title}>Frontend</h3>
                <ul>
                    <li>Next.js</li>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Modern CSS</li>
                </ul>
            </div>
            <div className={styles.bottom}>
                <div className={styles.group}>
                    <h3 className={styles.title}>CMS & Backend</h3>
                    <ul>
                        <li>Headless WordPress architecture</li>
                        <li>Custom Post Types & Field Modeling</li>
                        <li>REST API integration</li>
                        <li>Content-driven frontend rendering</li>
                    </ul>
                </div>
                <div className={styles.group}>
                    <h3 className={styles.title}>Workflow</h3>
                    <ul>
                        <li>Git-based collaboration</li>
                        <li>Component architecture</li>
                        <li>Type-safe development</li>
                        <li>Responsive-first approach</li>

                    </ul>
                </div>
            </div>

        </div>
    )
}