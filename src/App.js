import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <div id="name-div">
            <i class="fa fa-code fa-5x" id="logo" aria-hidden="true"></i>
            <h1 id="name">Hoang Nguyen</h1>
            <h3 id="title">Full Stack Developer</h3>
        </div>
        
        <div className="link-div">
            <a className="bio-link" href="https://github.com/hncode18">
                <i className="fa fa-github-square fa-2x" aria-hidden="true"></i>
            </a>
            <a className="bio-link" href="https://www.linkedin.com/in/hoang-nguyen21/">
                <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
            </a>
        </div>
    </div>
  );
}

export default App;
