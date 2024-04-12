import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"
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
import NavBarDB from './Components/databases/NavBarDB';
import HomeDB from './Components/databases/HomeDB';
import AddUser from './Components/pages/AddUser';
import EditUser from './Components/pages/EditUser'
function App() {
  return (
      <>
        <NavBar />
          {/* <NavBarDB/> */}
          {/* <AddUser/> */}
        <Routes>
          {/* <Route path='/homedb' element={<HomeDB />} />
          <Route path='/adduser' element={<AddUser />} />
          <Route path='/edituser/:id' element={<EditUser />} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dogadap' element={<Dogadap />} />
          <Route path='/catadap' element={<Catadap />} />
          <Route path='/pets' element={<Pets />} />
          <Route path='/add' element={<AddPet />} />
        </Routes>
      </>
  );
}

export default App;
