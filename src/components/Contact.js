import React from "react"
import "../styles/contact.css"
import resume from "../img/resume.png"
import resumePDF from "../img/resumepdf.pdf"

const Contact = () => {
    return (
        <div className=' container jumbotron mb-0 col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <h1 className='txt'>Lets Make Something Great</h1>

            <div>
                <a href={resumePDF}>Download Resume</a>
            </div>

            <img className='resume' alt='my resume' src={resume} />


        </div>


    )
    
}

export default Contact