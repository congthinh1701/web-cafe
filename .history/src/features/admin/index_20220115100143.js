import React, { useState }  from "react";
import { useSelector } from "react-redux";

function Admin() {
  const user = useSelector((state) => state.user);
  const history=unstable_HistoryRouter()
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
