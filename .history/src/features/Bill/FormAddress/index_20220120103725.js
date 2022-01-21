import { Formik, Form, FastField } from "formik";
import React from "react";
import InputField from "./InputField";

function FormAddress(props) {
  const initialValues = {
    name:"",
    email: "",
    phone:null
  };
  return (
    <div>
      <Formik initialValues={initialValues}>
        {(formikProps) => {
          const { values, error, touched } = formikProps;
          console.log(values,error);
          return (
            <Form>
              <FastField
                name="name"
                component={InputField}
                type="name"
                placeholder="Vui lòng nhập tên"
              />
              <FastField
                name="email"
                component={InputField}
                type="email"
                placeholder="Vui long nhap email"
              />
              <FastField
                name="phone"
                component={InputField}
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
