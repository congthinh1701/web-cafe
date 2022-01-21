import React, { useEffect, useState }  from "react";
import { useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";

function Admin() {
  //const user = useSelector((state) => state.user);
 
// All future sign-in request now include tenant ID.
const auth = getAuth();
const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;
  l

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
}
  
  

  return (
    <div>
      <div>adminfsdf</div>
    </div>
  );
}

export default Admin;
