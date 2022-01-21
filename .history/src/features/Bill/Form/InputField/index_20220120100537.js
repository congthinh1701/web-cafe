

import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';


function InputField(props) {
    const {field,form,type,label,placeholder}=props
    const {name,value,onChange,onBlur}=field

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input name={name} id="title"/>
        </FormGroup>
    );
}

export default InputField;