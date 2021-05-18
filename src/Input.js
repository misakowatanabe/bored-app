import React, { useState, useEffect } from "react";
import Participants from "./Participants";
import Type from "./Type";
import Accessibility from "./Accessibility";
import Price from "./Price";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

function Input() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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

  var educationRequested = "";
  var recreationalRequested = "";
  var socialRequested = "";
  var diyRequested = "";
  var charityRequested = "";
  var cookingRequested = "";
  var relaxationRequested = "";
  var musicRequested = "";
  var busyworkRequested = "";

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

  var accessibilityMin = accessibilityValue[0] / 100;
  var accessibilityMax = accessibilityValue[1] / 100;
  const accessibilityRequest = `&minaccessibility=${accessibilityMin}&maxaccessibility=${accessibilityMax}`;

  var priceMin = priceValue[0] / 100;
  var priceMax = priceValue[1] / 100;
  const priceRequest = `&minprice=${priceMin}&maxprice=${priceMax}`;

  const apiUrl = `https://www.boredapi.com/api/activity?${participantsRequest}${typeRequest}${accessibilityRequest}${priceRequest}`;

  const [refetch, setRefetch] = useState(0);

  const [responseData, setResponseData] = useState("");

  const [backgroundPic, setBackgroundPic] = useState("");

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
              <div className="text-container">
                <div className="text">
                  <div className="mainText">No matching</div>
                  <div className="subTextForNoMatch">
                    At least you got a kitten pic!
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-container">
                <div className="text" key={responseData.activity}>
                  <button onClick={() => setRefetch(refetch + 1)}>
                    <div className="subText">Feeling bored?</div>
                    <div className="mainText">{responseData.activity}</div>
                  </button>
                  {!responseData.link ? null : (
                    <div className="link-container">
                      <div className="link">
                        <div>Start with this!</div>
                        <a
                          href={responseData.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {responseData.link}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            <div className="accordion-container">
              <div className={classes.root}>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading} component={"span"}>
                      <div className="accordionHeader">Participants</div>
                      <div className="accordionSecondHeader">
                        {participants}
                      </div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{ display: "grid" }}>
                    <p className="participantsQuestion">
                      How many people are you?
                    </p>
                    <Participants
                      value={participants}
                      onChange={handleParticipantsChange}
                    />
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.heading} component={"span"}>
                      <div className="accordionHeader">Type</div>
                      <div className="selectedTypes">
                        {!educationRequested ? (
                          ""
                        ) : (
                          <span className="selectionChip">
                            <SchoolIcon className="typeSelectionIcons" />
                            {educationRequested}
                          </span>
                        )}
                        {!recreationalRequested ? (
                          ""
                        ) : (
                          <span className="selectionChip">
                            <BrushIcon className="typeSelectionIcons" />
                            {recreationalRequested}
                          </span>
                        )}
                        {!socialRequested ? (
                          ""
                        ) : (
                          <span className="selectionChip">
                            <GroupIcon className="typeSelectionIcons" />
                            {socialRequested}
                          </span>
                        )}
                        {!diyRequested ? (
                          ""
                        ) : (
                          <span className="selectionChip">
                            <BuildIcon className="typeSelectionIcons" />
                            {diyRequested}
                          </span>
                        )}
                        {!charityRequested ? (
                          ""
                        ) : (
                          <div className="selectionChip">
                            <FavoriteIcon className="typeSelectionIcons" />
                            {charityRequested}
                          </div>
                        )}
                        {!cookingRequested ? (
                          ""
                        ) : (
                          <div className="selectionChip">
                            <LocalPizzaIcon className="typeSelectionIcons" />
                            {cookingRequested}
                          </div>
                        )}
                        {!relaxationRequested ? (
                          ""
                        ) : (
                          <div className="selectionChip">
                            <SpaIcon className="typeSelectionIcons" />
                            {relaxationRequested}
                          </div>
                        )}
                        {!musicRequested ? (
                          ""
                        ) : (
                          <div className="selectionChip">
                            <MusicNoteIcon className="typeSelectionIcons" />
                            {musicRequested}
                          </div>
                        )}
                        {!busyworkRequested ? (
                          ""
                        ) : (
                          <div className="selectionChip">
                            <DirectionsRunIcon className="typeSelectionIcons" />
                            {busyworkRequested}
                          </div>
                        )}
                      </div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{ display: "grid" }}>
                    <p className="typeQuestion">
                      What types of activities are you intersted in?
                    </p>
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
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography className={classes.heading} component={"span"}>
                      <div className="accordionHeader">Accessibility</div>
                      <div className="accordionSecondHeader">
                        {accessibilityMin * 5} - {accessibilityMax * 5}
                      </div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{ display: "grid" }}>
                    <p className="accessibilityQuestion">
                      To what extent should the activity be accessible?
                    </p>
                    <Accessibility
                      AccessibilityValue={accessibilityValue}
                      onAccessibilityChange={handleAccessibilityChange}
                    />
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography className={classes.heading} component={"span"}>
                      <div className="accordionHeader">Price</div>
                      <div className="accordionSecondHeader">
                        {priceMin * 5} - {priceMax * 5}
                      </div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{ display: "grid" }}>
                    <p className="costQuestion">
                      How much should the activity cost?
                    </p>
                    <Price
                      PriceValue={priceValue}
                      onPriceChange={handlePriceChange}
                    />
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
          {!responseData.activity ? (
            <div
              className="backgroundImage"
              style={{
                backgroundImage: `url(${error})`,
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
              }}
            ></div>
          ) : (
            <div
              key={responseData.activity}
              className="backgroundImage"
              style={{
                backgroundImage: `url(${backgroundPic})`,
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
              }}
            ></div>
          )}
        </div>
      )}
    </div>
  );
}

export default Input;
