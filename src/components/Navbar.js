import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <div className="topBar">
            <div className="row">
                <div className="col-md-2">
                    <Link to="/" className={window.location.pathname === "/clicky-game" ? "nav-link active" : "nav-link"}>
                        Reset
                    </Link>
                </div>
                <div className="col-md-5">
                    <h2>Click an Image to begin!</h2>
                </div>
                <div className="col-md-2">
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
