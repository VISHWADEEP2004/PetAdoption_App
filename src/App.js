import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Signup from './Components/Signup';
import Catadap from './Components/Catadap';
import Pets from './Components/Pets';
import Dogadap from './Components/Dogadap';
import AddPet from './Components/Addpet';
import { ThemeProvider, useTheme } from './Components/Themecontest';

function ThemeComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dogadap' element={<Dogadap />} />
          <Route path='/catadap' element={<Catadap />} />
          <Route path='/pets' element={<Pets />} />
          <Route path='/add' element={<AddPet />} />
        </Routes>
        <ThemeComponent />
      </>
    </ThemeProvider>
  );
}

export default App;
