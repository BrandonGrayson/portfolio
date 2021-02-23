import React from "react"
import "../styles/portfolio.css"
import lookbook from "../img/lookbook.png"
import dmm from "../img/dmm.png"
import anime from "../img/animevsmma.png"
import weather from "../img/weatherdashboard.png"


const Portfolio = () => {
    return (
        <div className='container col-xs-12 col-sm-12 col-md-12 col-lg-12'>

            <div className='container'>
                <h1 className='ptitle'>Projects</h1>

                <h2 className='ptitle'>Group Projects: </h2>


                <div className='projects'>
                    <div className="card mb-3" style={{ "maxWidth": "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={lookbook} alt="lookbook homepage" style={{"maxWidth": "200px"}} />
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
                                <img src="..." alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Maze</h5>
                                    <p className="card-text">Welcome to Maze Runner. True to its name this app is in fact a maze, Can you reach the goal?</p>
                                    <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='projects'>
                    <div className="card mb-3" style={{ "maxWidth": "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="..." alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Day Planner</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='projects'>
                    <div className="card mb-3" style={{ "maxWidth": "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="..." alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Generate Password</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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