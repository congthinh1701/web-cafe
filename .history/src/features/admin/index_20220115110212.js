import React, { useEffect, useState }  from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Admin() {
  const user = useSelector((state) => state.user);
  const history=useNavigate()
  useEffect(() => {
    if (user){
      history("/Admin")
      console.log('chua dang nhap');
    }
    e
    else{
      history("/Login")
      console.log('đang nhap thanh cong');
    }
    
  }, []) 
  
  

  return (
    <div>
      <div>adminfsdf</div>
    </div>
  );
}

export default Admin;
