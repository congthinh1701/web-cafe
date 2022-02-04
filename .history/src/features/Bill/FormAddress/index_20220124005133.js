// import { Formik, FastField } from "formik";
import React, { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
// import InputField from "./InputField";
// import SelectField from "./SelectField";
import Select from "react-select";
import useLocationForm from "./useLocationForm";
import ValidateForm from "./ValidateForm";
import { useDispatch } from "react-redux";
import { valueForm } from "../../../actions/form";


function FormAddress() {
  //https://codesandbox.io/s/location-selects-frgql?file=/src/components/useLocationForm.js:216-245
  const { state, onCitySelect, onDistrictSelect, onWardSelect } =
    useLocationForm(false);
  const dispatch = useDispatch();

  // fuction validate form
  const {
    stateValidate,
    value,
    handleChangeEmail,
    handleBlurEmail,
    handleChangeName,
    handleBlurName,
    handleBlurPhone,
    handleChangePhone,
    handleChangeAddress,
    handleBlurAddress,
  } = ValidateForm();

  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard,
  } = state;

  const { emailError, nameError, phoneError, addressError } = stateValidate;

  const submit = (values) => {
    values.preventDefault();
  };

  // transnit data go up parents component Bill

  const actionValue = valueForm(value);
  dispatch(actionValue)
  
  const actionError=errorForm

  return (
    <Form onSubmit={submit}>
      <FormGroup>
        <Input
          onChange={(e) => handleChangeEmail(e)}
          onBlur={(e) => handleBlurEmail(e)}
          name="email"
          type="email"
          placeholder="Vui lòng nhập email"
        />
        <span style={{ color: "red" }}>{emailError}</span>
        <Input
          onChange={(e) => handleChangeName(e)}
          onBlur={(e) => handleBlurName(e)}
          name="name"
          type="name"
          className="select"
          placeholder="Vui lòng nhập tên"
        />
        <span style={{ color: "red" }}>{nameError}</span>
        <Input
          onChange={(e) => handleChangePhone(e)}
          onBlur={(e) => handleBlurPhone(e)}
          name="number"
          type="number"
          className="select"
          placeholder="Vui lòng nhập số điện thoại"
        />
        <span style={{ color: "red" }}>{phoneError}</span>
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
        <Input
          onChange={(e) => handleChangeAddress(e)}
          onBlur={(e) => handleBlurAddress(e)}
          name="name"
          type="name"
          placeholder="Vui lòng nhập địa chỉ"
          className="select"
        />
        <span style={{ color: "red" }}>{addressError}</span>
        <div className="field__input-wrapper">
          <textarea
            name="note"
            id="note"
            type="text"
            className="field__input"
            data-bind="note"
            placeholder="ghi chu"
          ></textarea>
        </div>
      </FormGroup>
      <Button type="submit">fsdfsd</Button>
    </Form>
  );
}

export default FormAddress;
