import React, { useState, useEffect } from "react";
import axios from "axios";
import RefetchButton from "./components/RefetchButton";
import Output from "./components/output/Output";
import CriteriaPaper from "./components/criteria/CriteriaPaper";
import Background from "./components/background/Background";
import imageEducation from "./img/education.jpg";
import imageRecreational from "./img/recreational.jpg";
import imageSocial from "./img/social.jpg";
import imageDiy from "./img/diy.jpg";
import imageCharity from "./img/charity.jpg";
import imageCooking from "./img/cooking.jpg";
import imageRelaxation from "./img/relaxation.jpg";
import imageMusic from "./img/music.jpg";
import imageBusywork from "./img/busywork.jpg";

function Container() {
  const [participants, setParticipants] = useState("1");
  const participantsRequest = `participants=${participants}`;

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

  var educationString = null;
  var recreationalString = null;
  var socialString = null;
  var diyString = null;
  var charityString = null;
  var cookingString = null;
  var relaxationString = null;
  var musicString = null;
  var busyworkString = null;

  var educationRequested = null;
  var recreationalRequested = null;
  var socialRequested = null;
  var diyRequested = null;
  var charityRequested = null;
  var cookingRequested = null;
  var relaxationRequested = null;
  var musicRequested = null;
  var busyworkRequested = null;

  if (state.education === true) {
    educationString = "&type=education";
    educationRequested = "Education";
  } else {
    educationString = "";
  }
  if (state.recreational === true) {
    recreationalString = "&type=recreational";
    recreationalRequested = "Recreational";
  } else {
    recreationalString = "";
  }
  if (state.social === true) {
    socialString = "&type=social";
    socialRequested = "Social";
  } else {
    socialString = "";
  }
  if (state.diy === true) {
    diyString = "&type=diy";
    diyRequested = "DIY";
  } else {
    diyString = "";
  }
  if (state.charity === true) {
    charityString = "&type=charity";
    charityRequested = "Charity";
  } else {
    charityString = "";
  }
  if (state.cooking === true) {
    cookingString = "&type=cooking";
    cookingRequested = "Cooking";
  } else {
    cookingString = "";
  }
  if (state.relaxation === true) {
    relaxationString = "&type=relaxation";
    relaxationRequested = "Relaxation";
  } else {
    relaxationString = "";
  }
  if (state.music === true) {
    musicString = "&type=music";
    musicRequested = "Music";
  } else {
    musicString = "";
  }
  if (state.busywork === true) {
    busyworkString = "&type=busywork";
    busyworkRequested = "Busy work";
  } else {
    busyworkString = "";
  }

  const typeRequest = `${educationString}${recreationalString}${socialString}${diyString}${charityString}${cookingString}${relaxationString}${musicString}${busyworkString}`;

  const [accessibilityValue, setAccessibilityValue] = useState([0, 100]);
  var accessibilityMin = accessibilityValue[0] / 100;
  var accessibilityMax = accessibilityValue[1] / 100;
  const accessibilityRequest = `&minaccessibility=${accessibilityMin}&maxaccessibility=${accessibilityMax}`;

  const [priceValue, setPriceValue] = useState([0, 100]);
  var priceMin = priceValue[0] / 100;
  var priceMax = priceValue[1] / 100;
  const priceRequest = `&minprice=${priceMin}&maxprice=${priceMax}`;

  const apiUrl = `https://www.boredapi.com/api/activity?${participantsRequest}${typeRequest}${accessibilityRequest}${priceRequest}`;

  const [refetch, setRefetch] = useState(0);
  const [responseData, setResponseData] = useState(null);
  const [backgroundPic, setBackgroundPic] = useState("");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(false);
    axios
      .get(apiUrl)
      .then((response) => {
        setResponseData(response.data);
        var type = response.data.type;
        if (type === "education") {
          setBackgroundPic(imageEducation);
        } else if (type === "recreational") {
          setBackgroundPic(imageRecreational);
        } else if (type === "social") {
          setBackgroundPic(imageSocial);
        } else if (type === "diy") {
          setBackgroundPic(imageDiy);
        } else if (type === "charity") {
          setBackgroundPic(imageCharity);
        } else if (type === "cooking") {
          setBackgroundPic(imageCooking);
        } else if (type === "relaxation") {
          setBackgroundPic(imageRelaxation);
        } else if (type === "music") {
          setBackgroundPic(imageMusic);
        } else if (type === "busywork") {
          setBackgroundPic(imageBusywork);
        }
      })
      .then(() => {
        setChecked(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [participants, state, accessibilityValue, priceValue, apiUrl, refetch]);

  return (
    <div>
      <div className="contents-container">
        <Output responseData={responseData} checked={checked} />
        <RefetchButton
          onClick={() => {
            setRefetch(refetch + 1);
          }}
        />
        <CriteriaPaper
          participants={participants}
          setParticipants={setParticipants}
          state={state}
          setState={setState}
          educationRequested={educationRequested}
          recreationalRequested={recreationalRequested}
          socialRequested={socialRequested}
          diyRequested={diyRequested}
          charityRequested={charityRequested}
          cookingRequested={cookingRequested}
          relaxationRequested={relaxationRequested}
          musicRequested={musicRequested}
          busyworkRequested={busyworkRequested}
          accessibilityValue={accessibilityValue}
          accessibilityMin={accessibilityMin}
          accessibilityMax={accessibilityMax}
          setAccessibilityValue={setAccessibilityValue}
          priceMin={priceMin}
          priceMax={priceMax}
          priceValue={priceValue}
          setPriceValue={setPriceValue}
        />
      </div>
      <Background
        backgroundPic={backgroundPic}
        checked={checked}
        responseData={responseData}
      />
    </div>
  );
}

export default Container;
