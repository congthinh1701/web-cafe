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
    displayName: "Jane Q. User"
  }).then((r) => {
    // Profile updated!
    // ...
    console.log('fd');
  }).catch((error) => {
    // An error occurred
    // ...
  });
}
  

  return (
    <div>
      <div >adminfsdf</div>
      <button onClick={update}>updata</button>
    </div>
  );
}

export default Admin;
