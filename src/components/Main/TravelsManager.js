import React, {useEffect, useState} from "react";
import Travel from "./Travel";


const API_URL = 'http://localhost:3000';

const TravelsManager = () => {
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

 /*   const sellCar = (id) => {
        setLoading(true)
        fetch(`${API_URL}/cars/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(result => {
                setCars(prevCars => prevCars.filter(car => car.id !== id));
                setLoading(false);
            })
    }
*/
    useEffect(() => {
        getTravels();
    }, [])

    if (loading) return <p>Trwa ładowanie danych...</p>

    return <section className="search-section">
        <div className="search-section container">
            <div className="trips-to-select">
                {travels.map(travels=> {
                    return <Travel
                        title={travels.name}
                        country={travels.country}
                        image={travels.image}
                        /*start={travels.start}
                        end={travels.end}*/
                        price={travels.price}
                        description={travels.description}
                        places = {travels.places}
                    />
            })}
            </div>
        </div>
    </section>
}

export { TravelsManager }