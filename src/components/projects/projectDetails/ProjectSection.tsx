import styles from "./ProjectSection.module.css";

export default function ProjectSection({
  title,
  html,
  index,
}: {
  title: string;
  html?: string;
  index: number;
}) {
  if (!html) return null;

  return (
    <section className={styles.section}>
      <p className={styles.kicker}>{index.toString().padStart(2, "0")}</p>
      <h2>{title}</h2>
      <div
        className={styles.sectionContent}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  );
}
