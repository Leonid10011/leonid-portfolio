import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <div className={styles.inner}>
      <div className={`${styles.group}`}>
        <h3 className={styles.title}>Frontend</h3>
        <ul>
          <li>Next.js</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Modern CSS (Tailwind, Flexbox, Grid)</li>
          <li>Component-driven UI development</li>
        </ul>
      </div>
      <div className={`${styles.group}`}>
        <h3 className={styles.title}>Backend & CMS</h3>
        <ul>
          <li>Supabase & data modeling</li>
          <li>REST API integration</li>
          <li>Headless WordPress</li>
          <li>Content modeling (Wordpress)</li>
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
  );
}
