import React, { useState } from 'react';
import '../Assert/Css/login.css';
import '../Assert/Css/App.css';
import cat from '../Assert/img/cat.gif';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Fetch user data based on the provided email
      const response = await axios.get(`http://localhost:8080/users`);
      const userData = response.data;
      console.log(userData)
      // Check if user data contains the entered email
      const user = userData.find(user => user.email === email);
      if (user) {
        // Check if the password matches
        if (user.password === password) {
          navigate('/');
        } else {
          setError('Invalid password');
        }
      } else {
        setError('User not found');
      }
    } catch (error) {
      setError('Failed to login. Please try again.');
    }
  };

  return (
    <>
      <div className='login-container'>
        <form className='container1 shadow1' onSubmit={handleLogin}>
          <Link to='/' className='cancel-link'></Link>
          <h3>LOGIN</h3>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            className='name-input1'
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            className='name-input1'
          />
          <input type='submit' value='SUBMIT' className='button-input1' />
          <span className='sig'>
            Create an Account
            <Link to='/register'>
              {' '}
              Register <img src={cat} alt='cat' className='catimg' />
            </Link>
          </span>
          {error && <p className='error-message'>{error}</p>}
        </form>
      </div>
    </>
  );
}

export default Login;
