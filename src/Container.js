import React, { useState, useEffect } from "react";
import ErrorMessage from "./Presentational/ErrorMessage";
import LinkMessage from "./Presentational/LinkMessage";
import RefetchButton from "./Presentational/RefetchButton";
import Accordion1 from "./Presentational/Accordion-1";
import Accordion2 from "./Presentational/Accordion-2";
import Accordion3 from "./Presentational/Accordion-3";
import Accordion4 from "./Presentational/Accordion-4";
import axios from "axios";
import imageEducation from "./img/education.jpg";
import imageRecreational from "./img/recreational.jpg";
import imageSocial from "./img/social.jpg";
import imageDiy from "./img/diy.jpg";
import imageCharity from "./img/charity.jpg";
import imageCooking from "./img/cooking.jpg";
import imageRelaxation from "./img/relaxation.jpg";
import imageMusic from "./img/music.jpg";
import imageBusywork from "./img/busywork.jpg";
import error from "./img/error.jpg";
import SchoolIcon from "@material-ui/icons/School";
import BrushIcon from "@material-ui/icons/Brush";
import BuildIcon from "@material-ui/icons/Build";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import GroupIcon from "@material-ui/icons/Group";
import LocalPizzaIcon from "@material-ui/icons/LocalPizza";
import SpaIcon from "@material-ui/icons/Spa";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import FavoriteIcon from "@material-ui/icons/Favorite";

function Container() {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [participants, setParticipants] = useState("1");
  const handleParticipantsChange = (event) => {
    setParticipants(event.target.value);
  };

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

  const handleTypeChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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
    educationString = null;
  }
  if (state.recreational === true) {
    recreationalString = "&type=recreational";
    recreationalRequested = "Recreational";
  } else {
    recreationalString = null;
  }
  if (state.social === true) {
    socialString = "&type=social";
    socialRequested = "Social";
  } else {
    socialString = null;
  }
  if (state.diy === true) {
    diyString = "&type=diy";
    diyRequested = "DIY";
  } else {
    diyString = null;
  }
  if (state.charity === true) {
    charityString = "&type=charity";
    charityRequested = "Charity";
  } else {
    charityString = null;
  }
  if (state.cooking === true) {
    cookingString = "&type=cooking";
    cookingRequested = "Cooking";
  } else {
    cookingString = null;
  }
  if (state.relaxation === true) {
    relaxationString = "&type=relaxation";
    relaxationRequested = "Relaxation";
  } else {
    relaxationString = null;
  }
  if (state.music === true) {
    musicString = "&type=music";
    musicRequested = "Music";
  } else {
    musicString = null;
  }
  if (state.busywork === true) {
    busyworkString = "&type=busywork";
    busyworkRequested = "Busy work";
  } else {
    busyworkString = null;
  }

  const typeRequest = `${educationString}${recreationalString}${socialString}${diyString}${charityString}${cookingString}${relaxationString}${musicString}${busyworkString}`;

  const [accessibilityValue, setAccessibilityValue] = useState([0, 100]);
  const handleAccessibilityChange = (event, newAccessibilityValue) => {
    setAccessibilityValue(newAccessibilityValue);
  };

  var accessibilityMin = accessibilityValue[0] / 100;
  var accessibilityMax = accessibilityValue[1] / 100;
  const accessibilityRequest = `&minaccessibility=${accessibilityMin}&maxaccessibility=${accessibilityMax}`;

  const [priceValue, setPriceValue] = useState([0, 100]);
  const handlePriceChange = (event, newPriceValue) => {
    setPriceValue(newPriceValue);
  };

  var priceMin = priceValue[0] / 100;
  var priceMax = priceValue[1] / 100;
  const priceRequest = `&minprice=${priceMin}&maxprice=${priceMax}`;

  const apiUrl = `https://www.boredapi.com/api/activity?${participantsRequest}${typeRequest}${accessibilityRequest}${priceRequest}`;

  const [refetch, setRefetch] = useState(0);

  const [responseData, setResponseData] = useState(null);

  const [backgroundPic, setBackgroundPic] = useState(null);

  useEffect(() => {
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
      .catch((error) => {
        console.log(error);
      });
  }, [participants, state, accessibilityValue, priceValue, apiUrl, refetch]);

  return (
    <div>
      {!responseData && !backgroundPic ? null : (
        <div>
          <div className="contents-container">
            {!responseData.activity ? (
              <ErrorMessage />
            ) : (
              <div className="text-container">
                <div className="text" key={responseData.key}>
                  {!responseData && !backgroundPic ? null : (
                    <div>
                      <div className="subText">Feeling bored?</div>
                      <div className="mainText">{responseData.activity}</div>
                      {!responseData.link ? null : (
                        <LinkMessage href={responseData.link}>
                          {responseData.link}
                        </LinkMessage>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
            <RefetchButton onClick={() => setRefetch(refetch + 1)} />
            <div className="accordion-container">
              <div>
                <Accordion1
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  value={participants}
                  handleParticipantsChange={handleParticipantsChange}
                >
                  {participants}
                </Accordion1>
                <Accordion2
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                  handleTypeChange={handleTypeChange}
                  educationChecked={state.education}
                  recreationalChecked={state.recreational}
                  socialChecked={state.social}
                  diyChecked={state.diy}
                  charityChecked={state.charity}
                  cookingChecked={state.cooking}
                  relaxationChecked={state.relaxation}
                  musicChecked={state.music}
                  busyworkCchecked={state.busywork}
                >
                  {!educationRequested ? null : (
                    <span className="selectionChip">
                      <SchoolIcon className="typeSelectionIcons" />
                      {educationRequested}
                    </span>
                  )}
                  {!recreationalRequested ? null : (
                    <span className="selectionChip">
                      <BrushIcon className="typeSelectionIcons" />
                      {recreationalRequested}
                    </span>
                  )}
                  {!socialRequested ? null : (
                    <span className="selectionChip">
                      <GroupIcon className="typeSelectionIcons" />
                      {socialRequested}
                    </span>
                  )}
                  {!diyRequested ? null : (
                    <span className="selectionChip">
                      <BuildIcon className="typeSelectionIcons" />
                      {diyRequested}
                    </span>
                  )}
                  {!charityRequested ? null : (
                    <div className="selectionChip">
                      <FavoriteIcon className="typeSelectionIcons" />
                      {charityRequested}
                    </div>
                  )}
                  {!cookingRequested ? null : (
                    <div className="selectionChip">
                      <LocalPizzaIcon className="typeSelectionIcons" />
                      {cookingRequested}
                    </div>
                  )}
                  {!relaxationRequested ? null : (
                    <div className="selectionChip">
                      <SpaIcon className="typeSelectionIcons" />
                      {relaxationRequested}
                    </div>
                  )}
                  {!musicRequested ? null : (
                    <div className="selectionChip">
                      <MusicNoteIcon className="typeSelectionIcons" />
                      {musicRequested}
                    </div>
                  )}
                  {!busyworkRequested ? null : (
                    <div className="selectionChip">
                      <DirectionsRunIcon className="typeSelectionIcons" />
                      {busyworkRequested}
                    </div>
                  )}
                </Accordion2>
                <Accordion3
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                  AccessibilityValue={accessibilityValue}
                  onAccessibilityChange={handleAccessibilityChange}
                >
                  {accessibilityMin * 5} - {accessibilityMax * 5}
                </Accordion3>
                <Accordion4
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                  PriceValue={priceValue}
                  onPriceChange={handlePriceChange}
                >
                  {priceMin * 5} - {priceMax * 5}
                </Accordion4>
              </div>
            </div>
          </div>
          <div
            className="backgroundImage"
            key={responseData.key}
            style={
              !responseData.activity
                ? {
                    backgroundImage: `url(${error})`,
                  }
                : {
                    backgroundImage: `url(${backgroundPic})`,
                  }
            }
          ></div>
        </div>
      )}
    </div>
  );
}

export default Container;
