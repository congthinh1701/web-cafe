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

function useLocationForm(props) {
  return <div></div>;
}

export default useLocationForm;
