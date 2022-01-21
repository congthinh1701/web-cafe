import React, { useEffect, useState } from "react";
import axios from "axios";
import { PATHS } from "../../../../constants/paths";

const FETCH_TYPES = {
  CITIES: "FETCH_CITIES",
  DISTRICTS: "FETCH_DISTRICTS",
  WARDS: "FETCH_WARDS",
};

async function fectchLocationOptions(fetchType, locationid) {
  let url;
  switch (fetchType) {
    case FETCH_TYPES.CITIES: {
      url = PATHS.CITIES;
      break;
    }
    default: {
      return [];
    }
  }
  const locations = (await axios.get(url)).data["data"];
  return locations.map(({ id, name }) => ({ value: id, label: name }));
}
async function fetchInitialData()

function useLocationForm(props) {
    const [state, setState] = useState({
        cityOptions: [],
        districtOptions: [],
        wardOptions: [],
        selectedCity: null,
        selectedDistrict: null,
        selectedWard: null,
    });
    useEffect(() => {
        // First-load logic
    }, []);
 
    function onCitySelect(option) {
        // Logic khi chọn Tỉnh/Thành
    }
 
    function onDistrictSelect(option) {
        // Logic khi chọn Phường/Xã
    }
 
    function onWardSelect(option) {
        // Logic khi chọn Quận/Huyện
    }
    return {state, onCitySelect, onDistrictSelect, onWardSelect};
}

export default useLocationForm;
