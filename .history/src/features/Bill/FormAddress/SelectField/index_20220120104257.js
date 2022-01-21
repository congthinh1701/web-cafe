import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

function SelectField(props) {
  const { field, form, type, label, placeholder } = props;
  const { name, value, onChange, onBlur } = field;
    const handleSelectOptionChange =()=>{

} 
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        name={name}
        id={name}
        type={type}
        value={value}
        onChange={handleSelectOptionChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </FormGroup>
  );
}

export default SelectField;
