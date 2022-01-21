import React, { useRef} from "react";
import '/style.scss'
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
        <div className="profile">
            <div className="profileAvatar">
              <img src='https://bizweb.dktcdn.net/thumb/large/100/351/580/products/product3-e48d6351-81a1-4cb4-86b8-be535e75c606.jpg?v=1555054876667' alt="anh" />
            </div>
            <div className="profileInformation">
              <p className="name">Thinh</p>
              <p><span>Email :</span>dhjashddasd</p>
              <p><span>Number phone:</span>123456789</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
