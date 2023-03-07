import React from 'react';
import Instagram from './images/Instagram-Svg.svg';
import LinkedIn from './images/LinkedIn-Svg.svg';
import Twitter from './images/Twitter-Svg.svg';
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
              href="https://twitter.com/iamankushkalra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="Social-icon" src={Twitter} alt="Twitter link" />
            </a>
            <img className="Social-icon" src={Youtube} alt="Youtube link" />
            <a
              href="https://www.linkedin.com/in/ankush-kalra-284222125/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="Social-icon" src={LinkedIn} alt="LinkedIn link" />
            </a>
            <img className="Social-icon" src={Instagram} alt="Instagram link" />
          </div>
        </section>
      </div>
    </Theme>
  );
}

export default App;
