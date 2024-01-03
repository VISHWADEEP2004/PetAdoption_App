import React from 'react';
import image1 from '../Assert/img/image1.png';
import image2 from '../Assert/img/image2.jpeg';
import i3 from '../Assert/img/i3.jpg';
import { Carousel } from 'react-bootstrap';
import CarouselImage from './CarouselImage';
const MyCarousel = () => {
  const arrowStyles = {
    fontSize: '0px',
    color: 'trabsperant',
    borderRadius: '50%', 
    padding: '10px', 
    transition: 'border-radius 0.3s ease',
  };

  return (
    <Carousel interval={2000} nextIcon={<span style={arrowStyles}>&gt;</span>} prevIcon={<span style={arrowStyles}>&lt;</span>}>
      <Carousel.Item>
        <CarouselImage src={image1} alt="First Image" />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src={image2} alt="Second Image" />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src={i3} alt="Third Image" />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;