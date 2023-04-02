import React from 'react';
import { ReactComponent as LinkedIn } from './images/LinkedIn-Svg.svg';
import { ReactComponent as Medium } from './images/Medium-Svg.svg';
import { ReactComponent as Youtube } from './images/Youtube-Svg.svg';
import { ReactComponent as Document } from './images/document.svg';
import { ReactComponent as Github } from './images/github.svg';
import './App.css';
import Theme from './Theme';
import Project from './components/Project/Project';
import Card from './components/Card/Card';

function App() {
  return (
    <Theme>
      <div className="App">
        <section className="App-header">
          <p className="title">
            I am a JavaScript Developer, with experience in writing Node.js and
            React.js
          </p>
          <div>
            <a
              href="https://www.linkedin.com/in/ankush-kalra-284222125/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn className="Social-icon" />
            </a>
            <a
              href="https://drive.google.com/file/d/1iI25U16J6JB_mPRBC2e4Bdz-Gh_-k76B/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Document className="Social-icon" />
            </a>
            <a
              href="https://medium.com/@ankushkalra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Medium className="Social-icon medium-icon" />
            </a>
            <a
              href="https://www.youtube.com/@Ankush404"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="Social-icon" />
            </a>
            <a
              href="https://www.github.com/ankushkalra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="Social-icon" />
            </a>
          </div>
        </section>
        <section id="projects">
          <Project
            project={{
              name: 'Butterfly',
              description: 'it does fly',
              image: ''
            }}
          />
        </section>
        <section>
          <Card />
        </section>
      </div>
    </Theme>
  );
}
// download resume link: https://drive.google.com/uc?id=1iI25U16J6JB_mPRBC2e4Bdz-Gh_-k76B&export=download
export default App;
