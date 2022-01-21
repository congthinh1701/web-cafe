import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

function InputField(props) {
  const { field, form, type, label, placeholder } = props;
  const { name, value, onChange, onBlur } = field;
  const {errors,touched}=form
  // show when impact
  const showError = errors[name] && touched[name]
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
        {showError && <p></p>}
      </FormGroup>
    </div>
  );
}

export default InputField;
