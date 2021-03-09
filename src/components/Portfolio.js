import React from "react"
import Navbar from "./Navbar"
import "../styles/portfolio.css"
import lookbook from "../img/lookbook.png"
import dmm from "../img/dmm.png"
import anime from "../img/animevsmma.png"
import weather from "../img/weatherdashboard.png"
import maze from "../img/maze.png"
import dayplanner from "../img/dayplanner.png"
import passowrd from "../img/generatepassword.png"
import budgetTracker from "../img/budgetTracker.png"
import note from "../img/noteTaker.png"
import fit from "../img/fitnessTracker.png"
import vue from "../img/Vue.png"
import burger from "../img/burger.png"
import quiz from "../img/quiz.png"


const Portfolio = () => {
    return (
        <div className='container hero col-xs-12 col-sm-12 col-md-12 col-lg-12'>

            <div className='container'>
                <h1 className='ptitle'>Projects</h1>

                <h2 className='ptitle'>Group Projects: </h2>


                <Navbar />


                <div className='projects'>
                    <div className="card mb-3" style={{ "maxWidth": "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={lookbook} className='card-img-top' alt="lookbook homepage" style={{"maxWidth": "300px"}} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Look-Book</h5>
                                    <p className="card-text">LookBook allows users to view the Collection of art at the Rijks Museum. With over 650,000 art pieces to chose from its like having a Museum at your finger Tips!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='projects'>
                    <div className="card mb-3" style={{ "maxWidth": "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={dmm} alt="DMM homepage" style={{"maxWidth": "200px"}} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Dungeon Master Manager</h5>
                                    <p className="card-text">DMM is a role playing game based off Dungeons and Dragons. The DMM can easily create Characters and design storylines. While keeping track of skills and progress.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='projects'>
                    <div className="card mb-3" style={{ "maxWidth": "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={anime} alt="anime vs ufc homepage" style={{"maxWidth": "200px"}} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Anime Vs UFC</h5>
                                    <p className="card-text">Allows users to watch and vote on their favorite action scenes from anime classics and UFC live events'</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className='ptitle' >Individual</h2>

                <div className='projects'>
                    <div className="card mb-3" style={{ "maxWidth": "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={fit} alt="budget Tracker homepage" style={{"maxWidth": "200px"}} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Fitness Taker</h5>
                                    <p className="card-text">Get in the best shape of your life with Firness tracker. Make new workouts, and keep track of old ones.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='projects'>
                    <div className="card mb-3" style={{ "maxWidth": "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={budgetTracker} alt="budget Tracker homepage" style={{"maxWidth": "200px"}} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Budget Tracker</h5>
                                    <p className="card-text">Manage your Finances with Budget Tracker. This app is equipeed to run offline with the help of service workers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='projects'>
                    <div className="card mb-3" style={{ "maxWidth": "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={vue} alt="budget Tracker homepage" style={{"maxWidth": "200px"}} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Vue</h5>
                                    <p className="card-text">Vue is an Employee Directory. That utilizes the random users api and react.js to generate an employee directory.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='projects'>
                    <div className="card mb-3" style={{ "maxWidth": "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={weather} alt="weather dashboard homepage" style={{"maxWidth": "200px"}} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Weather Dashboard</h5>
                                    <p className="card-text">Weather Dashboard uses the Yahoo weather api to allow users access to the forecast of any city up to 5 days in advance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='projects'>
                    <div className="card mb-3" style={{ "maxWidth": "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={maze} alt="maze homescreen" style={{"maxWidth": "200px"}} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Maze</h5>
                                    <p className="card-text">Welcome to Maze Runner. True to its name this app is a maze, Can you reach the goal?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='projects'>
                    <div className="card mb-3" style={{ "maxWidth": "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={passowrd} alt="password generator homepage" style={{"maxWidth": "200px"}} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Generate Password</h5>
                                    <p className="card-text">Generate a random password based on the criteria you chose. Next take a screenshot to save your passowrd for prosterity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='projects'>
                    <div className="card mb-3" style={{ "maxWidth": "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src='...' alt="password generator homepage" style={{"maxWidth": "200px"}} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Team Builder</h5>
                                    <p className="card-text">Team Builder allows Users to quickly build templates for any project and assign roles to members.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='projects'>
                    <div className="card mb-3" style={{ "maxWidth": "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src='...' alt="password generator homepage" style={{"maxWidth": "200px"}} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Employee Tracker</h5>
                                    <p className="card-text">Employee-Tracker is simple and easy to use application designed to allow managers and other qualified personal view and edit employee data.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='projects'>
                    <div className="card mb-3" style={{ "maxWidth": "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src='...' alt="password generator homepage" style={{"maxWidth": "200px"}} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">ReadMe Generator</h5>
                                    <p className="card-text">Short on time and but still need a quality readme? Readme Generator uses inquirer to take user input to build the perfect readme. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>




        </div>



    )
}

export default Portfolio