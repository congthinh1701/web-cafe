import React, { useState }  from "react";
import { useSelector } from "react-redux";

function Admin() {
  const user = useSelector((state) => state.user);
  console.log(user);
  

  return (
    <div>
      <div>admin</div>
    </div>
  );
}

export default Admin;
