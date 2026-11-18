import styles from "./MobileCard.module.css";

type Props = {
  title: string;
  skills: string[];
  href: string;
};

export function MobileCard({ title, skills, href }: Props) {
  return (
    <a href={href} className={styles.card}>
      <div className={styles.leftContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.skills}>{skills.join(" · ")}</p>
      </div>
      <span>↗</span>
    </a>
  );
}
