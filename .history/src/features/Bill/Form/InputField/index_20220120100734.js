import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

function InputField(props) {
  const { field, form, type, label, placeholder } = props;
  const { name, value, onChange, onBlur } = field;

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        name={name}
        id={name}
        type=""
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </FormGroup>
  );
}

export default InputField;
