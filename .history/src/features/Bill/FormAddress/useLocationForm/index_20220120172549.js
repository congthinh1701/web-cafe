import React, { useEffect, useState } from "react";
import axios from "axios";
import { PATHS } from "../../../../constants/paths";

const FETCH_TYPES = {
    CITIES: "FETCH_CITIES",
    DISTRICTS: "FETCH_DISTRICTS",
    WARDS: "FETCH_WARDS"
  };
  
  async function fetchLocationOptions(fetchType, locationId) {
    let url;
    
    switch (fetchType) {
      case FETCH_TYPES.CITIES: {
        url = PATHS.CITIES;
        console.log("url",url)
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
  
  async function fetchInitialData() {
    const { cityId, districtId, wardId } = (await axios.get(PATHS.LOCATION)).data;
   
    const [cities, districts, wards] = await Promise.all([
      fetchLocationOptions(FETCH_TYPES.CITIES),
      fetchLocationOptions(FETCH_TYPES.DISTRICTS, cityId),
      fetchLocationOptions(FETCH_TYPES.WARDS, districtId)
    ]);
    console.log('cities',cities)
    return {
      cityOptions: cities,
      districtOptions: districts,
      wardOptions: wards,
      selectedCity: cities.find((c) => c.value === cityId),
      selectedDistrict: districts.find((d) => d.value === districtId),
      selectedWard: wards.find((w) => w.value === wardId)
    };
  }
  
  function useLocationForm(shouldFetchInitialLocation) {
    const [state, setState] = useState({
      cityOptions: [],
      districtOptions: [],
      wardOptions: [],
      selectedCity: null,
      selectedDistrict: null,
      selectedWard: null
    });
  
    const { selectedCity, selectedDistrict } = state;
  
    useEffect(() => {
      (async function () {
        if (shouldFetchInitialLocation) {
          const initialData = await fetchInitialData();
          setState(initialData);
        } else {
          const options = await fetchLocationOptions(FETCH_TYPES.CITIES);
          console.log('options',options)
          setState({ ...state, cityOptions: options });
        }
      })();
    }, []);
  
    useEffect(() => {
      (async function () {
        if (!selectedCity) return;
        const options = await fetchLocationOptions(
          FETCH_TYPES.DISTRICTS,
          selectedCity.value
        );
        
        setState({ ...state, districtOptions: options });
      })();
    }, [selectedCity]);
  
    useEffect(() => {
      (async function () {
        if (!selectedDistrict) return;
        const options = await fetchLocationOptions(
          FETCH_TYPES.WARDS,
          selectedDistrict.value
        );
        setState({ ...state, wardOptions: options });
      })();
    }, [selectedDistrict]);
  
    function onCitySelect(option) {
      if (option !== selectedCity) {
        setState({
          ...state,
          districtOptions: [],
          wardOptions: [],
          selectedCity: option,
          selectedDistrict: null,
          selectedWard: null
        });
      }
    }
  
    function onDistrictSelect(option) {
      if (option !== selectedDistrict) {
        setState({
          ...state,
          wardOptions: [],
          selectedDistrict: option,
          selectedWard: null
        });
      }
    }
  
    function onWardSelect(option) {
      setState({ ...state, selectedWard: option });
    }
  
    function onSubmit(e) {
      e.preventDefault();
      window.location.reload();
    }
  
    return { state, onCitySelect, onDistrictSelect, onWardSelect, onSubmit };
  }
  
  export default useLocationForm;
  