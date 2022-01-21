import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

function InputField(props) {
  const { field, form, type, label, placeholder } = props;
  const { name, value, onChange, onBlur } = field;
  const {error}
  return (
    <div>
      <FormGroup>
        {label && <Label>{label}</Label> }
        <Input
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          placeholder={placeholder}
        />
      </FormGroup>
    </div>
  );
}

export default InputField;
