import { useParams } from "react-router";
import Page from "~/src/components/Page/Page";
import ProjectDetail from "~/src/components/project-detail/ProjectDetail";
import projects from "~/src/data/projects.json";
import NotFoundPage from "~/src/pages/not-found/NotFoundPage";

const ProjectDetailsPage = () => {
  const { projectId: projectIdQueryParam } = useParams();

  const projectId = Number(projectIdQueryParam);

  if (isNaN(projectId)) {
    return <NotFoundPage />;
  }

  const project = projects.find((project) => project.id == Number(projectId));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <Page>
      <ProjectDetail project={project} />
    </Page>
  );
};

export default ProjectDetailsPage;
