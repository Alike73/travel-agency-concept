import { useState } from "react";
import { gsap } from "gsap";
import { ReviewUserData } from "./ReviewUserData";

function Review() {

    // --We wanna set index=0, to display only data of user #1--<
    const [person, setPerson] = useState(0);
    // equate all data to the person we said that this person goes at id#1(index=0)
    const {customerName, customerText, position, customerImage} = ReviewUserData[person];
    

    const previousPerson = () => {
        gsap.fromTo(".starsBox i", {y: -20, scale: 0, rotation: -45}, {delay: .3, duration: .3, stagger: .1, y: 0, scale: 1, rotation: 0})
        gsap.fromTo(".customerPhoto", {opacity: 0, y: 50}, {duration: .8, opacity: 1, y: 0})
        gsap.fromTo(".customer_text", {x: -550, y: -50, opacity: 0, scale: 0}, {duration: 1.3, x: 0, y: 0, opacity: 1, scale: 1})
        gsap.fromTo(".customerName", {y: -30, opacity: 0, scale: 0}, {duration: .8, y: 0, opacity: 1, scale: 1})
        gsap.fromTo(".UserPosition", {opacity: 0, y: 50}, {duration: .8, opacity: 1, y: 0})
        gsap.fromTo(".subTitleText", {opacity: 0, scale: 0,  y: -100}, {duration: .8, opacity: 1, scale: 1, y: 0})
        setPerson((person => {
        person --;
        // --If count goes minus 0 in our array-->
        if(person < 0) {
            // --Return end (last person) in our array--<
            return ReviewUserData.length -1;
        }
        return person;
        }));
    }

    const nextPerson = () => {
        
        gsap.fromTo(".starsBox i", {y: -20, scale: 0, rotation: -45}, {delay: .3, duration: .3, stagger: .1, y: 0, scale: 1, rotation: 0})
        gsap.fromTo(".customerPhoto", {opacity: 0, y: 50}, {duration: .8, opacity: 1, y: 0})
        gsap.fromTo(".customer_text", {x: -550, y: -50, opacity: 0, scale: 0}, {duration: 1.3, x: 0, y: 0, opacity: 1, scale: 1})
        gsap.fromTo(".customerName", {y: -30, opacity: 0, scale: 0}, {duration: .8, y: 0, opacity: 1, scale: 1})
        gsap.fromTo(".UserPosition", {opacity: 0, y: 50}, {duration: .8, opacity: 1, y: 0})
        gsap.fromTo(".subTitleText", {opacity: 0, scale: 0,  y: -100}, {duration: .8, opacity: 1, scale: 1, y: 0})
        setPerson((person => {
        person ++;
        // --If count goes longer that length of our array-->
        if(person > ReviewUserData.length -1) {
            // --Start count from the first element in our array--<
            person = 0;
        }
        return person;
        }));
    }
    


    return (
        <div>
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-5">
                <h3 className="testimonialsTitle mb-5 display-1"><span>REVIEWS</span></h3>
                    <div className="col-md-10 mx-auto col-lg-5 mb-5 text-center customerImgBox">
                        <img className="customerPhoto rounded-circle" src={customerImage} alt="customerPhoto" />
                        <h3 className="customerName mb-0">{customerName}</h3>
                        <h4 className="UserPosition">{position}</h4>
                        <div className="starsBox">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="arrowBox"></div>
                        <div className="arrowDown"></div>
                    </div>
                    <div className="col-lg-7 text-center text-lg-start">
                        
                        <h5 className="mb-5 mt-5 subTitleText"><span>What our clients say</span></h5>
                        <p className="col-lg-10 customer_text">
                            {customerText}
                        </p>
                        <div className="btn-group pb-5 mb-5 mt-5 gap-2" role="group" aria-label="Basic outlined example">
                            <button id="prevBtn" type="button" className="btn me-3" onClick={() => previousPerson()}>PREV</button>
                            <button id="nextBtn" type="button" className="btn ms-3" onClick={() => nextPerson()}>NEXT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Review;