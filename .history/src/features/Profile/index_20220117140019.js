import React, { useState } from "react";
import "./style.scss";
//import { useSelector } from "react-redux";
//import { useNavigate} from "react-router-dom";
// import firebase from 'firebase/compat/app';
import { getAuth, updateProfile } from "firebase/auth";
import { Button, Modal } from "react-bootstrap";

function Profile() {
  //const user = useSelector((state) => state.user);
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const handleClose=()=>{
    setShow(false)
  }

  // All data user
  const auth = getAuth();
  const user = auth.currentUser;
  // console.log(user);
  if (user !== null) {
    user.providerData.forEach((profile) => {
      console.log(profile);
    });
  }

  // update user
  const update = () => {
    updateProfile(auth.currentUser, {
      displayName: "Thinh Luong",
      photoURL:
        "https://lh3.googleusercontent.com/a/AATXAJyWkdjElc5BniNHsd_Fn_ITXHKUBvZkBAPx2az8=s96-c",
    })
      .then((r) => {
        // Profile updated!
        // ...
        console.log(auth.currentUser.displayName);
        console.log(user.providerData);
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  return (
    <div>
      <div className="container">
        {user.providerData.map((data, i) => (
          <div className="profile" key={i}>
            <div className="profileAvatar">
              <img src={data.photoURL} alt="anh" />
            </div>

            <div className="profileInformation">
              <p className="name">{data.displayName}</p>
              <p className="customer">Khach hang</p>
              <p>
                <span>User Id:</span> {data.uid}
              </p>
              <p className="email">
                <span>Email : </span>
                {data.email}
              </p>
              <p className="phone">
                <span>Number phone : </span>123456789
              </p>
              <p></p>
              <Button className="button" onClick={handleShow}>
                <p>Edit profile</p>
              </Button>
              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <i>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;