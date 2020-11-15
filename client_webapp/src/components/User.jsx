import React from "react";
import Title from "./Title"

function User({ user, setTheCurrentUser}){
    return(
      <>
      <li className="user" key={user._id}>
        <Title title={user.name} />
        <p>id: {user._id}</p>
        <button className="setUserButton" onClick={ () => setTheCurrentUser(user._id)}>Set User</button>
      </li>
     </>
    )
  }

  export default User;