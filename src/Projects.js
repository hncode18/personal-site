import React from 'react';
import './Projects.css'

function ProjectCard(props)
{
    return (
        <div className="page-card">
            <h2 className="card-title">{props.title}</h2>
            <div className="card-links">
                <i className="fa fa-github-square" aria-hidden="true"></i>
                <a href={props.code}>Source Code</a>
            </div>
            <p className="tools-list"><em>Tools:</em> {props.tools}</p>
        </div>
    )
}

function Projects()
{
    return (
        <div className="projDiv">
            <div className="page-title-div">
                <h1 id="page-title">Projects</h1>
            </div>
            <ProjectCard title="OSU CS Applied Plan Portal" tools="React, Emotion.sh, Node.JS, MySQL"
                code="https://github.com/OSU-Applied-Plan-Portal-2020-2021/cs-applied-plan-portal"/>
        </div>
    );
}

export default Projects;