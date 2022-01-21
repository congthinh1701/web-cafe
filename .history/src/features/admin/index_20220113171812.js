import React  from "react";
import { useSelector } from "react-redux";

function Admin() {
  const user = useSelector((state) => state.user);
  const [check,setCheck]=us
    //console.log(user.name);
  if (!user){
      console.log('chưa đăng nhập');
  }
  else{
      console.log('thanh cong');
  }

  return (
    <div>
      <div>admin</div>
    </div>
  );
}

export default Admin;
