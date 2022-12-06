import React from "react";

const Travel = ({title, country, image, start,end, price, description, places, setTrips }) => {

    const clickHandler = (e) => {
        e.preventDefault();
        setTrips(prev => [...prev, {title, country, price}]);
    }

    return(
        <div className="travel-box">
            <h2>{title}</h2>
            <img src={image} alt="" className="travel-image"/>
            <h3>{country}</h3>
            <p>Cena: {price}zł</p>
            {/*<p>{start}</p>
            <p>{end}</p>*/}
            <p>{description}</p>
            <p>Liczba miejsc: {places}</p>
            <div className="button-all">
                <button
                    className="buy-button"
                    onClick={clickHandler}
                >
                        Kup
                </button>
                <div className="plus-icon"></div>
            </div>
        </div>
    );
}

export default Travel;