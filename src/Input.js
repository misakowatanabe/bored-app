import React, { useState, useEffect } from "react";
import Participants from "./Participants";
import Type from "./Type";
import Accessibility from "./Accessibility";
import Price from "./Price";
import axios from "axios";

function Input() {
  const [participants, setParticipants] = useState("1");
  const handleParticipantsChange = (event) => {
    setParticipants(event.target.value);
  };

  const [state, setState] = useState({
    education: true,
    recreational: true,
    social: true,
    diy: true,
    charity: true,
    cooking: true,
    relaxation: true,
    music: true,
    busywork: true,
  });
  const handleTypeChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [accessibilityValue, setAccessibilityValue] = useState([0, 100]);
  const handleAccessibilityChange = (event, newAccessibilityValue) => {
    setAccessibilityValue(newAccessibilityValue);
  };

  const [priceValue, setPriceValue] = useState([0, 100]);
  const handlePriceChange = (event, newPriceValue) => {
    setPriceValue(newPriceValue);
  };

  const participantsRequest = `participants=${participants}`;

  var educationString = "";
  var recreationalString = "";
  var socialString = "";
  var diyString = "";
  var charityString = "";
  var cookingString = "";
  var relaxationString = "";
  var musicString = "";
  var busyworkString = "";
  if (state.education === true) {
    educationString = "&type=education";
  } else {
    educationString = "";
  }
  if (state.recreational === true) {
    recreationalString = "&type=recreational";
  } else {
    recreationalString = "";
  }
  if (state.social === true) {
    socialString = "&type=social";
  } else {
    socialString = "";
  }
  if (state.diy === true) {
    diyString = "&type=diy";
  } else {
    diyString = "";
  }
  if (state.charity === true) {
    charityString = "&type=charity";
  } else {
    charityString = "";
  }
  if (state.cooking === true) {
    cookingString = "&type=cooking";
  } else {
    cookingString = "";
  }
  if (state.relaxation === true) {
    relaxationString = "&type=relaxation";
  } else {
    relaxationString = "";
  }
  if (state.music === true) {
    musicString = "&type=music";
  } else {
    musicString = "";
  }
  if (state.busywork === true) {
    busyworkString = "&type=busywork";
  } else {
    busyworkString = "";
  }
  const typeRequest = 
  `${educationString}${recreationalString}${socialString}${diyString}${charityString}${cookingString}${relaxationString}${musicString}${busyworkString}`;

  var accessibilityMin = accessibilityValue[0] / 100;
  var accessibilityMax = accessibilityValue[1] / 100;
  const accessibilityRequest = `&minaccessibility=${accessibilityMin}&maxaccessibility=${accessibilityMax}`;

  var priceMin = priceValue[0] / 100;
  var priceMax = priceValue[1] / 100;
  const priceRequest = `&minprice=${priceMin}&maxprice=${priceMax}`;

  const apiUrl = `https://www.boredapi.com/api/activity?${participantsRequest}${typeRequest}${accessibilityRequest}${priceRequest}`;

  const [responseData, setResponseData] = useState("");

  useEffect(() => {
    
    console.log(apiUrl);

    axios
      .get(apiUrl)
      .then((response) => {
        setResponseData(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [participants, state, accessibilityValue, priceValue, apiUrl]);

  return (
    <div>
      <Participants value={participants} onChange={handleParticipantsChange} />
      <Type
        educationChecked={state.education}
        recreationalChecked={state.recreational}
        socialChecked={state.social}
        diyChecked={state.diy}
        charityChecked={state.charity}
        cookingChecked={state.cooking}
        relaxationChecked={state.relaxation}
        musicChecked={state.music}
        busyworkCchecked={state.busywork}
        onChange={handleTypeChange}
      />
      <Accessibility
        AccessibilityValue={accessibilityValue}
        onAccessibilityChange={handleAccessibilityChange}
      />
      <Price PriceValue={priceValue} onPriceChange={handlePriceChange} />
      <div>{responseData && JSON.stringify(responseData, null, 4)}</div>
    </div>
  );
}

export default Input;
