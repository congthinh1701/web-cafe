

import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';


function InputField(props) {
    const {field,form,type,label,placeholder}=props

    return (
        <FormGroup>
            {label && <Label for='emailId'>{label}</Label>}
            <Input name='title' id="title"/>
        </FormGroup>
    );
}

export default InputField;