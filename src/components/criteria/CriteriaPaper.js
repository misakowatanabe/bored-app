import React, { useState } from "react";
import Accordion1 from "./Accordion-1";
import Accordion2 from "./Accordion-2";
import Accordion3 from "./Accordion-3";
import Accordion4 from "./Accordion-4";
import SchoolIcon from "@material-ui/icons/School";
import BrushIcon from "@material-ui/icons/Brush";
import BuildIcon from "@material-ui/icons/Build";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import GroupIcon from "@material-ui/icons/Group";
import LocalPizzaIcon from "@material-ui/icons/LocalPizza";
import SpaIcon from "@material-ui/icons/Spa";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function CriteriaPaper({
  participants,
  setParticipants,
  state,
  setState,
  educationRequested,
  recreationalRequested,
  socialRequested,
  diyRequested,
  charityRequested,
  cookingRequested,
  relaxationRequested,
  musicRequested,
  busyworkRequested,
  accessibilityValue,
  accessibilityMin,
  accessibilityMax,
  setAccessibilityValue,
  priceMin,
  priceMax,
  priceValue,
  setPriceValue,
}) {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleParticipantsChange = (event) => {
    setParticipants(event.target.value);
  };

  const handleTypeChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleAccessibilityChange = (event, newAccessibilityValue) => {
    setAccessibilityValue(newAccessibilityValue);
  };

  const handlePriceChange = (event, newPriceValue) => {
    setPriceValue(newPriceValue);
  };

  const chip = [
    {
      request: educationRequested,
      icon: <SchoolIcon />,
    },
    {
      request: recreationalRequested,
      icon: <BrushIcon />,
    },
    {
      request: socialRequested,
      icon: <GroupIcon />,
    },
    {
      request: diyRequested,
      icon: <BuildIcon />,
    },
    {
      request: charityRequested,
      icon: <FavoriteIcon />,
    },
    {
      request: cookingRequested,
      icon: <LocalPizzaIcon />,
    },
    {
      request: relaxationRequested,
      icon: <SpaIcon />,
    },
    {
      request: musicRequested,
      icon: <MusicNoteIcon />,
    },
    {
      request: busyworkRequested,
      icon: <DirectionsRunIcon />,
    },
  ];

  return (
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
          busyworkChecked={state.busywork}
        >
          {chip.map(({ request, icon }) => (
            <div key={request}>
              {!request ? null : (
                <span className="selectionChip">
                  <div className="typeSelectionIcons">{icon}</div>
                  {request}
                </span>
              )}
            </div>
          ))}
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
  );
}
