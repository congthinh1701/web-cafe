import React  from "react";
import { useSelector } from "react-redux";

function Admin() {
  const user = useSelector((state) => state.user);
  const [check,setCheck]=useState(false)
    //console.log(user.name);
  if (user.name){
      console.log('chưa đăng nhập');
      setCheck(!)
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
