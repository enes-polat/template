import React from "react";
import AirBalloon from '../images/air-balloon.png';

const Header = () => {
    return (
        <>
            <div className="open-navbar-icon navbar-icon center">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="navbar-wrapper">
                <nav className="navbar">
                    <div className="close-navbar-icon navbar-icon center">
                        <div className="line line-1"></div>
                        <div className="line line-2"></div>
                    </div>
                    <div className="nav-list">
                        <a href="#" className="nav-link center">Home</a>
                        <a href="#" className="nav-link center">Tours</a>
                        <a href="#" className="nav-link center">About Us</a>
                        <a href="#" className="nav-link center">Offer</a>
                        <a href="#" className="nav-link center">Contact</a>
                    </div>
                </nav>
            </div>

            <header className="header center">
                <div className="header-text">
                    <h1 className="heading">Around the world</h1>
                    <p className="header-paragraph">
                        "Traveling - it leaves you speechless, then turns you into a
                        storyteller"
                    </p>
                </div>
                <img
                    src={AirBalloon}
                    alt="Header Image"
                    className="header-image"
                />
                <div className="logo">
                    <h1>
                        <span className="center">t</span>
                        <span className="center">h</span>
                        <span className="center">e</span>
                        <span className="center">r</span>
                        <span className="center">o</span>
                        <span className="center">a</span>
                        <span className="center">d</span>
                    </h1>
                </div>
            </header>
        </>
    );
}

export default Header;