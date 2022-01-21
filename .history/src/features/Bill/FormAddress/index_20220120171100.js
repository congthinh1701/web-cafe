import { Formik, FastField } from "formik";
import React from "react";
import { Form, FormGroup } from "reactstrap";
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
  
  // console.log(cityOptions);
  
  return (
    <div>
        <Form>
          <FormGroup>
            
          </FormGroup>
        </Form>
    </div>
  );
}

export default FormAddress;
