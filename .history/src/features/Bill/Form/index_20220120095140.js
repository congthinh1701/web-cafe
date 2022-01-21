

import { Formik } from 'formik';
import React from 'react';



function Form(props) {
    return (
        <div>
            <Formik>
                {(formikProps)=>{
                    const {values,error,touched}=formikProps
                    return (
                        <Form>

                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
}

export default Form;