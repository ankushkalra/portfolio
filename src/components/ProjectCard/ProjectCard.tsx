import { Project } from "~/src/types/project";
import styles from "./ProjectCard.module.css";
import Card from "~/src/components/Card/Card";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { id, title, short_description } = project;
  return (
    <Card>
      {/* <img src={null} alt={`${name} project image`} /> */}
      <h3 className={styles.title}>
        <a href={`/projects/${id}`}>{title}</a>
      </h3>
      <p className={styles.description}>{short_description}</p>
    </Card>
  );
}
