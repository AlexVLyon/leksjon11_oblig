import React, { useEffect, useState } from 'react';
import Poll from '../components/Poll'
import axios from 'axios'

const api = axios.create({
  baseURL: `http://localhost:5000/user`
})


const NewUser = () => {
  const [charCount, setcharCount] = useState(0);
  const [formData, setFormData] = useState({epost:''});

  const handleSubmit = (event) => {
    event.preventDefault();

    const postData = {
        epost: formData.epost
    }
    createUser(postData);
  };

  const createUser = async (data) => {
    console.log(data)
   
    const res = await api.post('/', data ).catch((err) => {
        console.log("Err:", err);
      });

    console.log(res)
    window.location.href = "../";

  };


  const updateValue = (event) => {  
    const inputValue = { [event.target.name]: event.target.value };
      setFormData((prev) => ({
        ...prev,
        ...inputValue
      }));
  };

  return (
      <>
      <a href="../">back</a>

        <form onSubmit={handleSubmit}>

        <label>Epost:</label>
            <input
            className="inputFelt"
            value={formData.epost}
            name="epost"
            onChange={updateValue}
            autoFocus
            />
            <button id="createButton" type="submit">Create User</button>
        </form>
        
    </>
  );
};

export default NewUser;