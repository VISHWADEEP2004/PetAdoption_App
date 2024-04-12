import { useRef, useState } from "react";
import axios from "axios";
import '../Assert/Css/register.css'
import { Link } from 'react-router-dom';

export default function Register() {
    const userInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            username: userInputRef.current.value,
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
        };

        try {
            const response = await axios.post('http://localhost:8080/user', formData);
            
            console.log('Response:', response.data);
            window.location.href = '/';
            alert("Registration successful!");
        } catch (error) {
            console.error('Error:', error.response.data);
            alert("Registration failed. Please try again.");
        }
    };

    return (
        <>
            <div className='reg-container'>
                <form className="container2 shadow2" onSubmit={handleSubmit} >
                    <h3>Registration form</h3>
                    <input
                        type="text"
                        id="username"
                        ref={userInputRef}
                        placeholder="Username"
                        className="name-input2"
                    />
                    {errors.username === "" ? (
                        ""
                    ) : (
                        <span className="error-comp">{errors.username}</span>
                    )}
                    <input
                        type="text"
                        id="email"
                        ref={emailInputRef}
                        placeholder="Email"
                        className="name-input2"
                    />
                    {errors.email === "" ? (
                        ""
                    ) : (
                        <span className="error-comp">{errors.email}</span>
                    )}
                    <input
                        type="password"
                        id="password"
                        ref={passwordInputRef}
                        placeholder="Password"
                        className="name-input2"
                    />
                    {errors.password === "" ? (
                        ""
                    ) : (
                        <span className="error-comp">{errors.password}</span>
                    )}
                    
                    <input type="submit" value="Submit" className="button-input2" />
                </form>
            </div>
        </>
    )
}
