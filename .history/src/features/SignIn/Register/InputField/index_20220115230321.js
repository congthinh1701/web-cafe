import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

function InputField(props) {
  const { field, form, type, label, placeholder, disabled } = props;
  const { name, value, onChange, onBlur } = field;
  return (
    <div>
      <FormGroup>
        <Label>Email</Label>
        <Input
          name={name}
          id={name}
          value={value}
          placeholder="Vui long nhap email"
        />
      </FormGroup>
    </div>
  );
}

export default InputField;
