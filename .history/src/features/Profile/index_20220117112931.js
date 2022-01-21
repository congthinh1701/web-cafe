import React from "react";
import "./style.scss";
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




  

  return (
    <div>
      <div className="container">
        <div className="profile">
            <div className="profileAvatar">
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog' alt="anh" />
            </div>
            <div className="profileInformation">
              <p className="name">Thinh</p>
              <p className="customer">Khach hang</p>
              <p><span>User Id:</span> thinh</p>
              <p className="ma"><span>Email :</span>dhjashddasd</p>
              <p><span>Number phone:</span>123456789</p>
              <p></p>
              <button>Edit profile</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
