import LinkedIn from "jsx:./images/linkedin-negative.svg";
import Document from "jsx:./images/attachment-negative.svg";
import Github from "jsx:./images/github-negative.svg";
import Card from "./components/Card/Card";
// import Project from "./components/Project/Project";
import "./App.css";
import SocialItem from "./components/SocialItem/SocialItem";

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <p className="title">Ankush Kalra</p>
        <p className="title">Senior Software Engineer</p>
        <p className="title">
          I build scalable web applications, developer tools, and AI-powered
          products.
        </p>
        <div className="social-items-grid">
          <SocialItem
            link={"https://www.linkedin.com/in/ankushkalra"}
            title="LinkedIn"
          >
            <LinkedIn />
          </SocialItem>
          <SocialItem
            link={"https://www.github.com/ankushkalra"}
            title="Github"
          >
            <Github />
          </SocialItem>
          <SocialItem
            link={"https://www.github.com/ankushkalra"}
            title="Resume"
          >
            <Document />
          </SocialItem>
        </div>
      </section>
      <section className="card-section">
        <Card
          heading="Product Engineering"
          skills={["React", "Next.js", "TypeScript", "GraphQL"]}
        />
        <Card
          heading="AI Engineering"
          skills={["LLMs", "Agents", "RAG", "MCP", "AI Apps"]}
        />
        <Card
          heading="System Design"
          skills={["APIs", "Architecture", "Performance", "Cloud"]}
        />
      </section>
      {/* <section id="projects"> */}
      {/*   <Project */}
      {/*     project={{ */}
      {/*       name: "Butterfly", */}
      {/*       description: "it does fly", */}
      {/*       image: "", */}
      {/*     }} */}
      {/*   /> */}
      {/* </section> */}
    </div>
  );
}
// download resume link: https://drive.google.com/uc?id=1iI25U16J6JB_mPRBC2e4Bdz-Gh_-k76B&export=download
export default App;
