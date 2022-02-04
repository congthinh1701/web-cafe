import { useState } from "react";
import validator from "validator";



function ValidateForm() {
    const [stateValidate,setStateValidate]= useState({
      emailError:'',
      nameError:'',
      phoneError:'',
      addressError:''
    })
    const [value,setValue]=useState({
      email:'',
      name:''
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
        if (name){
          setStateValidate({
            ...stateValidate,
            nameError:''
          })
        }
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
              ...stateValidate,
              nameError:''
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
               ...stateValidate,
               phoneError:''
          })
        }
      };
      const handleChangeAddress =(e)=>{
        var address = e.target.value;
        if(address){
          setStateValidate({
            ...stateValidate,
            addressError:''
          })
        }
      }
      const handleBlurAddress =(e)=>{
        var address = e.target.value;
        if (!address) {
          setStateValidate({
               ...stateValidate,
               addressError:"Vui lòng nhập trường này !"
          })
        }
        else {
          setStateValidate({
               ...stateValidate,
               addressError:''
          })
        }
      }
    return { stateValidate,handleChangeEmail , handleBlurEmail ,handleChangeName ,handleBlurName ,handleBlurPhone ,handleChangePhone,handleChangeAddress ,handleBlurAddress }
}

export default ValidateForm;