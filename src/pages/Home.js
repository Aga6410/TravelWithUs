import React from 'react';
/*import "../scss/main.scss";*/
import {TravelsManager} from "../components/Main/TravelsManager";


const Home = ({trips, setTrips}) => {

    return (
        <div className="App">
            {/*<Header />*/}
            {/*<Main />*/}
            <TravelsManager trips={trips} setTrips={setTrips} />
        </div>
    );
};

export default Home;