

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carousel12() {
    return (
        <div className="carousel-wrapper">
            <Carousel showIndicators={false}>
                <div>
                    <img src="https://images.trvl-media.com/lodging/1000000/30000/23400/23348/92e172d2.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="hotelImage" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/1000000/30000/23400/23348/82bda002.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="hotelImage" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/1000000/30000/23400/23348/06c96afe.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="hotelImage" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/1000000/30000/23400/23348/e874f24c.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="hotelImage" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/1000000/30000/23400/23348/b1de3609.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="hotelImage" />
                </div>
            </Carousel>
        </div>
    )
}
export default Carousel12;