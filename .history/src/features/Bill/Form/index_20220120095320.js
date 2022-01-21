import { Formik, Form } from "formik";
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

              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Form;
