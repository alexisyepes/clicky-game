import React from "react";
import "../styles/Instructions.css";

function Instructions() {
    return (
        <div className="container ">
            <div className="row">
                <div className="col-md-12 instructions">
                    {/* <button id="toggleBtn">Hide / Show Instructions</button> */}
                    <h6 id="instructions">Click on an image to earn points...but don't click on any more than once!
                    or you lose!
                </h6>
                </div>
            </div>
        </div>
    );
}

export default Instructions;