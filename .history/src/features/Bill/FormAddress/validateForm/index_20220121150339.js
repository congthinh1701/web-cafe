import React, { useState } from "react";
import validator from "validator";



function validateForm(props) {
    const [state,setState]=useState({
        emailError:'',
        nameError:'',
        phoneError:''
    })
    const handleChangeEmail = (e) => {
        var email = e.target.value;
        if (!validator.isEmail(email)) {
            setState({
                ...state,
                emailError: `${email} không phải là email hợp lệ !`
            })
        } else {
          setState({
              ...state,
              emailError:''
          })
        }
      };
      const handleBlurEmail = (e) => {
        var email = e.target.value;
        if (!email) {
          setEmailError("Vui lòng nhập trường này !");
          setState({
              ...state,
              emailError:"Vui lòng nhập trường này !"
          })
        }
      };
      const handleChangeName = (e) => {
        const name = e.target.value;
      };
      const handleBlurName = (e) => {
        var name = e.target.value;
        if (!name) {
          setNameError("Vui lòng nhập trường này !");
        } else {
          setNameError("");
        }
      };
      const handleBlurPhone = (e) => {
        var number = e.target.value;
        if (!number) {
          setPhoneError("Vui lòng nhập trường này !");
        }
      };
      const handleChangePhone = (e) => {
        var phone = e.target.value;
        if (phone.length < 10) {
          setPhoneError(`${phone} không phải là số phone hợp lệ`);
        } else {
          setPhoneError("");
        }
      };
    console.log(state);
    return {state,handleChangeEmail , handleBlurEmail ,handleChangeName ,handleBlurName ,handleBlurPhone ,handleChangePhone}
}

export default validateForm;