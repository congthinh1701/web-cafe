import { Formik, Form, FastField } from "formik";
import React from "react";
import InputField from "./InputField";

function FormAddress(props) {
  const initialValues = {
    email: "",
    password: "",
    EnterThePassword: "",
  };
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
                label="Email"
                type="email"
                placeholder="Vui long nhap email"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default FormAddress;
