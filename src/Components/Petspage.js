import React, { useState } from 'react';
import PetList from './PetList';

const Petspage = () => {
  const [pets, setPets] = useState([]);

  const handleAddPet = (newPetData) => {
    // Adding the new pet to the existing pets list
    setPets([...pets, newPetData]);
    // You can perform any additional logic here, like sending data to a server, etc.
  };

  return (
    <div>
      <h1>Pets Page</h1>
      <AddPet handleAddPet={handleAddPet} />
      <PetList pets={pets} />
    </div>
  );
};

export default Petspage;
