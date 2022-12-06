import React from 'react';

import {TravelsManager} from "../Main/TravelsManager";


const Home = ({trips, setTrips}) => {
    return (
        <div className="App">
            {/*<Header />*/}
            {/*<Main />*/}
            <TravelsManager trips={trips} setTrips={setTrips}/>
        </div>
    );
};

export default Home;