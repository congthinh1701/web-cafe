import React, { useState } from "react";
//import { useSelector } from "react-redux";
//import { useNavigate} from "react-router-dom";
//import firebase from 'firebase/compat/app';
import { getAuth,updateProfile } from "firebase/auth";

function Admin() {
  //const user = useSelector((state) => state.user);
  
 
// All data user
const auth = getAuth();
const user = auth.currentUser;

if (user !== null) {
  user.providerData.forEach((profile) => {
    // console.log("Sign-in provider: " + profile.providerId);
    // console.log("  Provider-specific UID: " + profile.uid);
    // console.log("  Name: " + profile.displayName);
    // console.log("  Email: " + profile.email);
    // console.log("  Photo URL: " + profile.photoURL);
     console.log(profile);
    
  });
}

const update=()=>{
  updateProfile(auth.currentUser, {
    displayName: "Thinh Luong",photoURL: "https://bizweb.dktcdn.net/thumb/large/100/351/580/products/product3-e48d6351-81a1-4cb4-86b8-be535e75c606.jpg?v=1555054876667"
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

  

  return (
    <div>
      <div >{auth.currentUser.displayName}</div>
      <button onClick={update}>updata</button>
    </div>
  );
}

export default Admin;
