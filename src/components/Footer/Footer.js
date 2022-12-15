import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faInstagram
}
from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <div className="footer_info">
                    <div className="footer_logo">
                        <div className ="footer_logo_icon"></div>
                        <a href="/" className="footer_logo_title">TravelWithUs</a>
                    </div>
                    <span className="footer_copy">© 2022 TravelWithUs, All Rights Reserved</span>
                </div>
                <div className="footer_icons">
                    <a
                        href="https://www.facebook.com" className="footer_icons_facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="1.5x"/>
                    </a>
                    <a
                        href="https://www.instagram.com" className="footer_icons_instagram social">
                    <FontAwesomeIcon icon={faInstagram}size="1.5x"/>
                    </a>
                    <a
                        href="https://www.youtube.com" className="footer_icons_youtube social">
                    <FontAwesomeIcon icon={faYoutube} size="1.5x"/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;