import { useEffect, useState } from "react";
import axios from "axios";
import { PATHS } from "../../../../constants/paths";

const FETCH_TYPES = {
  CITIES: "FETCH_CITIES",
  DISTRICTS: "FETCH_DISTRICTS",
  WARDS: "FETCH_WARDS",
};

async function fectchLocationOptions(fetchType, locationId) {
  let url;
  switch (fetchType) {
    case FETCH_TYPES.CITIES: {
      url = PATHS.CITIES;
      console.log( url)
      break;
    }
    case FETCH_TYPES.DISTRICTS: {
      url = `${PATHS.DISTRICTS}/${locationId}.json`;
      // console.log(url);
      break;
    }
    default: {
      return [];
    }
  }
  const locations = (await axios.get(url)).data["data"];
  return locations.map(({ id, name }) => ({ value: id, label: name }));
}

async function fetchInitialData() {
  const { cityId, districtId, wardId } = (await axios.get(PATHS.LOCATION)).data;

  const [cities, districts, wards] = await Promise.all([
    fectchLocationOptions(FETCH_TYPES.CITIES),
    fectchLocationOptions(FETCH_TYPES.DISTRICTS, cityId),
    fectchLocationOptions(FETCH_TYPES.WARDS, districtId)
  ]);
  return {
    cityOptions: cities,
    districtOptions: districts,
    wardOptions: wards,
    selectedCity: cities.find((c) => c.value === cityId),
    selectedDistrict: districts.find((d) => d.value === districtId),
    selectedWard: wards.find((w) => w.value === wardId),
  };
}

function useLocationForm(shouldFetchInitialLocation) {
  const [state, setState] = useState({
    cityOptions: [],
    districtOptions: [],
    wardOptions: [],
    selectedCity: null,
    selectedDistrict: null,
    selectedWard: null,
  });
  const { selectedCity, selectedDistrict } = state;

  useEffect(() => {
    (async function () {
      if (shouldFetchInitialLocation) {
        const initialData = await fetchInitialData();
        setState(initialData);
      } else {
        const options = await fectchLocationOptions(FETCH_TYPES.CITIES);
        setState({ ...state, cityOptions: options });
      }
    })();
  }, []);

  useEffect(() => {
    (async function () {
      if (!selectedCity) return;
      const options = await fectchLocationOptions(
        FETCH_TYPES.DISTRICTS,
        selectedCity.value
      );
      
      setState({ ...state, districtOptions: options });
    })();
  }, [selectedCity]);

  
  function onCitySelect(option) {
    // Logic khi chọn Tỉnh/Thành
    console.log(option,selectedCity);
    if (option !== selectedCity) {
      setState({
        ...state,
        districtOptions: [],
        wardOptions: [],
        selectedCity: option,
        selectedDistrict: null,
        selectedWard: null,
      });
    }
  }

  //   Logic khi chọn Phường/Xã
  function onDistrictSelect(option) {
    if (option !== selectedDistrict) {
      setState({
        ...state,
        wardOptions: [],
        selectedDistrict: option,
        selectedWard: null,
      });
    }
  }

  function onWardSelect(option) {
    // Logic khi chọn Quận/Huyện
  }
  return { state, onCitySelect, onDistrictSelect, onWardSelect };
}

export default useLocationForm;
