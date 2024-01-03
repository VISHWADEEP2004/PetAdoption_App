import React, { useState } from 'react';
import Addpet from './Addpet';

const ParentComponent = () => {
  const [pets, setPets] = useState([]);

  const handleAddPet = (newPetData) => {
    setPets([...pets, newPetData]);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <Addpet handleAddPet={handleAddPet} />
      {/* Other components or content */}
    </div>
  );
};

export default ParentComponent;
