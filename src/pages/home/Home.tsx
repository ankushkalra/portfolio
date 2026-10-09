import styles from "~/src/App.module.css";
import Hero from "~/src/components/Hero/Hero";
import { MobileCard } from "~/src/components/MobileCard/MobileCard";

function Home() {
  return (
    <div className={styles.App}>
      <Hero />
      <section className={styles["App-header"]}></section>
      <section className={styles["skills-section"]}>
        <h2>What I build</h2>
        <ul className={styles["responsive-list"]}>
          <MobileCard
            title="Product Engineering"
            skills={["React", "Next.js", "TypeScript", "GraphQL"]}
            href="/projects"
          />
          <MobileCard
            title="AI Engineering"
            skills={["LLMs", "Agents", "RAG", "MCP", "AI Apps"]}
            href="/projects"
          />
          <MobileCard
            title="System Design"
            skills={["APIs", "Architecture", "Performance", "Cloud"]}
            href="/projects"
          />
        </ul>
      </section>
    </div>
  );
}
// download resume link: https://drive.google.com/uc?id=1iI25U16J6JB_mPRBC2e4Bdz-Gh_-k76B&export=download
export default Home;
