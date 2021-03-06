import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginRight: "10%",
    marginLeft: "10%",
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: "Affordable",
  },
  {
    value: 20,
    label: "",
  },
  {
    value: 40,
    label: "",
  },
  {
    value: 60,
    label: "",
  },
  {
    value: 80,
    label: "",
  },
  {
    value: 100,
    label: "Expensive",
  },
];

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value);
}

export default function Price(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Slider
        value={props.PriceValue}
        onChange={props.onPriceChange}
        valueLabelFormat={valueLabelFormat}
        aria-labelledby="discrete-slider-custom"
        step={null}
        valueLabelDisplay="on"
        marks={marks}
      />
    </div>
  );
}
