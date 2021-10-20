import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../../images/_115561357_gettyimages-1254958416.jpg'
import banner2 from '../../../images/well-hospital-chen-mobileMasterAt3x.jpg'
import banner3 from '../../../images/StudyUncoversWhatMattersMostWEB.jpg'

const Banner = () => {
    return (
        <div className="banner-container">
            <Carousel>
                <Carousel.Item>
                    <img                   
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h2 className="text-primary">Welcome To Our Website.</h2>
                    <p className="text-dark">Healthy Hospital is established with a vision to achieve excellence in the field of Health Care and Research.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img                  
                    className="d-block w-100" 
                    src={banner2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h2 className="text-primary">We care about your health.</h2>
                    <p className="text-dark">Best hospital for you. We care about more than you.Feel free to contact us.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img                 
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h2 className="text-primary">WHY CHOOSE US?</h2>
                    <p className="text-dark">Excellent Services. Clinical excellence must be the priority for any health care service provider.</p>
                    </Carousel.Caption>
                </Carousel.Item>
           </Carousel>
        </div>
    );
};

export default Banner;