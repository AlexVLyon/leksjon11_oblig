import React, { useEffect, useState } from 'react';
import Poll from '../components/Poll'
import axios from 'axios'
import Title from '../components/Title'

const api = axios.create({
  baseURL: `http://localhost:5000/poll`
})


const NewPoll = () => {
  const [formData, setFormData] = useState({question:''});

  const handleSubmit = (event) => {
    event.preventDefault();
    const sendData = formData
    const postData = {
        question: formData.question
    }
    createPoll(postData);
  };

  const createPoll = async (data) => {

    const res = await api.post('/', data ).catch((err) => {
        console.log("Err:", err);
      });

    console.log(res)
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
      <Title title = {"Create new poll:"} />
      <a href="../">back</a>



        <form onSubmit={handleSubmit}>

        <label>Question:</label>
            <input
            className="inputFelt"
            value={formData.name}
            name="question"
            onChange={updateValue}
            autoFocus
            />
            <button id="createButton" type="submit">Create Poll</button>)
        </form>
        
    </>
  );
};

export default NewPoll;