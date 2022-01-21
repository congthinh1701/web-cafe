import React, { useState } from "react";
import validator from "validator";



function validateForm(props) {
    const [stateValidate,setState]=useState({
        emailError:'',
        nameError:'',
        phoneError:''
    })
    const handleChangeEmail = (e) => {
        var email = e.target.value;
        if (!validator.isEmail(email)) {
            setState({
                ...stateValidate,
                emailError: `${email} không phải là email hợp lệ !`
            })
        } else {
          setState({
              ...stateValidate,
              emailError:''
          })
        }
      };
      const handleBlurEmail = (e) => {
        var email = e.target.value;
        if (!email) {
          setState({
              ...stateValidate,
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
              ...stateValidate,
              nameError:'Vui lòng nhập trường này !'
          })
        } else {
          setState({
              ...stateValidate
          })
        }
      };
      const handleBlurPhone = (e) => {
        var number = e.target.value;
        if (!number) {
          setState({
              ...stateValidate,
              phoneError:"Vui lòng nhập trường này !"
          })
        }
      };
      const handleChangePhone = (e) => {
        var phone = e.target.value;
        if (phone.length < 10) {
          setState({
              ...stateValidate,
            phoneError:`${phone} không phải là số phone hợp lệ`
          })
        } else {
          setState({
              ...stateValidate
          })
        }
      };
    return {stateValidate,handleChangeEmail , handleBlurEmail ,handleChangeName ,handleBlurName ,handleBlurPhone ,handleChangePhone}
}

export default validateForm;