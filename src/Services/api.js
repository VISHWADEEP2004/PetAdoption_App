import axios from 'axios';

const URL = 'http://localhost:3000';

const getuser = () => axios.get(`${URL}/users`);
const getuserId = (id) => axios.get(`${URL}/users/${id}`);
const addPet = (data) => axios.post(`${URL}/users`, data); // Changed function name to addPet
const edituser = (id, data) => axios.put(`${URL}/users/${id}`, data);
const deleteuser = (id) => axios.delete(`${URL}/users/${id}`);

export {
  getuser,
  getuserId,
  addPet,
  edituser,
  deleteuser
};
