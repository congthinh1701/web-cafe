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
          setState({
              ...state,
              nameError:'Vui lòng nhập trường này !'
          })
        } else {
          setState({
              ...state
          })
        }
      };
      const handleBlurPhone = (e) => {
        var number = e.target.value;
        if (!number) {
          setState({
              ...state,
              phoneError:"Vui lòng nhập trường này !"
          })
        }
      };
      const handleChangePhone = (e) => {
        var phone = e.target.value;
        if (phone.length < 10) {
          setState({
              ...state,
            phoneError:`${phone} không phải là số phone hợp lệ`
          })
        } else {
          setPhoneError("");
          setState({
              ...state
          })
        }
      };
    console.log(state);
    return {state,handleChangeEmail , handleBlurEmail ,handleChangeName ,handleBlurName ,handleBlurPhone ,handleChangePhone}
}

export default validateForm;