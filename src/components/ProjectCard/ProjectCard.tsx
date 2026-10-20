import { Project } from "~/src/types/project";
import styles from "./ProjectCard.module.css";
import Card from "~/src/components/Card/Card";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { id, title, image, short_description } = project;
  return (
    <Card>
      <div className={styles.layout}>
        <div>
          <h2 className={styles.title}>
            <a href={`/projects/${id}`}>
              {title}
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </a>
          </h2>
          <p className={styles.description}>{short_description}</p>
        </div>
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src={image}
            alt={`${title} project image`}
          />
        </div>
      </div>
    </Card>
  );
}
