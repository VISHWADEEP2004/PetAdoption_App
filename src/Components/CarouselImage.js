import React from 'react';

const CarouselImage = ({ src, alt }) => {
  return <img src={src} alt={alt} style={{ width: '100%', height: '90vh' }} />;
};

export default CarouselImage;