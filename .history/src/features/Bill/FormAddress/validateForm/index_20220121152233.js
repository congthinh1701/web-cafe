import React, { useState } from "react";
import validator from "validator";



function validateForm(props) {
    const [stateValidate,setStateValidate]= useState({
      emailError:'',
      nameError:'',
      phoneError:''
    })
    const handleChangeEmail = (e) => {
        var email = e.target.value;
        if (!validator.isEmail(email)) {
            setStateValidate({
                 ...stateValidate,
                emailError: `${email} không phải là email hợp lệ !`
            })
        } else {
          setStateValidate({
               ...stateValidate,
              emailError:''
          })
        }
      };
      const handleBlurEmail = (e) => {
        var email = e.target.value;
        if (!email) {
          setStateValidate({
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
          setStateValidate({
              ...stateValidate,
              nameError:'Vui lòng nhập trường này !'
          })
        } else {
          setStateValidate({
              ...stateValidate
          })
        }
      };
      const handleBlurPhone = (e) => {
        var number = e.target.value;
        if (!number) {
          setStateValidate({
               ...stateValidate,
              phoneError:"Vui lòng nhập trường này !"
          })
        }
      };
      const handleChangePhone = (e) => {
        var phone = e.target.value;
        if (phone.length < 10) {
          setStateValidate({
               ...stateValidate,
            phoneError:`${phone} không phải là số phone hợp lệ`
          })
        } else {
          setStateValidate({
               ...stateValidate
          })
        }
      };
    return {handleChangeEmail , handleBlurEmail ,handleChangeName ,handleBlurName ,handleBlurPhone ,handleChangePhone}
}

export default validateForm;