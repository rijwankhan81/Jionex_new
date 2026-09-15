import styles from './BuildPlaceholder.module.scss';

export default function BuildPlaceholder({ number, title, note }: { number: string; title: string; note: string }) {
  return (
    <section className={styles.section} data-build-section={number}>
      <div className={styles.meta}>
        <span>{number}</span>
        <span>JIONEX / EXPERIENCE SYSTEM</span>
      </div>
      <div className={styles.core} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className={styles.copy}>
        <p>{note}</p>
        <h2>{title}</h2>
      </div>
    </section>
  );
}
