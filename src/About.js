import {Routes, Route, useNavigate} from 'react-router-dom';
import Explore from "./Explore";
import Gallery from './Gallery';
import bgVideo from "./videos/aboutBanner.mp4";
import imageOne from "./images/JoeDoe.png";
import imageTwo from "./images/marina.png";
import imageThree from "./images/stephanie.png";

function About() {

    const navigate = useNavigate();

    const navigateToExplore = () => {
        // 👇️ navigate to /contacts
        navigate('/explore');
    };

    const navigateToGallery = () => {
        navigate("/gallery");
    }

    return (
        <div>
            <div className="container col-xxl-8 px-4 py-5">
                <h1 className="display-3 fw-bold lh-1 mb-3 text-center AboutTitle">ABOUT US</h1>
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <video className="d-block mx-lg-auto img-fluid VideoAbout" autoPlay muted loop id="videoBg" playsInline width="700" height="500">
                            <source src={bgVideo} type="video/mp4" />
                        </video>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="display-5 fw-bold lh-1 mb-3 text-center AboutSubTitle">The best vacation is the one you’ll never forget</h3>
                        <p className="AboutText">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </p>

                        <button type="button" className="px-4 py-3 mt-5 w-100 AboutBtn" onClick={navigateToExplore}>Explore</button>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4 text-center">
                        <img src={imageTwo} className="bd-placeholder-img rounded-circle" width="160" height="160" alt="JoeDoeImage" />
                        <h2 className="fw-normal NameText mt-3">Marina</h2>
                        <small>MANAGER</small>
                        <p className="mt-3 AboutText">
                            Travel is my love language. Departures, arrivals, hotels, and getting lost ― We love it all
                        </p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <img src={imageOne} className="bd-placeholder-img rounded-circle" width="160" height="160" alt="JoeDoeImage" />
                        <h2 className="fw-normal NameText mt-3">Joe Doe</h2>
                        <small>CEO</small>
                        <p className="mt-3 AboutText">
                            Kick-off your beach season with a visit to the finest destinations, served with a smile
                        </p>
                    </div>
                    <div className="col-lg-4 text-center mb-5">
                        <img src={imageThree} className="bd-placeholder-img rounded-circle" width="160" height="160" alt="JoeDoeImage" />
                        <h2 className="fw-normal NameText mt-3">Stephanie</h2>
                        <small>MANAGER</small>
                        <p className="mt-3 AboutText">
                            To beautiful destinations, there are no rules. We do whatever it takes to get you there
                        </p>
                    </div>
                    <button type="button" className="px-4 py-4 mt-5 w-100 AboutBtn" onClick={navigateToGallery}>Let's take a tour</button>
                    <Routes>
                        <Route path="/explore" element = {<Explore />} />
                        <Route path="/gallery" element = {<Gallery />} />
                    </Routes>
                </div>
            </div>
        </div>
        
    )
}
export default About;