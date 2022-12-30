import { useState } from "react";
import { data } from "./data";
import { gsap } from "gsap";


function Gallery() {

    const [resort, setResort] = useState(0);
    const {id, name, description, imageTwo, source, link, price, searchTerm} = data[resort];

    const [showMore, setShowMore] = useState(false);

    const showText = (data) => {
        data.showMore = !data.showMore;
        setShowMore(!showMore);
    }

    const previousResort = () => {
        let tl = gsap.timeline();
        tl.fromTo(".GalleryTitle span", {opacity: 0, y: 100}, {duration: .8, stagger: .2, opacity: 1, y: 0})
        tl.fromTo(".gallFrame", {opacity: 0, x: "-100%"}, {duration: 1.2, opacity: 1, x: "0%"})
        tl.fromTo(".numberText", {opacity: 0, x: 100}, {duration: .8, opacity: 1, x: 0})
        tl.fromTo(".SubTitle", {opacity: 0, y: 50}, {duration: .3, opacity: 1, y: 0})
        tl.fromTo(".Description", {opacity: 0, y: 50}, {duration: .3, opacity: 1, y: 0})
        tl.fromTo(".Price", {opacity: 0, x: "-100%"}, {duration: .5, opacity: 1, x: "0%"})
        setResort((resort => {
            resort --;
            if(resort < 0) {
                return data.length -1;
            }
            return resort;
        }))
    } 
    
    const nextResort = () => {
        let tl = gsap.timeline();
        tl.fromTo(".GalleryTitle span", {opacity: 0, y: -100}, {duration: .8, stagger: .2, opacity: 1, y: 0})
        tl.fromTo(".gallFrame", {opacity: 0, x: "100%"}, {duration: 1.2, opacity: 1, x: "0%"})
        tl.fromTo(".numberText", {opacity: 0, x: -100}, {duration: .8, opacity: 1, x: 0})
        tl.fromTo(".SubTitle", {opacity: 0, y: 50}, {duration: .3, opacity: 1, y: 0})
        tl.fromTo(".Description", {opacity: 0, y: 50}, {duration: .3, opacity: 1, y: 0})
        tl.fromTo(".Price", {opacity: 0, x: "100%"}, {duration: .5, opacity: 1, x: "0%"})
        setResort((resort => {
            resort ++;
            if(resort > data.length -1) {
                resort = 0;
            }
            return resort;
            
        }))
    }

    const btnText = showMore ? "Show less" : "Show more";

    return (
        <div className="GalleryMainBox">
            <div className="Box mt-5">
                <h1 className='GalleryTitle'><span className='ResortAmount'>Destination:</span> <span className="Destination">{searchTerm}</span></h1>
            </div>
            <div className="Box">
                <div className="gallFrame">{imageTwo}</div>
            </div>
            <div className="Box mb-3">
                <h2 className='numberText'>Number <span className='ResortNumber'>{id}.</span></h2>
            </div>
            <div className="Box mb-3">
                <h2 className='SubTitle'>{name}</h2>
            </div>
            <div className="Box">
                <p className='Description'>
                {showMore ? description : description.substring(0, 154) + "...."}
                <span className='whiteSpace'></span>
                <button className='SeeMoreBtn' onClick={() => showText(data)}>{btnText}</button>
                </p>
            </div>
            <div className="Box">
                <h3 className="Price">Price: {price}</h3>
            </div>
            <div className="Box my-3">
                <p className='SourceText'>Source: <a className='SourceLink' href={"https://www.expedia.com/"} target={"_blank"} rel={"noopener noreferrer"}>{source}</a></p>
            </div>
            <div className="Box">
                <div className="buttons">
                    <button onClick={previousResort}>Prev</button>
                    <button onClick={nextResort}>Next</button>
                </div>
            </div>
            <div className="Box">
                <a className="BookLink" href={link} target={'_blank'} rel={"noopener noreferrer"}>
                    <div className="banner">
                    <div className="inner">
                        <h1>Book now</h1>
                    </div>
                    </div>
                </a>
            </div>
            <div className="Box">
                <p className='FooterText'>All images were taken from: <a className='SourceLink' href={"https://www.expedia.com/"} target={"_blank"} rel={"noopener noreferrer"}>expedia.com</a> and, are used for educational purposes only.</p>
            </div>
        </div>
    )
}
export default Gallery;