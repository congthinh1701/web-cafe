import "./style.scss";
import React, { useState } from "react";
import firebase from "firebase/compat/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Formik, Form, FastField } from "formik";
import InputField from "./InputField";
import * as Yup from "yup";
import { Button, FormGroup } from "reactstrap";
import { error } from "jquery";

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

  const auth = getAuth(); //firebase
  const [value,setValue]=useState()
  

  const submitRegister = () => {
    console.log("hdjsahd");
  };


  const initialValues = {
    email: "",
    password: "",
    EnterThePassword: "",
  };

  // Validate form
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(" Trường này phải là email !")
      .required("Bắt buộc nhập trường này !"),
    password: Yup.string().required("Bắt buộc nhập trường này !").min(6),
    EnterThePassword: Yup.string().when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
  });

  return (
    <div>
      <div className="container">
        <div className="title-page">ĐĂNG KÝ TÀI KHOẢN</div>
        <div className="title-head">ĐĂNG KÝ TÀI KHOẢN</div>

        <Formik
          initialValues={initialValues}
          //createUserWithEmailAndPassword go up data fireabse
          //Register user
          onSubmit={(values) => async () => {
            console.log(value)
            try {
              const user = await createUserWithEmailAndPassword(
                auth,
                value.email,
                value.password
              );
              console.log(user);
            } catch (error) {
              alert(error.message);
            }
          }}
          validationSchema={validationSchema}
        >
          {(formikProps) => {
            const { values, errors, touched } = formikProps;
            setValue(values)
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
                <FormGroup>
                  <Button type="submit" className="button" >
                    Đăng ký
                  </Button>
                </FormGroup>
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
