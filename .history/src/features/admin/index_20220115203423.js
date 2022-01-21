import React, { useRef, useState } from "react";
//import { useSelector } from "react-redux";
//import { useNavigate} from "react-router-dom";
import firebase from 'firebase/compat/app';
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
const email='congthinh123@gmail.com'
const password='123456'

const emailRef=useRef()
const passwordRef=useRef()

const dangky=  async ()=>{
  try {
    const user =await createUserWithEmailAndPassword(
      auth, 
      emailRef.current.value , 
      passwordRef.current.value)
  }
  catch(error){
    console.log(error)
  }
}

  

  return (
    <div>
      <div >{auth.currentUser.displayName}</div>
      <button onClick={update}>updata</button>
      <input ref={emailRef}  type="email" name="email"/>
      <input ref={passwordRef} type="password"/>
      <button onClick={dangky}>dang ky</button>
    </div>
  );
}

export default Admin;
