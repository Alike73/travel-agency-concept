import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carousel1() {
    return (
        <div className="carousel-wrapper">
            <Carousel showIndicators={false}>
                <div>
                    <img src="https://images.trvl-media.com/lodging/3000000/2450000/2442800/2442736/6a76d6d2.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="hotelImage" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/3000000/2450000/2442800/2442736/7e8517e9.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="hotelImage" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/3000000/2450000/2442800/2442736/cc6f0b47.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="hotelImage" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/3000000/2450000/2442800/2442736/65395f56.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="hotelImage" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/3000000/2450000/2442800/2442736/856da6e5.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="hotelImage" />
                </div>
            </Carousel>
        </div>
    )
}
export default Carousel1;