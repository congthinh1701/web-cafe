import React, { useState }  from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Admin() {
  const user = useSelector((state) => state.user);
  const history=useNavigate()

  
  if (!user){
    history("/")
    console.log(user);
  }
  

  return (
    <div>
      <div>admin</div>
    </div>
  );
}

export default Admin;
