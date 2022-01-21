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
console.log(auth.currentUser.displayName);
  

  return (
    <div>
      <div >{auth.currentUser.displayName}</div>
      <button onClick={update}>updata</button>
    </div>
  );
}

export default Admin;
