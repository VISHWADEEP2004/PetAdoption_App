import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    let navigate=useNavigate();

    const {id}=useParams()

    const [user,setUser]=useState({
        username:"",
        email:"",
        password:""
    })
    const {username,email,password}=user

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    };
    
    useEffect(()=>{
        loadUser()
    },[])
    
    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`,user)
        navigate("/homedb")
    };

    const loadUser = async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data);
    }
    return (

        <div className="container">
            <form className="container2 shadow2" onSubmit={(e) => onSubmit(e)} >
                    <h3>Edit User</h3>
                    <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        className="name-input2"
                        name="username"
                        value={username}
                        onChange={(e)=>onInputChange(e)}
                    />
                    <input
                        type="text"
                        id="email"
                        placeholder="Email"
                        className="name-input2"
                        name="email"
                        value={email}
                        onChange={(e)=>onInputChange(e)}
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="name-input2"
                        name="password"
                        value={password}
                        onChange={(e)=>onInputChange(e)}
                    />
                    
                    <input type="submit" value="Submit" className="button-input2" />
                </form>
        </div>

    );
}
export default EditUser;