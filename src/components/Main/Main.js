import React from 'react';
import "./main.scss"

const Main = () => {
    return (
        <section className="search-section">
            <div className="search-section container">
                <form className="search-form">
                    <input className="search-bar" type="text"/>
                    <button className= "search-button" type="submit">Wyszukaj swoją wymarzoną wycieczkę </button>
                </form>
            </div>
        </section>
    )
};

export default Main;