import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Price from "./Price";

export default function Accordion4(props) {
  return (
    <Accordion expanded={props.expanded} onChange={props.onChange}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel4a-content"
        id="panel4a-header"
      >
        <Typography component={"span"}>
          <div className="accordionHeader">Price</div>
          <div className="accordionSecondHeader">{props.children}</div>
        </Typography>
      </AccordionSummary>
      <AccordionDetails style={{ display: "grid" }}>
        <p className="costQuestion">How much should the activity cost?</p>
        <Price PriceValue={props.PriceValue} onPriceChange={props.onPriceChange} />
      </AccordionDetails>
    </Accordion>
  );
}
