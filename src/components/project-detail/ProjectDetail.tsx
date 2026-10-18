import React from "react";
import Card from "~/src/components/Card/Card";
import { Project } from "~/src/types/project";

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <Card>
      <div>{project.title}</div>
      {project.bullet_points.map((point: Project["bullet_points"][number]) => (
        <p key={point}>{point}</p>
      ))}
    </Card>
  );
};

export default ProjectDetail;
