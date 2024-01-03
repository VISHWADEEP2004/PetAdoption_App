import React from 'react';
import Footer from './Footer'
import '../Assert/Css/Dogadap.css';

function Dogadap() {
  const dogs = [
    {
      img: "https://c4.wallpaperflare.com/wallpaper/917/691/823/dark-dog-animals-portrait-wallpaper-preview.jpg",
      name: "Max",
      breed: "Labrador Retriever",
      age: "3 years",
      location: "Parc expositions, Nantes",
      dateAvailable: "Saturday, 1st February 2024",
      // disclaimer: "Note: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio"
    },
    {
      img: "https://i.pinimg.com/736x/50/ee/86/50ee8616974883e4162bdf8fc6b8ceeb.jpg",
      name: "Buddy",
      breed: "Golden Retriever",
      age: "2 years",
      location: "Central Park, New York",
      dateAvailable: "Sunday, 2nd February 2024",
      // disclaimer: "Note: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio"
    },
    {
      img: "https://w0.peakpx.com/wallpaper/967/321/HD-wallpaper-german-shepherd-dog-nice-dogs-beautiful-thumbnail.jpg",
      name: "Rocky",
      breed: "German Shepherd",
      age: "4 years",
      location: "City Park, Berlin",
      dateAvailable: "Monday, 3rd February 2024",
      // disclaimer: "Note: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio"
    },
    {
      img: "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk2NTQxNDcwMTUxMjg4NjM4/13-things-to-consider-before-buying-a-golden-retriever.png",
      name: "Charlie",
      breed: "Golden Retriever",
      age: "1 year",
      location: "Bondi Beach, Sydney",
      dateAvailable: "Tuesday, 4th February 2024",
      // disclaimer: "Note: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio"
    },
  ];

  return (
    <>
      <h1 className='dog'>Dogs</h1>
      <ul>
        {dogs.map((dog) => (
          <li  className="booking-card" style={{ backgroundImage: `url(${dog.img})` }}>
            <div className="book-container">
              <div className="content">
                <button className="btn">Adopt</button>
              </div>
            </div>
            <div className="informations-container">
              <h2 className="title">Dog : {dog.name}</h2>
              <p className="sub-title">Breed: {dog.breed}</p>
              <p className="price">
                <svg className="icon" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                  <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
                </svg>
                Age: {dog.age}
              </p>
              <div className="more-information">
                <div className="info-and-date-container">
                  <div className="box info">
                    <svg className="icon" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                      <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
                    </svg>
                    <p>Location: {dog.location}</p>
                  </div>
                  <div className="box date">
                    <svg className="icon" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                      <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
                    </svg>
                    <p>Date Available: {dog.dateAvailable}</p>
                  </div>
                </div>
                <p className="disclaimer">{dog.disclaimer}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Footer/>
    </>
  );
}

export default Dogadap;
