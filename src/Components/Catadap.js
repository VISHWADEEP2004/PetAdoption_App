import React from 'react';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import '../Assert/Css/Dogadap.css'; 

function Catadap() {
  const cats = [
    {
      img: "https://images.unsplash.com/photo-1572590603603-f828f6682212?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Whiskers",
      breed: "Siamese",
      age: "2 years",
      location: "Parc expositions, Nantes",
      dateAvailable: "Saturday, 1st February 2024",
    },
    {
      img: "https://images.unsplash.com/photo-1591429939960-b7d5add10b5c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc2lhbiUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D",
      name: "Mittens",
      breed: "Persian",
      age: "3 years",
      location: "Central Park, New York",
      dateAvailable: "Sunday, 2nd February 2024",
    },
    {
      img: "https://images.unsplash.com/photo-1569591159212-b02ea8a9f239?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFpbmUlMjBjb29uJTIwY2F0fGVufDB8fDB8fHww",
      name: "Fluffy",
      breed: "Maine Coon",
      age: "1 year",
      location: "City Park, Berlin",
      dateAvailable: "Monday, 3rd February 2024",
    },
    {
      img: "https://i.pinimg.com/736x/25/dd/f0/25ddf0f953df1bd2d40dc4159e24d336.jpg",
      name: "Oreo",
      breed: "British Shorthair",
      age: "4 years",
      location: "Bondi Beach, Sydney",
      dateAvailable: "Tuesday, 4th February 2024",
    },
  ];

  return (
    <>
      <h1 className='cat'>Cats</h1>
      <ul>
      {cats.map((cat, index) => (
          <li key={index} className="booking-card" style={{ backgroundImage: `url(${cat.img})` }}>
            <div className="book-container">
              <div className="content">
              <Link to={`/pet/${index}`} className="btn">Adopt</Link>
              </div>
            </div>
            <div className="informations-container">
              <h2 className="title">Cat: {cat.name}</h2>
              <p className="sub-title">Breed: {cat.breed}</p>
              <p className="price">
              <svg className="icon" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                  <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
                </svg>
                Age: {cat.age}
              </p>
              <div className="more-information">
                <div className="info-and-date-container">
                  <div className="box info">
                  <svg className="icon" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                      <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
                    </svg>
                    <p>Location: {cat.location}</p>
                  </div>
                  <div className="box date">
                  <svg className="icon" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                      <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
                    </svg>
                    <p>Date Available: {cat.dateAvailable}</p>
                  </div>
                </div>
                <p className="disclaimer">{cat.disclaimer}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Footer />
    </>
  );
}

export default Catadap;
