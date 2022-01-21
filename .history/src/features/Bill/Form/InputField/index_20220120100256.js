

import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';


function InputField(props) {
    const {field,form}=pro
    return (
        <FormGroup>
            <Label for='emailId'>Email</Label>
            <Input name='title' id="title"/>
        </FormGroup>
    );
}

export default InputField;