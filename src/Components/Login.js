import React, { useState } from 'react';
import '../Assert/Css/login.css';
import '../Assert/Css/App.css';
import cat from '../Assert/img/cat.gif';
import { Link,useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'vishwa' && password === '1234') {
      navigate('/')
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <>
      <div className='login-container'>
        <form className='container1 shadow1' onSubmit={handleLogin}>
          <Link to='/' className='cancel-link'>
          </Link>
          <h3>LOGIN</h3>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='User Name'
            className='name-input1'
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            className='name-input1'
          />
          <input type='submit' value='LOGIN' className='button-input1' />
          <span className='sig'>
            Create an Account
            <Link to='/signup'>
              {' '}
              Signup <img src={cat} alt='cat' className='catimg' />
            </Link>
          </span>
          {error && <p className='error-message'>{error}</p>}
        </form>
      </div>
    </>
  );
}

export default Login;
