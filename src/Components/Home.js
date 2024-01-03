// Home.jsx

import React, { useState } from 'react';
import Carousel from './MyCarousel';
import Footer from './Footer';
import AdminDashboard from './AdminDashboard';
import Description from './Description';
import Petoptions from './Petoptions';

function Home() {
  

  return (
    <>
            <Carousel />
            <Petoptions/>
            <Footer />
    </>
  );
}

export default Home;
