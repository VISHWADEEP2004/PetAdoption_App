// PetDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

function PetDetails({ cats }) {
  const { id } = useParams();
  const selectedCat = cats[parseInt(id)]; // Access the selected cat based on the provided ID

  if (!selectedCat) {
    return <div>Loading...</div>; // You can display a loading message or handle other cases
  }

  return (
    <div>
      <h1>Pet Details</h1>
      <div>
        <img src={selectedCat.img} alt={selectedCat.name} />
        <h2>{selectedCat.name}</h2>
        <p>Breed: {selectedCat.breed}</p>
        <p>Age: {selectedCat.age}</p>
        {/* Display other details */}
      </div>
    </div>
  );
}

export default PetDetails;
