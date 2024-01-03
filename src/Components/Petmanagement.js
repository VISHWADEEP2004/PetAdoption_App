// PetManagement.js

import React, { useEffect, useState } from 'react';
import { getPetDetails, addNewPet } from '../Services/api';

const PetManagement = () => {
  // State to hold pet information
  const [petInfo, setPetInfo] = useState({
    img: '',
    name: '',
    breed: '',
    age: '',
    location: '',
    dateAvailable: '',
  });

  // Function to fetch pet details
  const fetchPetDetails = async (id) => {
    try {
      const response = await getPetDetails(id);
      setPetInfo(response.data);
    } catch (error) {
      console.error('Error fetching pet details:', error);
    }
  };

  // Function to add a new pet
  const handleAddNewPet = async () => {
    try {
      const newPet = {
        img: 'https://i.pinimg.com/736x/25/dd/f0/25ddf0f953df1bd2d40dc4159e24d336.jpg',
        name: 'Oreo',
        breed: 'British Shorthair',
        age: '4 years',
        location: 'Bondi Beach, Sydney',
        dateAvailable: 'Tuesday, 4th February 2024',
      };

      const response = await addNewPet(newPet);
      console.log('New pet added:', response.data);
    } catch (error) {
      console.error('Error adding new pet:', error);
    }
  };

  useEffect(() => {
    // Fetch pet details when component mounts (replace '1' with the desired pet ID)
    fetchPetDetails(1);
  }, []);

  return (
    <div>
      <h1>Pet Management</h1>
      {/* Display pet information */}
      <img src={petInfo.img} alt={petInfo.name} />
      <h2>{petInfo.name}</h2>
      <p>Breed: {petInfo.breed}</p>
      <p>Age: {petInfo.age}</p>
      <p>Location: {petInfo.location}</p>
      <p>Date Available: {petInfo.dateAvailable}</p>

      {/* Button to add a new pet */}
      <button onClick={handleAddNewPet}>Add New Pet</button>
    </div>
  );
};

export default PetManagement;
