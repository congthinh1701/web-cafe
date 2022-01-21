// import { Formik, FastField } from "formik";
import React, { useState } from "react";
import validator from "validator";
import { Button, Form, FormGroup, Input } from "reactstrap";
// import InputField from "./InputField";
// import SelectField from "./SelectField";
import Select from "react-select";
import useLocationForm from "./useLocationForm";

function FormAddress(props) {
  const { state, onCitySelect, onDistrictSelect, onWardSelect } =
    useLocationForm(false);
  //https://codesandbox.io/s/location-selects-frgql?file=/src/components/useLocationForm.js:216-245
  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard,
  } = state;

  const [emailError, setEmailError] = useState("");
  const [nameError,setNameError]=useState('')

  const handleChangeEmail = (e) => {
    var email = e.target.value;
    if (!validator.isEmail(email)) {
      setEmailError(`${email} không phải là email hợp lệ !`);
    } else {
      setEmailError("");
    }
  };
  const handleBlurEmail = (e) => {
    var email = e.target.value;
    if (!email) {
      setEmailError("Vui lòng nhập trường này !");
    }
  };
  const handleChangeName=(e)=>{
    const name=e.target.value
    
  }
  const handleBlurName=(e)=>{
    var name = e.target.value;
    console.log('dsad');
    if (!name) {
      setNameError("Vui lòng nhập trường này !");
    }
  }

  // console.log(cityOptions);
  const submit = (values) => {
    values.preventDefault();
    console.log(selectedCity, selectedDistrict);
  };

  return (
    <Form onSubmit={submit}>
      <FormGroup>
        <Input
          onChange={(e) => handleChangeEmail(e)}
          onBlur={(e) => handleBlurEmail(e)}
          name="email"
          type="email"
        />
        <span style={{ color: "red" }}>{emailError}</span>
        <Input
          onChange={(e)=>handleChangeName(e)}
          onBlur={(e)=>handleBlurName(e)}
          name="email"
          type="name"
          className="select"
        />
        <span style={{ color: "red" }}>{nameError}</span>
        <Select
          name="cityId"
          key={`cityId_${selectedCity?.value}`}
          isDisabled={cityOptions.length === 0}
          options={cityOptions}
          onChange={(option) => onCitySelect(option)}
          placeholder="Tỉnh/Thành"
          defaultValue={selectedCity}
          className="select"
        />
        <Select
          name="districtId"
          key={`districtId_${selectedDistrict?.value}`}
          isDisabled={districtOptions.length === 0}
          options={districtOptions}
          onChange={(option) => onDistrictSelect(option)}
          placeholder="Quận/Huyện"
          defaultValue={selectedDistrict}
          className="select"
        />
        <Select
          name="wardId"
          key={`wardId_${selectedWard?.value}`}
          isDisabled={wardOptions.length === 0}
          options={wardOptions}
          placeholder="Phường/Xã"
          onChange={(option) => onWardSelect(option)}
          defaultValue={selectedWard}
          className="select"
        />
      </FormGroup>
      <Button type="submit">fsdfsd</Button>
    </Form>
  );
}

export default FormAddress;
