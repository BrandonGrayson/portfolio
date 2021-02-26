import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav class="navbar navbar-dark">
            <div class="container-fluid">
             <Link to="/portfolio" ><span class="navbar-brand mb-0 h1">Brandon</span></Link>   
            </div>
        </nav>
    )
}

export default Navbar