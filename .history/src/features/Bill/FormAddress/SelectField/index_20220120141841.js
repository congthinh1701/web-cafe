import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import Select from "react-select";
import useLocationForm from "../useLocationForm";
function SelectField(props) {
  const { field, form, options, type, label, placeholder } = props;
  const { name, value, onBlur } = field;
  console.log(form)
  const handleSelectOptionChange = (selectedOption) => {
      const selectedValue= selectedOption ? selectedOption.value : selectedOption
  };
  const {
    state,
    onCitySelect,
    onDistrictSelect,
    onWardSelect,
    onSubmit
  } = useLocationForm(false);

  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard
  } = state;
  
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Select
        name={name}
        id={name}
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={handleSelectOptionChange}
        placeholder={placeholder}
        options={options}
      />
    </FormGroup>
  );
}

export default SelectField;
