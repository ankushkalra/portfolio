import React from "react";
import LinkedIn from "jsx:./images/linkedin-negative.svg";
// import { ReactComponent as Medium } from "./images/Medium-Svg.svg";
// import { ReactComponent as Youtube } from "./images/Youtube-Svg.svg";
import Document from "jsx:./images/drive.svg";
import Github from "jsx:./images/github-negative.svg";
import Card from "./components/Card/Card";
import Project from "./components/Project/Project";
import "./App.css";
import SocialItem from "./components/SocialItem/SocialItem";

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <p className="title">
          I am a JavaScript Developer, with experience in writing Node.js and
          React.js
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
        </div>
      </section>
      {/* <section> */}
      {/*   <Card /> */}
      {/* </section> */}
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
