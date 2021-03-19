import React from 'react';
import Navbar from './Navbar';
import homeScreen from './img/home.png';
import viewPlan from './img/viewplan.png';
import editPlan from './img/editplan.png';
import search from './img/searchcourse.png';
import './Capstone.css'

function CapstoneProj()
{
    let images = [homeScreen, viewPlan, editPlan, search];
    let captions = ["Home Screen", "Plan Overview Screen", "Edit Plan Screen", 
                    "Course Search Function"];
    return (
        <div id="capstone">
            <Navbar />
            <h1 className="title">OSU CS Applied Plan Portal</h1>
            <p className="subtitle">A web portal for Oregon State University students to apply for a Computer Science applied option</p>
            <p>
                At Oregon State University, computer science students must choose a focus (refered to as an option)
                for their study. The two main choices are the System option and the Applied option.
                The System option aims to provide students with a broad overview of the field whereas the Applied
                option allows students to pursue a more specific focus. This gives students more flexibility in the
                courses they will take. As such, students must notify their advisor which courses they are planning
                on taking to fullfill their degree.
            </p>
            <p>
                Currently, students must submit their applied plans through paper forms, while any changes to the form
                must be done through emailing their advisors. This is confusing and time consuming for both student
                and advisors. This project aim to streamline this process by creating a web portal for both students
                and advisors to create, edit, delete, accept, reject applied plans. 
            </p>
            <p>
                The web portal is built using a <strong>Node.JS</strong> server, <strong>MySQL</strong> database 
                and a <strong>React</strong> front end framework
            </p>
            <p>
                Note: The live version of this portal requires an OSU Id to access. As such I have attached some screenshots
                to demonstrate the portal's functionality.
            </p>
            <img src={images[0]} alt={captions[0]}/>
            <p className="img-caption" aria-hidden="true">{captions[0]}</p>
            <img src={images[1]} alt={captions[1]}/>
            <p className="img-caption" aria-hidden="true">{captions[1]}</p>
            <img src={images[2]} alt={captions[2]}/>
            <p className="img-caption" aria-hidden="true">{captions[2]}</p>
            <img src={images[3]} alt={captions[3]}/>
            <p className="img-caption" aria-hidden="true">{captions[3]}</p>
        </div>
    );
}

export default CapstoneProj;