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
updateProfile(auth.currentUser, {
  displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});
u
  

  return (
    <div>
      <div onClick={update}>adminfsdf</div>
    </div>
  );
}

export default Admin;
