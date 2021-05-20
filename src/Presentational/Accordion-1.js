import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Participants from "./Participants";

export default function Accordion1(props) {
  return (
    <Accordion
      expanded={props.expanded}
      onChange={props.onChange}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography component={"span"}>
          <div className="accordionHeader">Participants</div>
          <div className="accordionSecondHeader">{props.children}</div>
        </Typography>
      </AccordionSummary>
      <AccordionDetails style={{ display: "grid" }}>
        <p className="participantsQuestion">How many people are you?</p>
        <Participants
          value={props.value}
          onChange={props.handleParticipantsChange}
        />
      </AccordionDetails>
    </Accordion>
  );
}
