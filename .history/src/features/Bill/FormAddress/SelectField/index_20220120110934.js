import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import Select from "react-select";
function SelectField(props) {
  const { field, form, type, label, placeholder } = props;
  const { name, value, onBlur } = field;
  
  const handleSelectOptionChange = (selectedOption) => {
      const selectedValue= selectedOption ? selectedOption.value : selectedOption
  };
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
        options={option}
      />
    </FormGroup>
  );
}

export default SelectField;
