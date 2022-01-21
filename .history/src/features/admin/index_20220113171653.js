import React  from "react";
import { useSelector } from "react-redux";

function Admin() {
  const user = useSelector((state) => state.user);
    //console.log(user.name);
  if (!user){
      console.log('chưa đăng nhập');
  }
  e

  return (
    <div>
      <div>admin</div>
    </div>
  );
}

export default Admin;
