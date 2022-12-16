import React from 'react';
import {TravelsManager} from "../components/Main/TravelsManager";

const Home = ({trips, setTrips}) => {

    return (
        <div className="App">
            <TravelsManager trips={trips} setTrips={setTrips} />
        </div>
    );
};

export default Home;