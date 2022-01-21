import React, { useEffect, useState } from "react";
import axios from "axios";

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
}

function useLocationForm(props) {
  return <div></div>;
}

export default useLocationForm;
