import React from 'react';
import "./header.scss";
import "./../../settings/_typography.scss"

const Header = () => {
    return (
        <header className="header">
            <div className="header__container container">
                <div className="logo">
                <div className ="logo_icon"></div>
                <a href="#" className="logo_title">TravelWithUs</a>
                </div>
                <nav>
                    <ul className="header__nav">
                        <li className="nav__element">
                            <a href="#" className="nav__link search">Wyszukaj wycieczkę</a>
                        </li>
                        <li className="nav__element">
                            <a href="#" className="nav__link reserved">Zarezerwowane wycieczki</a>
                        </li>
                        <li className="nav__element">
                            <a href="#" className="nav__link contact">Kontakt</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
)
};

export default Header;