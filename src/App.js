import {Route, Routes,BrowserRouter } from "react-router-dom";
import {useState} from "react";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import List from "./components/pages/List";
import Login from "./components/pages/Login"
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import "./scss/global.scss";


function App() {
  const [trips, setTrips, handleChange] = useState([]);
  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<Home trips={trips} setTrips={setTrips} />} />
              <Route path="list" element={<List trips={trips} setTrips={setTrips} handleChange={handleChange}/>} />
              <Route path="contact" element={<Contact trips={trips} setTrips={setTrips} />} />
              <Route path="login" element={<Login/>}/>
          </Routes>
          <Footer />
      </BrowserRouter>
  )
}

export default App;
