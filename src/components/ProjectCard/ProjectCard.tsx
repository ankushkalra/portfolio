import { Project } from "~/src/types/project";
import styles from "./ProjectCard.module.css";
import Card from "~/src/components/Card/Card";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { id, title, image, short_description, stats, tags } = project;
  return (
    <Card>
      <div className={styles.layout}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src={image}
            alt={`${title} project image`}
            loading="lazy"
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>
            <a href={`/projects/${id}`}>{title}</a>
          </h2>
          <p className={styles.description}>{short_description}</p>

          {stats && (
            <ul className={styles.stats}>
              {stats.map((stat) => (
                <li key={stat.label} className={styles.stat}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </li>
              ))}
            </ul>
          )}

          {tags && (
            <ul className={styles.tags}>
              {tags.map((tag) => (
                <li key={tag} className={styles.tag}>
                  {tag}
                </li>
              ))}
            </ul>
          )}

          <div className={styles.footer} aria-hidden="true">
            View project <span className={styles.arrow}>→</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
