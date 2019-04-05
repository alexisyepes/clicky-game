import React from "react";
import "../styles/Navbar.css";

function Navbar(props) {
    return (
        <div className="topBar">
            <div className="row">
                
                <div className="col-md-4 navBarLeftText">
                    <h2>Click an Image to begin!</h2>
                </div>
                <div className="col-md-3">
                    <h2>Score: {props.score}</h2>
                </div>
                <div className="col-md-3">
                    <h2>Top Score: {props.highScore}</h2>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
