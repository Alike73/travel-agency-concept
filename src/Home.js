import {Routes, Route, useNavigate} from 'react-router-dom';
import Explore from "./Explore";


import bgVideo from "./videos/mainBG.mp4";

function Home() {

    const navigate = useNavigate();

    const navigateToExplore = () => {
        // 👇️ navigate to /contacts
        navigate('/explore');
    };

    return (
        <div>
            <video className="video-bg" autoPlay muted loop id="video-bg" playsInline>
                <source src={bgVideo} type="video/mp4" />
            </video>
            <div className="px-4 py-5 my-5 text-center MainBox container">
                <div className="TitleBox">
                    <h1 className="Title">
                        <span>Let us plan your getaway.</span>
                    </h1>
                </div>
                <div className="col-lg-6 mx-auto SecondBox">
                    <p className="TitleSubText mb-4">
                        Planning a vacation has never been easier, or more exciting!
                    </p>
                    <div className="d-sm-flex justify-content-sm-center mt-5">
                        <button type="button" className="border-button" onClick={navigateToExplore}>Explore</button>
                        <Routes>
                            <Route path="/explore" element = {<Explore />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default Home;