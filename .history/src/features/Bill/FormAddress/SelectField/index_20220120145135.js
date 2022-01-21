import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import Select from "react-select";
import useLocationForm from "../useLocationForm";


function SelectField(props) {
  const { field, form, options, type, label, placeholder } = props;
  const { name, value, onBlur } = field;
 
  
  const handleSelectOptionChange = (selectedOption) => {
      const selectedValue= selectedOption ? selectedOption.value : selectedOption
      lo
      const changeEvent= {
        target:{
            name:name,
            value:selectedValue
        }
    }
    field.onChange(changeEvent)
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
  const seletedOption=cityOptions.find(option=>option.value === value)
  
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Select
        name={name}
        id={name}
        type={type}
        value={seletedOption}
        onBlur={onBlur}
        onChange={handleSelectOptionChange}
        placeholder={placeholder}
        options={cityOptions}
      />
    </FormGroup>
  );
}

export default SelectField;
