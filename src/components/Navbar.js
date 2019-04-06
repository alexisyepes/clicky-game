import React from "react";
import "../styles/Navbar.css";

function Navbar(props) {
    return (
        <div className="topBar">
            <div className="row">
                <div className="col-md-2">
                    <a id="homeLink" className="navText" href="/"><h2>Reset</h2></a>
                </div>
                <div className="col-md-5 navText">
                    <h2>Click an Image to begin!</h2>
                </div>
                <div className="col-md-2 navText">
                    <h2>Score: {props.score}</h2>
                </div>
                <div className="col-md-3 navText">
                    <h2>Top Score: {props.highScore}</h2>
                </div>
            </div>
        </div>
    );
}

export default Navbar;