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
      break;
    }
    case FETCH_TYPES.DISTRICTS: {
      url = `${PATHS.DISTRICTS}/${locationId}.json`;
      break;
    }
    case FETCH_TYPES.WARDS: {
      url = `${PATHS.WARDS}/${locationId}.json`;
      break;
    }
    default: {
      return [];
    }
  }
  const locations = (await axios.get(url)).data["data"];
  return locations.map(({ id, name }) => ({ value: id, label: name }));
}

//fectch all data

async function fetchInitialData() {
  const { cityId, districtId, wardId } = (await axios.get(PATHS.LOCATION)).data;

  const [cities, districts, wards] = await Promise.all([
    fectchLocationOptions(FETCH_TYPES.CITIES),
    fectchLocationOptions(FETCH_TYPES.DISTRICTS, cityId),
    fectchLocationOptions(FETCH_TYPES.WARDS, districtId),
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
  

    useEffect(()=>{

    }[])
  

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

  // khi city thay đổi
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

  useEffect(() => {
    (async function () {
      if (!selectedDistrict) return;
      const options = await fectchLocationOptions(
        FETCH_TYPES.WARDS,
        selectedDistrict.value
      );
      setState({ ...state, wardOptions: options });
    })();
  }, [selectedDistrict]);

  function onCitySelect(option) {
    // Logic khi chọn Tỉnh/Thành
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

  //   Logic  sleclt District
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

  // Logic  select Ward
  function onWardSelect(option) {
    setState({ ...state, selectedWard: option });
  }

  return { state, onCitySelect, onDistrictSelect, onWardSelect };
}

export default useLocationForm;