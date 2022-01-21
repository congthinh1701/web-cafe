// import { Formik, FastField } from "formik";
import React from "react";
import { Form, FormGroup } from "reactstrap";
// import InputField from "./InputField";
// import SelectField from "./SelectField";
import Select from "react-select";
import useLocationForm from "./useLocationForm";

function FormAddress(props) {
  const { state, onCitySelect, onDistrictSelect, onWardSelect, onSubmit } =
    useLocationForm(false);

  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard,
  } = state;

  // console.log(cityOptions);

  return (
    
      <Form>
        <FormGroup>
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
          />
        </FormGroup>
      </Form>
    
  );
}

export default FormAddress;
