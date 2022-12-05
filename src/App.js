import Header from "./components/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {TravelsManager} from "./components/Main/TravelsManager";
/*import {Route, Routes,BrowserRouter } from "react-router-dom";*/

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
        <TravelsManager/>
    </div>
  );
}

export default App;
/*
<BrowserRouter>
    <Routes>
        <Route path="/" element={Main/>}/>
        <Route path="contact" element = {<Contact/>}/>
        <Route path="reservedTrips" element={<ReservedTrips/>} >
    </Routes>
</BrowserRouter>
*/
