import React from 'react';
import LinkedIn from './images/LinkedIn-Svg.svg';
import Medium from './images/Medium-Svg.svg';
import Youtube from './images/Youtube-Svg.svg';
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

export default App;
