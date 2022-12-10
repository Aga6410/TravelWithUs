import React from 'react';
import {Link} from "react-router-dom";
import "./header.scss";
import "./../../settings/_typography.scss"

const Header = () => {
    return (
        <header className="header">
            <div className="header__container container">
                <div className="logo">
                <div className ="logo_icon"></div>
                <a href="/" className="logo_title">TravelWithUs</a>
                </div>
                <nav>
                    <ul className="header__nav">
                        <li className="nav__element">
                            <Link to="/" className="nav__link search">Wyszukaj wycieczkę</Link>
                        </li>
                        <li className="nav__element">
                            <Link to="/list" className="nav__link reserved">Zarezerwowane wycieczki</Link>
                        </li>
                        <li className="nav__element">
                            <Link to="/login" className="nav__link login">Logowanie</Link>
                        </li>
                        <li className="nav__element">
                            <Link to="/contact" className="nav__link contact">Kontakt</Link>
                        </li>
                        {/*<li className="nav__element">
                            <Link to="/rejestracja" className="nav__link registration">Rejestracja</Link>
                        </li>*/}
                    </ul>
                </nav>
            </div>
        </header>
)
};

export default Header;