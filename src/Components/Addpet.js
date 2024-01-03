import React, { useState } from 'react';

const AddPet = ({ handleAddPet }) => {
  const [petData, setPetData] = useState({
    name: '',
    breed: '',
    age: '',
    location: '',
    dateAvailable: '',
    img: ''
  });

  const handleChange = (e) => {
    setPetData({ ...petData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddPet(petData); 
    setPetData({ 
      name: '',
      breed: '',
      age: '',
      location: '',
      dateAvailable: '',
      img: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        id='name'
        placeholder='Name'
        onChange={handleChange}
        value={petData.name}
      />
      <input
        type='text'
        id='breed'
        placeholder='Breed'
        onChange={handleChange}
        value={petData.breed}
      />
      <input
        type='text'
        id='age'
        placeholder='Age'
        onChange={handleChange}
        value={petData.age}
      />
      <input
        type='text'
        id='location'
        placeholder='Location'
        onChange={handleChange}
        value={petData.location}
      />
      <input
        type='text'
        id='dateAvailable'
        placeholder='Date Available'
        onChange={handleChange}
        value={petData.dateAvailable}
      />
      <input
        type='text'
        id='img'
        placeholder='Image URL'
        onChange={handleChange}
        value={petData.img}
      />
      <button type='submit'>Add Pet</button>
    </form>
  );
  
};

export default AddPet;
