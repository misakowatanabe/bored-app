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
import Skeleton from "@material-ui/lab/Skeleton";
import dimentionAdjustment from "./img/gray.jpg";
import error from "./img/error.jpg";

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
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [participants, setParticipants] = useState("1");
  const handleParticipantsChange = (event) => {
    setParticipants(event.target.value);
  };

  const [state, setState] = useState({
    education: false,
    recreational: false,
    social: false,
    diy: false,
    charity: false,
    cooking: false,
    relaxation: false,
    music: false,
    busywork: false,
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
  const typeRequest = `${educationString}${recreationalString}${socialString}${diyString}${charityString}${cookingString}${relaxationString}${musicString}${busyworkString}`;

  var accessibilityMin = accessibilityValue[0] / 100;
  var accessibilityMax = accessibilityValue[1] / 100;
  const accessibilityRequest = `&minaccessibility=${accessibilityMin}&maxaccessibility=${accessibilityMax}`;

  var priceMin = priceValue[0] / 100;
  var priceMax = priceValue[1] / 100;
  const priceRequest = `&minprice=${priceMin}&maxprice=${priceMax}`;

  const apiUrl = `https://www.boredapi.com/api/activity?${participantsRequest}${typeRequest}${accessibilityRequest}${priceRequest}`;

  const [responseData, setResponseData] = useState("");

  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setResponseData(response.data);
        if (response.data.type === "education") {
          setBackgroundImage(imageEducation);
        } else if (response.data.type === "recreational") {
          setBackgroundImage(imageRecreational);
        } else if (response.data.type === "social") {
          setBackgroundImage(imageSocial);
        } else if (response.data.type === "diy") {
          setBackgroundImage(imageDiy);
        } else if (response.data.type === "charity") {
          setBackgroundImage(imageCharity);
        } else if (response.data.type === "cooking") {
          setBackgroundImage(imageCooking);
        } else if (response.data.type === "relaxation") {
          setBackgroundImage(imageRelaxation);
        } else if (response.data.type === "music") {
          setBackgroundImage(imageMusic);
        } else if (response.data.type === "busywork") {
          setBackgroundImage(imageBusywork);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [participants, state, accessibilityValue, priceValue, apiUrl]);

  return (
    <div>
      {!responseData && !backgroundImage ? (
        <div className="loadingTextImage-container">
          <div className="loadingText">Loading...</div>
          <Skeleton className="skeleton" variant="rect">
            <img
              style={{ width: "100%", margin: "auto", opacity: "0.0" }}
              src={dimentionAdjustment}
              alt="dimentionAdjustment"
            />
          </Skeleton>
        </div>
      ) : (
        <div>
          {!responseData.activity ? (
            <div className="textImageWithoutLink-container">
              <div className="text-container">
                <div className="text">No matching</div>
                <div className="subTextForNoMatch">
                  At least you got a kitten pic!
                </div>
              </div>
              <figure className="img-container">
                <img
                  style={{
                    width: "100%",
                    margin: "auto",
                    filter: "brightness(60%)",
                  }}
                  src={error}
                  alt="background"
                />
              </figure>
            </div>
          ) : (
            <div>
              {!responseData.link ? (
                <div className="textImageWithoutLink-container">
                  <div className="text-container">
                    <div className="subText">Feeling bored?</div>
                    <div className="text">{responseData.activity}</div>
                  </div>
                  <figure className="img-container">
                    <img
                      style={{
                        width: "100%",
                        margin: "auto",
                        filter: "brightness(60%)",
                      }}
                      src={backgroundImage}
                      alt="background"
                    />
                  </figure>
                </div>
              ) : (
                <div className="textImageWithLink-container">
                  <div className="text-container">
                    <div className="subText">Feeling bored?</div>
                    <div className="text">{responseData.activity}</div>
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
                  </div>
                  <figure className="img-container">
                    <img
                      style={{
                        width: "100%",
                        margin: "auto",
                        filter: "brightness(60%)",
                      }}
                      src={backgroundImage}
                      alt="background"
                    />
                  </figure>
                </div>
              )}
            </div>
          )}
        </div>
      )}
      <div className="accordion-container">
        <div className={classes.root}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            square={true}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                className={classes.heading}
                style={{ fontWeight: 500 }}
              >
                Participants
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ display: "grid" }}>
              <p>How many people are you?</p>
              <Participants
                value={participants}
                onChange={handleParticipantsChange}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            square={true}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                className={classes.heading}
                style={{ fontWeight: 500 }}
              >
                Type
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ display: "grid" }}>
              <p>What types of activities are you intersted in?</p>
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
            square={true}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography
                className={classes.heading}
                style={{ fontWeight: 500 }}
              >
                Accessibility
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ display: "grid" }}>
              <p>To what extent should the activity be accessible?</p>
              <Accessibility
                AccessibilityValue={accessibilityValue}
                onAccessibilityChange={handleAccessibilityChange}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            square={true}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography
                className={classes.heading}
                style={{ fontWeight: 500 }}
              >
                Price
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ display: "grid" }}>
              <p>How much should the activity cost?</p>
              <Price
                PriceValue={priceValue}
                onPriceChange={handlePriceChange}
              />
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Input;
