import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

function InputField(props) {
  return (
    <div>
      <FormGroup>
        <Label>Email</Label>
        <Input name="email" id=/>
      </FormGroup>
    </div>
  );
}

export default InputField;