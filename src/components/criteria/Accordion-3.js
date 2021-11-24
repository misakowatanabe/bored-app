import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accessibility from "./Accessibility";

export default function Accordion3(props) {
  return (
    <Accordion expanded={props.expanded} onChange={props.onChange}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3a-content"
        id="panel3a-header"
      >
        <Typography component={"span"}>
          <div className="accordionHeader">Accessibility</div>
          <div className="accordionSecondHeader">{props.children}</div>
        </Typography>
      </AccordionSummary>
      <AccordionDetails style={{ display: "grid" }}>
        <p className="accessibilityQuestion">
          To what extent should the activity be accessible?
        </p>
        <Accessibility
          AccessibilityValue={props.AccessibilityValue}
          onAccessibilityChange={props.onAccessibilityChange}
        />
      </AccordionDetails>
    </Accordion>
  );
}
