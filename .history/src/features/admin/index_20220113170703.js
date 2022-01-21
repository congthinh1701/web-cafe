import React  from "react";
import { useSelector } from "react-redux";

function Admin() {
  const user = useSelector((state) => state.user);

  if (!user){
      console.log('chưa đăng nhập');
  }

  return (
    <div>
      <div>admin</div>
    </div>
  );
}

export default Admin;
