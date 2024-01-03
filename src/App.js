import Login from "./Components/Login";
import './Assert/Css/App.css'
import NavBar from './Components/Navbar';
import Register from "./Components/Register";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import {Route,Routes} from 'react-router-dom';
import Catadap from "./Components/Catadap";
import Pets from "./Components/Pets";
import Dashboard from "./Components/Dashboard";
import Dogadap from "./Components/Dogadap";
import AddPet from "./Components/Addpet";
function App() {
  return (
    <>
        <NavBar />
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/dogadap' element={<Dogadap/>}/>
      <Route path='/catadap' element={<Catadap/>}/>
      <Route path='/pets' element={<Pets/>}/>
      <Route path='/add' element={<AddPet />} />
    </Routes>
    

    </>
  );
}

export default App;
