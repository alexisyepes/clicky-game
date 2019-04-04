import React from "react";
import "../styles/Header.css";

function Header() {
    return (
        <div>
        <header className="background">
            <h1 className="title">The Incredibles... Clicky-Game</h1>
            <h6 className="instructions">Click on an image to earn points... but don't click on any more than once!
                          or you lose!
                </h6>
        </header>
        </div>
    );
}

export default Header;