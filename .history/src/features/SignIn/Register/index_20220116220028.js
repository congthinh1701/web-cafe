import "./style.scss";
import firebase from "firebase/compat/app";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Formik, Form, FastField } from "formik";
import InputField from "./InputField";
import * as Yup from "yup"

function Register() {
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "redirect", //điều hướng đến phương thức đăng nhập

    signInSuccessUrl: "/Profile", // success login directional home
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
  };

  const submitRegister = () => {
    console.log("hdjsahd");
  };

  const initialValues = {
    email: "",
    password: "",
    EnterThePassword: "",
  };

  const validationSchema=Yup.object().shape({
    email:yup.string().email(' Trường này phải là email !'),
    password:yup.string().required('This')
  })

  return (
    <div>
      <div className="container">
        <div className="title-page">ĐĂNG KÝ TÀI KHOẢN</div>
        <div className="title-head">ĐĂNG KÝ TÀI KHOẢN</div>

        <Formik initialValues={initialValues}>
          {(formikProps) => {
            const { values, errors, touched } = formikProps;
            console.log({ values, errors, touched });
            return (
              <Form>
                <FastField
                  name="email"
                  component={InputField}
                  label="Email"
                  type="email"
                  placeholder="Vui long nhap email"
                  className="form"
                />
                <FastField
                  name="password"
                  component={InputField}
                  label="Password"
                  type="password"
                  placeholder="Vui long nhap password"
                />
                <FastField
                  name="EnterThePassword"
                  component={InputField}
                  label="Enter the password"
                  type="password"
                  placeholder="Nhập lại password"
                />
              </Form>
            );
          }}
        </Formik>
        <button className="button" onClick={submitRegister}>
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
    </div>
  );
}
export default Register;
