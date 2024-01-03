import '../Assert/Css/register.css'
import { Link } from 'react-router-dom';
import '../Assert/Css/Signup.css';

function Signup(){
    return(
        <>
        <div className='signup-container'>
        <form className="container3 shadow3" onsubmit="register()" >
        <h3>SIGNUP</h3>
        <input type="text" name="" id="names" placeholder="Name" className="name-input3"/>
        <input type="email" name="" id="Email" placeholder="Email" className="name-input3"/>
        <input type="password" name="" id="pass1" placeholder="Password" className="name-input3"/>
        <input type="password" name="" id="pass2" placeholder="Confirm Password" className="name-input3"/>
        <input type="submit" value="SIGNUP" className="button-input3"/> 
        <span className="login-text">
            Already a user? <Link to="/login" className="login">Login</Link>
          </span>
        </form>
        </div>
        </>

    )
}
export default Signup;