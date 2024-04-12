import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const HomeDB = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users")
        setUsers(result.data);
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <div className="table-responsive">
                    <table className="table border shadow">
                        <thead>
                            <tr>
                                <th scope="col">S.NO</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">PhoneNumber</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>
                                        <button className='btn btn-primary mx-2'>View</button>
                                        <Link className='btn btn-outline-primary mx-2'
                                         to={`/edituser/${user.id}`}
                                        >Edit</Link>
                                        <button className='btn btn-danger mx-2'>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default HomeDB;
