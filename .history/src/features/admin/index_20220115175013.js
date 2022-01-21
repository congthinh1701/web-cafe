import React, { useEffect, useState }  from "react";
import { useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import firebase from 'firebase/compat/app';

function Admin() {
  const user = useSelector((state) => state.user);
  const history=useNavigate()
  firebase.auth().tenantId = 'web-cafe-806eb';

// All future sign-in request now include tenant ID.
firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function(result) {
    // result.user.tenantId should be ‘TENANT_PROJECT_ID’.
    console.log(email);
  }).catch(function(error) {
    // Handle error.
  });
  
  

  return (
    <div>
      <div>adminfsdf</div>
    </div>
  );
}

export default Admin;
