import React from "react"
import "../styles/about.css"
import Navbar from "./Navbar"


const About = () => {
    return (
        <div className='container jumbo col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-0'>
            <div className='container hero'>

                <Navbar />

            <h1 className='txt'>I design and build digital products</h1>

                <div>
                    <h3 className='aboutTxt' >About</h3>

                    <p className='aboutTxt'>Hi, Im Brandon. I'm a multi skilled front end Developer with Backend Experience as well. JavaScript is my Primary language and so far React.js has been my favorite framework to work with. I'm fascinated by the possibilities, and love working on new projects to see if there is a way to breathe life into the things I envision. </p>

                    <p className='aboutTxt'>I began coding mid 2020 and was drawn to the process of learning and creating new applications. JavaScript was a natrual fit and decided to take it seriously when I enrolled in UPenn's Full Stack Web Developer Program. This was a full time course where I learned the basics of front & back end development. Perhaps more important than technical skills I learned how to learn, balance multiple projects with a heavy workload, problem solving techniques, version control, and how to communicate and function productively in a team.</p>

                    <p className='aboutTxt'>I don't like to define myself by the work I've done. I prefer to define myself by the work I want to do. I wake up everday with the goal of being Better than I was yesterday. I'm a high-energy individual who's easily inspired. Once my mind is set on an idea or goal I fell compelled to follow it until the end.</p>

                    <p className='aboutTxtL'>I'm a fast learner who's used to juggling different projects and Roles with relative ease. I'm currently looking for my next position. An environment where I can continue to grow and develop. While working with a team to complete various tasks. Open to talk about possible opportunities! </p>
                </div>
            </div>
        </div>
    )
}

export default About