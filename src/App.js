import React from 'react';
import './App.css';

class Title extends React.Component 
{
    constructor(props)
    {
        super(props);

        this.state = {
            outputText: "",
        }

        this.text = "Full Stack Developer";
        this.i = 0;
    }

    componentDidMount()
    {
        this.timerId = setInterval(() => this.animate(), 65);
    }

    componentWillUnmount()
    {
        if (this.timerId) {
            clearInterval(this.timerId);
        }
    }

    animate()
    {
        if (this.i < this.text.length) {
            this.setState((state) => ({
                outputText: state.outputText + this.text.charAt(this.i)
            }));
            this.i += 1;
        }
        else {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    render()
    {
        return <h3 id={this.props.id}>{this.state.outputText}</h3>
    }
}

function App() {
  return (
    <div className="App">
        <div id="name-div">
            <i class="fa fa-code fa-5x" id="logo" aria-hidden="true"></i>
            <h1 id="name">{"Hoang Nguyen"}</h1>
            {/* <h3 id="title">Full Stack Developer</h3> */}
            <Title id="title" />
        </div>
        
        <div id="bio-container">
            <div class="education-div">
                <p id="school">Oregon State University</p>
                <p id="degree">B.S. Computer Science</p>
            </div>

            <div className="link-container">
                <div className="link-icon-div">
                    <div className="icon-div">
                        <i className="fa fa-github-square fa-2x" aria-hidden="true"></i>
                        <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                    </div>
                    <div className="link-div">
                        <a className="bio-link" id="github" href="https://github.com/hncode18">hncode18</a>                    
                        <a className="bio-link" id="linkedin" href="https://www.linkedin.com/in/hoang-nguyen21/">hoang-nguyen21</a>
                    </div>
                </div>
            </div>
        </div>        
    </div>
  );
}

export default App;
