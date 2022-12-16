import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header_container container">
                <div className="logo">
                    <div className ="logo_icon"></div>
                    <a href="/" className="logo_title">TravelWithUs</a>
                </div>
                <nav>
                    <input type="checkbox" className="menu_btn" id="menu_btn"/>
                        <label htmlFor="menu_btn" className="menu_toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    <ul className="header_nav">
                        <li className="nav_element">
                            <Link to="/" className="nav_link search">Wyszukaj wycieczkę</Link>
                        </li>
                        <li className="nav_element">
                            <Link to="/list" className="nav_link reserved">Zarezerwowane wycieczki</Link>
                        </li>
                        <li className="nav_element">
                            <Link to="/login" className="nav_link login">Logowanie</Link>
                        </li>
                        <li className="nav_element">
                            <Link to="/contact" className="nav_link contact">Kontakt</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
)
};

export default Header;