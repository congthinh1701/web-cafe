

import React from 'react';
import { FormGroup, Label } from 'reactstrap';


function InputField(props) {
    return (
        <FormGroup>
            <Label for='emailId'>Email<Label/>
            <Input name='title' id="t"/>
        </FormGroup>
    );
}

export default InputField;