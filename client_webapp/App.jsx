import React, {useState, useEffect } from 'react';
import Routes from './src/routes/Routes';
import Poll from "./src/components/Poll"
import axios from 'axios'
import './src/index.css'



const api = axios.create({
  baseURL: `http://localhost:5000/poll`
})


const App = () => {

  //TODO: GLOBAL STATE

  
  

  return(
    <div className="App">
      <Routes/>
    </div> 
    
  );

}

export default App;
