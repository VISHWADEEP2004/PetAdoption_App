import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../Assert/Css/Petoptions.css'

function Catadap() {
    const navigate = useNavigate(); // Initialize navigate from useNavigate

    const pets = [
        {
            img: "https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress&cs=tinysrgb&w=600",
            type: "dog"
        },
        {
            img: "https://images.unsplash.com/photo-1591429939960-b7d5add10b5c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc2lhbiUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D",
            type: "cat"
        },
        {
            img: "https://images.pexels.com/photos/1366913/pexels-photo-1366913.jpeg?auto=compress&cs=tinysrgb&w=600",
            type: "other"
        }
    ];

    const handlePetClick = (type) => {
        if (type === "dog") {
            navigate('/dogadap');
        } else if (type === "cat") {
            navigate('/catadap');
        } else {
            navigate('/pets')
        }
    };

    return (
        <>
            <h1 className='description'>Available pets</h1>
            <ul>
                {pets.map((pet, index) => (
                    <li key={index} className="desp-card" style={{ backgroundImage: `url(${pet.img})` }}>
                        <div className="desp-container">
                            <div className="desp-content">
                                <button className="desp-btn" onClick={() => handlePetClick(pet.type)}>
                                    {pet.type === "dog" ? "Dog" : (pet.type === "cat" ? "Cat" : "Other Pet")}
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Catadap;
