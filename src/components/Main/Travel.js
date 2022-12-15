import React from "react";

const Travel = ({title, country, image, price, description, amount, setTrips, id }) => {

    const clickHandler = (e) => {
        e.preventDefault();
        setTrips(prev => [...prev, {country, price, image, amount, id}]);
    }

    return(
        <div className="travel_box">
            <h2>{title}</h2>
            <img src={process.env.PUBLIC_URL + image} alt="photo" className="travel_box_image"/>
            <h3>{country}</h3>
            <h4>Cena: {price}zł</h4>
            <p>{description}</p>
            <div className="button_all">
                <button
                    className="button_all_buy"
                    onClick={clickHandler}
                >
                        Kup
                </button>
                <div className="button_all_plus_icon"></div>
            </div>
        </div>
    );
}

export default Travel;