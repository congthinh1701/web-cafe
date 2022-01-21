// import { Formik, FastField } from "formik";
import React from "react";
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
  const handleChange=(e)=>{
    console.log(e.)
  }
  // console.log(cityOptions);
  const submit=(values)=>{
    values.preventDefault()
     console.log(selectedCity,selectedDistrict);
  }

  return (
    <Form onSubmit={submit}>
      <FormGroup>
        <Input onChange={handleChange}/>
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
