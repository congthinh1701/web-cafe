import { Formik, Form, FastField } from "formik";
import React from "react";

function FormAddress(props) {
  return (
    <div>
      <Formik>
        {(formikProps) => {
          const { values, error, touched } = formikProps;
          return (
            <Form>
              <FastField 
                name="email"
                component={InputField}

                label
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default FormAddress;
