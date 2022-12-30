
import contactImage from "./images/Contact.png";
import SketchImage from "./images/Sketch.png";
import MyLogo from "./images/My-new-Logo.png";
function Contact() {
    // const initialText = 'Send';
    // const [buttonText, setButtonText] = useState(initialText);
    
    // function handleClick(e) {
        
    //     e.preventDefault();
    //     setButtonText('Sent ✔️');

    //     setTimeout(() => {
    //     setButtonText(initialText);
    //     }, 2000);
    //     gsap.to(".InputOne", {value: ""})// 👈️ change text back after 1 second
    // }

    return (
        <div className="ContactBox">
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-start g-lg-5 py-5">
                <h2 className="display-3 fw-bold lh-5 mb-5 text-center ContactTitle">Leave us your message</h2>
                <div className="col-lg-7 text-center text-lg-start">
                    <h2 className="display-5 fw-bold lh-5 mb ContactSubtitle">How was your experience?</h2>
                    <p className="col-lg-10 fs-5 mt-5 ContactText">
                        We are always glad to any of your message! After all, your feedback and comments help us improve our work to make your trip unforgettable!
                    </p>
                    <img src={contactImage} alt="logoImage" />
                    <img src={SketchImage} alt="logoImage" width="180px" />
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
                    <form className="p-4 p-md-5 border rounded-3 MyForm">
                        <div className="mb-3">
                            <input type="text" className="InputOne w-100 p-3" placeholder="😎 your name..." required={true} />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="InputOne w-100 p-3" placeholder="📧 name@example.com..." required={true} />
                        </div>
                        <div className="mb-5">
                            <textarea className="InputOne w-100 p-3" id="floatingPassword" placeholder="✉️ Type your message..." rows="1" required={true} />
                        </div>
                        <button className="w-100 btn btn-lg btn-primary mt-5 fs-3" type="submit">Send</button>
                    </form>
                </div>
                <h2 className="text-center mt-5 SocialText">Find us in these places:</h2>
                <ul className="wrapper">
                    <li className="icon facebook">
                        <span className="tooltip">Facebook</span>
                        <span><i className="fab fa-facebook-f"></i></span>
                    </li>
                    <li className="icon twitter">
                        <span className="tooltip">Twitter</span>
                        <span><i className="fab fa-twitter"></i></span>
                    </li>
                    <li className="icon instagram">
                        <span className="tooltip">Instagram</span>
                        <span><i className="fab fa-instagram"></i></span>
                    </li>
                    <li className="icon github">
                        <span className="tooltip">WhatsApp</span>
                        <span><i className="fab fa-whatsapp"></i></span>
                    </li>
                    <li className="icon youtube">
                        <span className="tooltip">Youtube</span>
                        <span><i className="fab fa-youtube"></i></span>
                    </li>
                </ul>
            </div>
            <footer className="py-3 mt-5 border-top text-center">
                <p className="text-center FooterText">© 2022 Created with <i className="fa fa-heart"></i></p>
                <img className="MyLogo p-2" src={MyLogo} alt="MyLogo" width="80px" />
                <p className="FooterText">All images were taken from the internet and are used for educational purpose only</p>
            </footer>
        </div>
        </div>
    )
}
export default Contact;