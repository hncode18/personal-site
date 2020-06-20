import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <div id="name-div">
            <i class="fa fa-code fa-5x" id="logo" aria-hidden="true"></i>
            <h1 id="name">{"{ Hoang Nguyen }"}</h1>
            <h3 id="title">Full Stack Developer</h3>
        </div>
        
        <div id="bio-container">
            <div class="education-div">
                <p id="school">Oregon State University</p>
                <p>B.S in Computer Science</p>
            </div>

            <div className="link-container">
                <div className="link-div" id="github">
                    <i className="fa fa-github-square fa-2x" aria-hidden="true"></i>
                    <a className="bio-link" href="https://github.com/hncode18">hncode18</a>
                </div>
                <div className="link-div" id="linkedin">
                    <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                    <a className="bio-link" href="https://www.linkedin.com/in/hoang-nguyen21/">hoang-nguyen21</a>
                </div>
            </div>
        </div>        
    </div>
  );
}

export default App;
