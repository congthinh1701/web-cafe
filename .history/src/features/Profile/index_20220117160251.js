import React, { useRef, useState } from "react";
import "./style.scss";
//import { useSelector } from "react-redux";
//import { useNavigate} from "react-router-dom";
 import firebase from 'firebase/compat/app';
import { getAuth, updateProfile } from "firebase/auth";
import { Button, Modal } from "react-bootstrap";
import { firebaseConnect } from "../../firebase/firebaseConnect";
import { getStorage, ref, uploadBytes } from "@firebase/storage";

function Profile() {
  //const user = useSelector((state) => state.user);
  const [show, setShow] = useState(false);
  const [imageAsFile, setImageAsFile] = useState(null)
  const [imageAsUrl, setImageAsUrl] = useState('')

  const handleShow = () => {
    setShow(!show);
  };
  const handleClose = () => {
    setShow(false);
  };

  // All data user
  const auth = getAuth();
  const user = auth.currentUser;
  // console.log(user);
  if (user !== null) {
    user.providerData.forEach((profile) => {
      console.log(profile);
    });
  }
  const fileRef = useRef(); // value input avatar user
  const nameRef = useRef(); // value  inputname user
  const phoneRef = useRef(); // value input phone user
  

  // imgFile the Photo File.
  
  

  // update user
  const updateUser = () => {

    // upload avatar
    const storage = getStorage()
    const storageRef = ref(storage, `/images/${imageAsFile.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, imageAsFile)
    uploadBytes(storageRef, imageAsFile).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });

    const ref= firebaseConnect.storage.ref(`/images/${imageAsFile.name}`)
    const uploadTask = ref.put(imageAsFile)

    uploadTask.on("state_changed", console.log, console.error, () => {
      ref
        .getDownloadURL()
        .then((url) => {
          setImageAsFile(null);
          setImageAsUrl(url);
        });
    });
    console.log(imageAsUrl);




    updateProfile(auth.currentUser, {
      displayName: nameRef.current.value,
      phoneNumber:phoneRef.current.value,
      photoURL: fileRef.current.value,
    })
      .then(() => {
        // Profile updated!
        console.log(user.providerData);
        console.log(auth.currentUser.phoneNumber);
      })
      .catch((error) => {
        alert(error.message)
      });
    setShow(false);  
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
                <span>Number phone : </span>{data.phoneNumber}
              </p>
              <p></p>
              <Button className="button" onClick={handleShow}>
                <p>Edit profile</p>
              </Button>
              <Modal show={show}>
                <Modal.Header>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Update Profile
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ marginTop: "5px" }}>
                  <div className="form-group">
                    <label>Name :</label>
                    <input ref={nameRef} className="form-control" type="name" />
                  </div>
                  <div className="form-group">
                    <label>Phone :</label>
                    <input
                      ref={phoneRef}
                      className="form-control"
                      type="number"
                    />
                  </div>
                  <div className="form-group">
                    <label>Avatar :</label>
                    <input className="form-control" type="file" ref={fileRef} onChange={(e)=>{setImageAsFile(e.target.files[0])}} />
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={updateUser}>
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
