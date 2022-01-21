import { Formik, Form, FastField } from "formik";
import React from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import useLocationForm from "./useLocationForm";


function FormAddress(props) {
  const {
    state,

    onDistrictSelect,
    onWardSelect,
    onSubmit
  } = useLocationForm(false);

  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard
  } = state;
  
  console.log(cityOptions);
  const initialValues = {
    name:"",
    email: "",
    phone:'',
    TP:null,
    
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
              <FastField
                name="TP"
                component=`{SelectField}`
                
                placeholder="Tỉnh/Thành"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default FormAddress;
