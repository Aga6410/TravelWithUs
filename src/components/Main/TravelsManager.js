import React, {useEffect, useState} from "react";
import Travel from "./Travel";

const API_URL = 'http://localhost:3000';

const TravelsManager = ({trips, setTrips, handleChange}) => {
    const [travels, setTravels] = useState([]);
    const [loading, setLoading] = useState(false);

    const getTravels = () => {
        setLoading(true)
        fetch(`${API_URL}/travels`)
            .then(response => response.json())
            .then(result => {
                setTravels(result);
                setLoading(false);
            })
    }

    useEffect(() => {
        getTravels();
    }, [])

    if (loading) return <p>Trwa ładowanie danych...</p>

    return <section className="search_section">
        <div className="search_section container">
            <div className="search_section_trips_to_select">
                {travels.map(travels => {
                    return <Travel
                        key={travels.id}
                        id={travels.id}
                        title={travels.name}
                        country={travels.country}
                        image={travels.image}
                        price={travels.price}
                        description={travels.description}
                        places = {travels.places}
                        amount = {travels.amount}
                        setTrips={setTrips}
                        handleChange={handleChange}
                    />
            })}
            </div>
        </div>
    </section>
}

export { TravelsManager }