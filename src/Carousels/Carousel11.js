

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carousel11() {
    return (
        <div className="carousel-wrapper">
            <Carousel showIndicators={false}>
                <div>
                    <img src="https://images.trvl-media.com/lodging/1000000/30000/23000/22998/02be9a71.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="hotelImage" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/1000000/30000/23000/22998/40041a48.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="hotelImage" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/1000000/30000/23000/22998/78750901.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="hotelImage" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/1000000/30000/23000/22998/96e968d8.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="hotelImage" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/1000000/30000/23000/22998/5eb75590.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="hotelImage" />
                </div>
            </Carousel>
        </div>
    )
}
export default Carousel11;