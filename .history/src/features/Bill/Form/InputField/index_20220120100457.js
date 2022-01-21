

import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';


function InputField(props) {
    const {field,form,type,label,placeholder}=props
    const {name,value}

    return (
        <FormGroup>
            {label && <Label for={}>{label}</Label>}
            <Input name='title' id="title"/>
        </FormGroup>
    );
}

export default InputField;