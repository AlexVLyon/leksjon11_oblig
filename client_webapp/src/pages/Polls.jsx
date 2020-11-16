import React, { useEffect, useState } from 'react';
import Poll from '../components/Poll'
import User from '../components/User'
import axios from 'axios'
import Title from '../components/Title'
const api = axios.create({
  baseURL: `http://localhost:5000/poll`
})

const Polls = () => {

  const [polls, setPolls] = useState([]);
  const [users, setUsers] = useState([]); 

  const [currUser, setCurrUser] = useState({id:"", epost:""});

  const setTheCurrentUser = (id, epost) => {
    setCurrUser({id:id, epost: epost});
  }

  const answearJa = async (id) => {
    if(currUser.id !== ""){
    const res = await api.patch(`/ja/${id}`, {"_id" : currUser.id});
    console.log(res)
    }
    else{
      alert("Choose user")
    }
   }

   const answearNei = async (id) => {
    if(currUser.id !== ""){
     const res = await api.patch(`/nei/${id}`, {"_id" : currUser.id});
    console.log(res)
    }
    else{
      alert("Choose user!")
    }
   }
 

    const listPolls = async () => {
      const res = await api.get('/').catch((err) => {
        console.log("Err:", err);
      });
      if (res && res.data) {
        setPolls(res.data);
        console.log(res.data)
      }
    };

    const listUsers = async () => {
      const res = await api.get('../user').catch((err) => {
        console.log("Err:", err);
      });
      if (res && res.data) {
        setUsers(res.data);
        console.log(res.data)
      }
    };
  
  
      useEffect(() => {
        listPolls();
        listUsers();
        console.log("Getting polls")
      }, []);
  
  return (
    <>
    <p>Current user: {currUser.epost}</p>
    
    <section>    


      <ul  id="pollList">
        {polls.map((poll) =>(
            <Poll poll={poll} answearJa = {answearJa} answearNei={answearNei}/>
            
            
        ))}

      </ul>

      <a href="/newpoll" id="newPoll">+</a>

      <Title title="Users"/>

      <a href="/user">Create User</a>

      <ul  id="userList">
        {users.map((user) =>(
            <User user={user} setTheCurrentUser = {setTheCurrentUser} />
        ))}
      </ul>

    </section>
    </>
  );
};

export default Polls;
