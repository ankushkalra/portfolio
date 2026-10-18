import ProjectCard from "~/src/components/ProjectCard/ProjectCard";
import projects from "~/src/data/projects.json";
import styles from "~/src/App.module.css";
import Page from "~/src/components/Page/Page";

const Projects = () => {
  return (
    <Page>
      <section className={styles["projects-section"]}>
        <h2>Projects</h2>
        <ul className={styles["responsive-list"]}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ul>
      </section>
    </Page>
  );
};

export default Projects;
