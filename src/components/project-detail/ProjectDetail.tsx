import React from "react";
import Card from "~/src/components/Card/Card";
import { Project } from "~/src/types/project";
import styles from "./ProjectDetail.module.css";

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const { bullet_points, image, title } = project;

  return (
    <Card>
      <div className={styles.layout}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          {bullet_points.map((point: Project["bullet_points"][number]) => (
            <p key={point} className={styles.point}>
              {point}
            </p>
          ))}
        </div>
        <img className={styles.image} src={image} alt={title + " image"} />
      </div>
    </Card>
  );
};

export default ProjectDetail;
