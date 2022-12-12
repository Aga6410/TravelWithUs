import React from 'react';

import {TravelsManager} from "../components/Main/TravelsManager";


const Home = ({trips, setTrips}) => {
   /* const handleChange = (el,d) => {
        console.log(el, d)
    }*/

    return (
        <div className="App">
            {/*<Header />*/}
            {/*<Main />*/}
            <TravelsManager trips={trips} setTrips={setTrips} />
        </div>
    );
};

export default Home;