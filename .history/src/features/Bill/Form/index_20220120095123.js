

import { Formik } from 'formik';
import React from 'react';
import { valueContainerCSS } from 'react-select/dist/declarations/src/components/containers';


function Form(props) {
    return (
        <div>
            <Formik>
                {(formikProps)=>{
                    const {values,error,touched}=formikProps
                    return (
                        <Form
                    )
                }}
            </Formik>
        </div>
    );
}

export default Form;