import React, { useState }  from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Admin() {
  const user = useSelector((state) => state.user);
  const history=useHistory()

  console.log(user);
  if (!user){

  }
  

  return (
    <div>
      <div>admin</div>
    </div>
  );
}

export default Admin;
