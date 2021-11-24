import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Type from "./Type";

export default function Accordion2(props) {
  return (
    <Accordion expanded={props.expanded} onChange={props.onChange}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography component={"span"}>
          <div className="accordionHeader">Type</div>
          <div className="selectedTypes">{props.children}</div>
        </Typography>
      </AccordionSummary>
      <AccordionDetails style={{ display: "grid" }}>
        <p className="typeQuestion">
          What types of activities are you intersted in?
        </p>
        <Type
          educationChecked={props.educationChecked}
          recreationalChecked={props.recreationalChecked}
          socialChecked={props.socialChecked}
          diyChecked={props.diyChecked}
          charityChecked={props.charityChecked}
          cookingChecked={props.cookingChecked}
          relaxationChecked={props.relaxationChecked}
          musicChecked={props.musicChecked}
          busyworkChecked={props.busyworkChecked}
          onChange={props.handleTypeChange}
        />
      </AccordionDetails>
    </Accordion>
  );
}
