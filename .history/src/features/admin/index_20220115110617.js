import React, { useEffect, useState }  from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function Admin() {
  const user = useSelector((state) => state.user);
  const history=useNavigate()
  const params = useParams()
  console.log(params);
  

  return (
    <div>
      <div>adminfsdf</div>
    </div>
  );
}

export default Admin;
