

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carousel2() {
    return (
        <div className="carousel-wrapper">
            <Carousel showIndicators={false}>
                <div>
                    <img src="https://images.trvl-media.com/lodging/4000000/3030000/3024600/3024594/1e8894b8.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="hotelImage" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/4000000/3030000/3024600/3024594/20a16526.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="hotelImage" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/4000000/3030000/3024600/3024594/34413453.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="hotelImage" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/4000000/3030000/3024600/3024594/2ba7fd09.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="hotelImage" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/4000000/3030000/3024600/3024594/9f726bac.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="hotelImage" />
                </div>
            </Carousel>
        </div>
    )
}
export default Carousel2;