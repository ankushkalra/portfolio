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
        <p className="title">
          Senior Frontend Engineer building fast, reliable interfaces for
          high-traffic, data-intensive products
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
      <section>
        <Card />
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
