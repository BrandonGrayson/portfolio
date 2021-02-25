import React from "react"
import "../styles/contact.css"
import resume from "../img/resume.png"

const Contact = () => {
    return (
        <div className=' container jumbotron col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <h1 className='txt'>Lets Make Something Great</h1>

            <img className='resume' src={resume} />


        </div>


    )
    
}

export default Contact