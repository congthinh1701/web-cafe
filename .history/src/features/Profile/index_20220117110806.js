import React, { useRef} from "react";
//import { useSelector } from "react-redux";
//import { useNavigate} from "react-router-dom";
// import firebase from 'firebase/compat/app';
import { getAuth,updateProfile} from "firebase/auth";

function Profile() {
  //const user = useSelector((state) => state.user);
  
 
// All data user
const auth = getAuth();
const user = auth.currentUser;
//console.log(user.providerData);
if (user !== null) {
  user.providerData.forEach((profile) => {
     console.log(profile);
  });
}

// update user
const update=()=>{
  updateProfile(auth.currentUser, {
    displayName: "Thinh Luong",photoURL:'https://lh3.googleusercontent.com/a/AATXAJyWkdjElc5BniNHsd_Fn_ITXHKUBvZkBAPx2az8=s96-c'
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


const emailRef=useRef()
const passwordRef=useRef()



  

  return (
    <div>
      <div className="container">
        
      </div>
    </div>
  );
}

export default Profile;
