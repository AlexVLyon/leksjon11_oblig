import React, {useState} from "react";
import Title from "./Title"

function Poll({ poll ,answearJa, answearNei}){
  // TODO: BYTT TIL STATE, får "not iterable" når prøver på state på poll.jaVotes.length FIKSA :D Var et object som ikke skulle være der i polls
  // TODO: update når man trykker

  const [jaVotes, setJaVotes] = useState([...poll.jaVotes]);
  const [neiVotes, setNeiVotes] = useState([...poll.neiVotes]);
    //setJaVotes((prev) => [{ ...poll.jaVotes }, ...prev])
/*
  let amountJaVotes = 0;
  let amountNeiVotes = 0;
  let arrayOfJaVotes = poll.jaVotes;
  let arrayOfNeiVotes = poll.neiVotes;
  console.log( arrayOfJaVotes )


  if (arrayOfJaVotes  && arrayOfJaVotes.length > 0) {
    amountJaVotes = arrayOfJaVotes.length
    //setJaVotes((prev) => [{ ...arrayOfJaVotes }, ...prev]);
  }

  if (arrayOfNeiVotes  && arrayOfNeiVotes.length > 0) {
    amountNeiVotes = arrayOfNeiVotes.length
  }*/
  

    return(
      <>
      <li className="poll" key={poll._id}>
  
        <Title title={poll.question} />
        <button className="pollButton" onClick={ () => answearJa(poll._id)}>{poll.ja}</button><br/>
        <button className="pollButton" onClick={ () => answearNei(poll._id)}>{poll.nei}</button>
        <p>Answers:</p>
        <p> ja med state {jaVotes.length}</p>
        <p> nei med state {neiVotes.length}</p>
      </li>
     </>
    )
  }

  export default Poll;