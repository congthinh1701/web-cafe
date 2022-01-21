import React, { useState } from "react";
import { useSelector } from "react-redux";

function Admin() {
  const user = useSelector((state) => state.user);

  console.log(user);
  if (state.user.lenght === 0){
      console.log('chưa đăng nhập');
  }

  return (
    <div>
      <div>admin</div>
    </div>
  );
}

export default Admin;
