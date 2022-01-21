import { Formik, Form, FastField } from "formik";
import React from "react";
import InputField from "./InputField";

function FormAddress(props) {
  const initialValues = {
    email: "",
  };
  return (
    <div>
      <Formik
      initialValues={initialValues}>
        {(formikProps) => {
          const { values, error, touched } = formikProps;
          console.log(values)
          return (
            <Form>
              <FastField
                name="email"
                component={InputField}
                label="Email"
                type="email"
                placeholder="Vui long nhap email"
              />
              <FastField
                name="Fphone"
                component={InputField}
                label="Phone"
                type="number"
                placeholder="Vui long nhap số phone"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default FormAddress;
