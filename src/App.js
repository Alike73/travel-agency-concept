import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import About from "./About";
import './App.css';
import Contact from "./Contact";
import Explore from "./Explore";
import Gallery from "./Gallery";
import Home from "./Home";
import Review from "./Review";
import iconImage from "./images/travelBanner.png";
import { gsap } from "gsap";

function App() {

  const menuPlay = () => {
    let tl = gsap.timeline();
    tl.fromTo(".nav-item", {opacity: 0, y: 30}, {delay: .3, duration: .3, stagger: .1, opacity: 1, y: 0})
  }

  return ( <Router>
      <nav className="navbar navbar-expand-lg navbar-dark py-1 sticky-top" aria-label="Fifth navbar example">
        <div className="container-fluid">
          <img className="navbar-brand ms-3" src={iconImage} alt="logo" width="150px" />
          <button onClick={() => menuPlay()} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
              <li className="nav-item px-5 mx-5 text-center">
                <NavLink className="navLink" to="/" activeclassname="active">Home</NavLink>
              </li>
              <li className="nav-item px-5 mx-5 text-center">
                <NavLink className="navLink" to="/about" activeclassname="active">About</NavLink>
              </li>
              <li className="nav-item px-5 mx-5 text-center">
                <NavLink className="navLink" to="/explore" activeclassname="active">Explore</NavLink>
              </li>
              <li className="nav-item px-5 mx-5 text-center">
                <NavLink className="navLink" to="/gallery" activeclassname="active">Gallery</NavLink>
              </li>
              <li className="nav-item px-5 mx-5 text-center">
                <NavLink className="navLink" to="/review" activeclassname="active">Review</NavLink>
              </li>
              <li className="nav-item px-5 mx-5 text-center">
                <NavLink className="navLink" to="/contact" activeclassname="active">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="*" element = {<Home />} />
        <Route path="/about/*" element = {<About />} />
        <Route path="/explore" element = {<Explore />} />
        <Route path="/gallery" element = {<Gallery />} />
        <Route path="/review" element = {<Review />} />
        <Route path="/contact" element = {<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
