import React from 'react';
import LinkedIn from './images/LinkedIn-Svg.svg';
import Medium from './images/Medium-Svg.svg';
import Youtube from './images/Youtube-Svg.svg';
import Document from './images/document.svg';
import './App.css';
import Theme from './Theme';

function App() {
  return (
    <Theme>
      <div className="App" style={{ overflow: 'hidden', height: '100vh' }}>
        <section className="App-header">
          <p>
            I am a JavaScript Developer, with experience in writing Node.js and
            React.js
          </p>
          <div>
            <a
              href="https://www.linkedin.com/in/ankush-kalra-284222125/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="Social-icon" src={LinkedIn} alt="LinkedIn link" />
            </a>
            <a
              href="https://drive.google.com/file/d/1iI25U16J6JB_mPRBC2e4Bdz-Gh_-k76B/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="Social-icon" src={Document} alt="Resume link" />
            </a>
            <a
              href="https://medium.com/@ankushkalra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="Social-icon" src={Medium} alt="Medium link" />
            </a>
            <a
              href="https://www.youtube.com/@Ankush404"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="Social-icon" src={Youtube} alt="Youtube link" />
            </a>
          </div>
        </section>
      </div>
    </Theme>
  );
}
// download resume link: https://drive.google.com/uc?id=1iI25U16J6JB_mPRBC2e4Bdz-Gh_-k76B&export=download
export default App;
