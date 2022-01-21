import React  from "react";
import { useSelector } from "react-redux";

function Admin() {
  const user = useSelector((state) => state.user);
  const [check,setCheck]=useState(false)
    //console.log(user.name);
  if (user.name){
     
      setCheck(!check)
  }
  

  return (
    <div>
      <div>admin</div>
    </div>
  );
}

export default Admin;
