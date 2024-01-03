import React, { useState } from 'react';
import Footer from './Footer';
import '../Assert/Css/Dogadap.css';

function Pets() {
    const [animals, setAnimals] = useState([
        {
            type: 'bird',
            img: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFycm90fGVufDB8fDB8fHww",
            name: "Robin",
            breed: "Parrot",
            age: "1 year",
            location: "Parc expositions, Nantes",
            dateAvailable: " 1st February 2024",
        },
        {
            type: 'bird',
            img: "https://images.unsplash.com/photo-1588336142586-36aff13141fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q29ja2F0b298ZW58MHx8MHx8fDA%3D",
            name: "Sky",
            breed: "Cockatoo Parot",
            age: "2 years",
            location: "Central Park, New York",
            dateAvailable: "Sundah, 6th February 2024",
        },
        {
            type: 'bird',
            img: "https://images.unsplash.com/photo-1618098750285-9402745c67e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2FuYXJ5fGVufDB8fDB8fHww",
            name: "Sunny",
            breed: "Canary",
            age: "1 year",
            location: "Bondi Beach, Sydney",
            dateAvailable: "Sunday, 14th February 2024",
        },
        {
            type: 'bird',
            img: "https://images.pexels.com/photos/2725982/pexels-photo-2725982.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Sky",
            breed: "Parrot",
            age: "2 years",
            location: "Tropical Island, Bahamas",
            dateAvailable: "Monday, 15th February 2024",
        },
        {
            type: 'horse',
            img: "https://images.pexels.com/photos/4573474/pexels-photo-4573474.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Spirit",
            breed: "Mustang",
            age: "5 years",
            location: "Ranch Valley, Texas",
            dateAvailable: "Friday, 7th February 2024",
        },
        {
            type: 'horse',
            img: "https://images.pexels.com/photos/19405088/pexels-photo-19405088/free-photo-of-a-brown-horse-on-a-grass-field.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Thunder",
            breed: "Appaloosa",
            age: "4 years",
            location: "Meadow Fields, Montana",
            dateAvailable: "Saturday, 8th February 2024",
        },
        {
            type: 'horse',
            img: "https://images.pexels.com/photos/7340799/pexels-photo-7340799.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Breezy",
            breed: "Thoroughbred",
            age: "3 years",
            location: "Windswept Fields, Wyoming",
            dateAvailable: "Thursday, 18th February 2024",
        },
        {
            type: 'horse',
            img: "https://images.pexels.com/photos/1848725/pexels-photo-1848725.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Storm",
            breed: "Friesian",
            age: "6 years",
            location: "Misty Meadows, Idaho",
            dateAvailable: "Friday, 19th February 2024",
        },
        {
            type: 'rabbit',
            img: "https://images.pexels.com/photos/10595522/pexels-photo-10595522.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Cotton",
            breed: "Holland Lop",
            age: "6 months",
            location: "Meadow Farm, Kansas",
            dateAvailable: "Sunday, 9th February 2024",
        },
        {
            type: 'rabbit',
            img: "https://images.pexels.com/photos/4001296/pexels-photo-4001296.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Thumper",
            breed: "Mini Rex",
            age: "8 months",
            location: "Rabbit Haven, Oregon",
            dateAvailable: "Monday, 10th February 2024",
        },
        {
            type: 'rabbit',
            img: "https://images.pexels.com/photos/19453866/pexels-photo-19453866/free-photo-of-close-up-of-a-white-rabbit.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Fluffy",
            breed: "Lionhead",
            age: "9 months",
            location: "Grassland Retreat, Nebraska",
            dateAvailable: "Tuesday, 16th February 2024",
        },
        {
            type: 'rabbit',
            img: "https://images.pexels.com/photos/33152/european-rabbits-bunnies-grass-wildlife.jpg?auto=compress&cs=tinysrgb&w=600",
            name: "Caramel",
            breed: "Dutch",
            age: "1 year",
            location: "Sweet Meadows, Iowa",
            dateAvailable: "Wednesday, 17th February 2024",
        },

    ]);
    const [addedPet, setAddedPet] = useState(null);

    const adoptPet = (index) => {
        const adoptedPet = animals[index];
        setAnimals((prevAnimals) => [...prevAnimals, adoptedPet]); 
        setAddedPet(adoptedPet); 
      };
      

    return (
        <>
            <h1 className='pets'>Adoptable Animals</h1>
            <ul>
                {animals.map((animal, index) => (
                    <li key={index} className="booking-card" style={{ backgroundImage: `url(${animal.img})` }}>
                        <div className="book-container">
                            <div className="content">
                                <button className="btn">Adopt</button>
                            </div>
                        </div>
                        <div className="informations-container">
                            <h2 className="title">{animal.type.charAt(0).toUpperCase() + animal.type.slice(1)}: {animal.name}</h2>
                            <p className="sub-title">Breed: {animal.breed}</p>
                            <p className="price">
                                <svg className="icon" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
                                </svg>
                                <span className="age">Age: {animal.age}</span>
                            </p>
                            <div className="more-information">
                                <div className="info-and-date-container">
                                    <div className="box info">
                                        <svg className="icon" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
                                        </svg>
                                        <p>Location: {animal.location}</p>
                                    </div>
                                    <div className="box date">
                                        <svg className="icon" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
                                        </svg>
                                        <p>Date Available: {animal.dateAvailable}</p>
                                    </div>
                                </div>
                                <p className="disclaimer">{animal.disclaimer}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            {addedPet && (
        <div>
          <h2>Added Pet:</h2>
          <p>Name: {addedPet.name}</p>
        </div>
      )}
            <Footer />
        </>
    );
}

export default Pets;
