

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carousel8() {
    return (
        <div className="carousel-wrapper">
            <Carousel showIndicators={false}>
                <div>
                    <img src="https://images.trvl-media.com/lodging/6000000/5490000/5484200/5484178/32fef8ce.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="hotelImage" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/6000000/5490000/5484200/5484178/da03556d.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="hotelImage" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/6000000/5490000/5484200/5484178/85bf2b41.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="hotelImage" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/6000000/5490000/5484200/5484178/f84fde8c.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="hotelImage" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/6000000/5490000/5484200/5484178/277ee684.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="hotelImage" />
                </div>
            </Carousel>
        </div>
    )
}
export default Carousel8;