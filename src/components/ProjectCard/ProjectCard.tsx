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
            <a href={`/projects/${id}`}>{title}</a>
          </h2>
          <p className={styles.description}>{short_description}</p>
        </div>
        <img
          className={styles.image}
          src={image}
          alt={`${title} project image`}
        />
      </div>
    </Card>
  );
}
