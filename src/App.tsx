import SkillCard from "./components/SkillCard/SkillCard";
import Project from "./components/Project/Project";
import projects from "./projects.json";
import styles from "./App.module.css";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className={styles.App}>
      <Hero />
      <section className={styles["App-header"]}></section>
      <section className={styles["skills-section"]}>
        <h2>What I build</h2>
        <ul className={styles["responsive-list"]}>
          <SkillCard
            heading="Product Engineering"
            skills={["React", "Next.js", "TypeScript", "GraphQL"]}
          />
          <SkillCard
            heading="AI Engineering"
            skills={["LLMs", "Agents", "RAG", "MCP", "AI Apps"]}
          />
          <SkillCard
            heading="System Design"
            skills={["APIs", "Architecture", "Performance", "Cloud"]}
          />
        </ul>
      </section>
      <section className={styles["projects-section"]}>
        <h2>Featured projects</h2>
        <ul className={styles["responsive-list"]}>
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </ul>
      </section>
      <section>
        <h2>Interactive Architecture section</h2>
      </section>
    </div>
  );
}
// download resume link: https://drive.google.com/uc?id=1iI25U16J6JB_mPRBC2e4Bdz-Gh_-k76B&export=download
export default App;
