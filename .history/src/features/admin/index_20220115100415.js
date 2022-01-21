import React, { useState }  from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Admin() {
  const user = useSelector((state) => state.user);
  const history=useNavigate()

  console.log(user);
  if (!user){
    history.replace("/")
  }
  

  return (
    <div>
      <div>admin</div>
    </div>
  );
}

export default Admin;
