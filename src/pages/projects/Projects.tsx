import Project from "~/src/components/Project/Project";
import projects from "~/src/projects.json";
import styles from "~/src/App.module.css";

const Projects = () => {
  return (
    <section className={styles["projects-section"]}>
      <h2>Projects</h2>
      <ul className={styles["responsive-list"]}>
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
