import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 id="name">Hoang Nguyen</h1>
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
