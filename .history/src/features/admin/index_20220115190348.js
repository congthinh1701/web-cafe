import React, { useState } from "react";
//import { useSelector } from "react-redux";
//import { useNavigate} from "react-router-dom";
//import firebase from 'firebase/compat/app';
import { getAuth,updateProfile,createUserWithEmailAndPassword } from "firebase/auth";

function Admin() {
  //const user = useSelector((state) => state.user);
  
 
// All data user
const auth = getAuth();
const user = auth.currentUser;
if (user !== null) {
  user.providerData.forEach((profile) => {
     console.log(profile);
  });
}

// update user
const update=()=>{
  updateProfile(auth.currentUser, {
    displayName: "Thinh Luong"
  }).then((r) => {
    // Profile updated!
    // ...
    console.log(auth.currentUser.displayName);
    console.log(user.providerData);
  }).catch((error) => {
    // An error occurred
    // ...
  });
}
const email=congthinh123@gmail.com
const dangky=()=>{
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

  

  return (
    <div>
      <div >{auth.currentUser.displayName}</div>
      <button onClick={update}>updata</button>
      <button>onClick={dangky}</button>
    </div>
  );
}

export default Admin;
