import React from 'react';
import dp from './images/dp.jpg';
import Instagram from './images/Instagram-Svg.svg';
import LinkedIn from './images/LinkedIn-Svg.svg';
import Twitter from './images/Twitter-Svg.svg';
import Youtube from './images/Youtube-Svg.svg';
import './App.css';
import Theme from './Theme';
import AwesomeColors from './components/AwesomeColors';

function App() {
  return (
    <Theme>
      <div className="App">
        <section className="App-header">
          <img src={dp} className="App-logo" alt="logo" />
          <p>I am a JavaScript Developer, with experience in writing Node.js and React.js</p>
          <div>
            <a href="https://twitter.com/iamankushkalra" target="_blank" rel="noopener noreferrer">
              <img className="Social-icon" src={Twitter} alt="Twitter link" />
            </a>
            <img className="Social-icon" src={Youtube} alt="Youtube link" />
            <a href="https://www.linkedin.com/in/ankush-kalra-284222125/" target="_blank" rel="noopener noreferrer">
              <img className="Social-icon" src={LinkedIn} alt="LinkedIn link" />
            </a>
            <img className="Social-icon" src={Instagram} alt="Instagram link" />
          </div>
        </section>
        <section id="colors-gradients">
          <AwesomeColors colors={['#ff2562']} />
        </section>
      </div>
    </Theme>
  );
}

export default App;
