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
    displayName: "Thinh Luong",photoURL: "data:image/jpeg;base64,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"
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
