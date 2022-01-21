import React, { useState }  from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Admin() {
  const user = useSelector((state) => state.user);
  const history=useNavigate()

  
  if (!user){
    history("/Login")
    console.log('chua dang nhap');
  }
  else{
    history("/Admin")
    console.log('đang nhap thanh cong');
  }
  

  return (
    <div>
      <div>adminfsdf</div>
    </div>
  );
}

export default Admin;
