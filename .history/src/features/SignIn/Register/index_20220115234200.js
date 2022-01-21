import "./style.scss";
import firebase from "firebase/compat/app";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Formik,Form, FastField } from "formik";
import { FormGroup } from "reactstrap";
import InputField from "./InputField"

function Register() {
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "redirect", //điều hướng đến phương thức đăng nhập

    signInSuccessUrl: "/Admin", // success login directional home
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
  };
  

  const submitRegister = () => {
    console.log("hdjsahd");
  };
  
  const initialValues={
    email:'',
    password:''
  }

  return (
    <div>
      <div className="container">
     
        <div className="title-page">ĐĂNG KÝ TÀI KHOẢN</div>
        <div className="title-head">ĐĂNG KÝ TÀI KHOẢN</div>
        <div className="from-group">
          <label>Email:</label>
          <input className="form-control" />
        </div>
        <div className="from-group">
          <label>Mật khẩu:</label>
          <input className="form-control" />
          <span className="message"></span>
        </div>
        <div className="from-group">
          <label>Nhập lại mật khẩu:</label>
          <input className="form-control" />
        </div>
        <button className="button" onClick={submit}>
          Đăng ký
        </button>

        <div className="sign-in">
          <div className="title-text">Đăng nhập bằng Facebook hoặc Google</div>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      </div>

      <Formik
      initialValues={initialValues}>
        {(formikProps) => {
          const {values,errors,touched}=formikProps
          console.log({values,errors,touched})
          return (
            <Form>
              <FastField
                name="email"
                component={ InputField }

                label="Email"
                type="email"
                placeholder="Vui long nhap email" 
              />
              <FastField
                name="password"
                component={ InputField }

                label="Password"
                type="password"
                placeholder="Vui long nhap email"
              />
              <FormGroup >
                <label>Email:</label>
                <input className="form-control"  />
              </FormGroup>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
export default Register;
