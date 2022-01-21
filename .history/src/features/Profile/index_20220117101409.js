import React, { useRef} from "react";
//import { useSelector } from "react-redux";
//import { useNavigate} from "react-router-dom";
// import firebase from 'firebase/compat/app';
import { getAuth,updateProfile,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

function Profile() {
  //const user = useSelector((state) => state.user);
  
 
// All data user
const auth = getAuth();
const user = auth.currentUser;
//console.log(user.providerData);
if (user !== null) {
  user.providerData.forEach((profile) => {
     //console.log(profile);
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


const emailRef=useRef()
const passwordRef=useRef()

const dangnhap = async ()=>{
  try {
    const user =await signInWithEmailAndPassword(
      auth, 
      emailRef.current.value , 
      passwordRef.current.value)
      console.log(user);
  }
  catch(error){
    console.log(error.message)
  }
}

  

  return (
    <div>
      <div >{auth.currentUser.displayName}</div>
      <button onClick={update}>updata</button>
      <input ref={emailRef}  type="email" name="email"/>
      <input ref={passwordRef} type="password"/>
      <button onClick={dangnhap}>dang ky</button>
    </div>
  );
}

export default Profile;
