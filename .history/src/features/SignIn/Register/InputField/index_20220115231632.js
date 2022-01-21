import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

function InputField(props) {
  const { field, form, type, label, placeholder } = props;
  const { name, value, onChange, onBlur } = field;
  return (
    <div>
      <FormGroup>
        <Label>Email</Label>
        {label && }
        <Input
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          type="email"
          placeholder="Vui long nhap email"
        />
      </FormGroup>
    </div>
  );
}

export default InputField;