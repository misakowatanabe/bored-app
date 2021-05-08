import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";


export default function Type(props) {


  return (
    <FormGroup row style={{ width: "300px", margin: "auto" }}>
      <FormControlLabel
        style={{ margin: "auto" }}
        control={
          <Checkbox
            checked={props.educationChecked}
            onChange={props.onChange}
            name="education"
            color="primary"
          />
        }
        label="Education"
      />
      <FormControlLabel
        style={{ margin: "auto" }}
        control={
          <Checkbox
            checked={props.recreationalChecked}
            onChange={props.onChange}
            name="recreational"
            color="primary"
          />
        }
        label="Recreational"
      />
      <FormControlLabel
        style={{ margin: "auto" }}
        control={
          <Checkbox
            checked={props.socialChecked}
            onChange={props.onChange}
            name="social"
            color="primary"
          />
        }
        label="Social"
      />
      <FormControlLabel
        style={{ margin: "auto" }}
        control={
          <Checkbox
            checked={props.diyChecked}
            onChange={props.onChange}
            name="diy"
            color="primary"
          />
        }
        label="DIY"
      />
      <FormControlLabel
        style={{ margin: "auto" }}
        control={
          <Checkbox
            checked={props.charityChecked}
            onChange={props.onChange}
            name="charity"
            color="primary"
          />
        }
        label="Charity"
      />
      <FormControlLabel
        style={{ margin: "auto" }}
        control={
          <Checkbox
            checked={props.cookingChecked}
            onChange={props.onChange}
            name="cooking"
            color="primary"
          />
        }
        label="Cooking"
      />
      <FormControlLabel
        style={{ margin: "auto" }}
        control={
          <Checkbox
            checked={props.relaxationChecked}
            onChange={props.onChange}
            name="relaxation"
            color="primary"
          />
        }
        label="Relaxation"
      />
      <FormControlLabel
        style={{ margin: "auto" }}
        control={
          <Checkbox
            checked={props.musicChecked}
            onChange={props.onChange}
            name="music"
            color="primary"
          />
        }
        label="Music"
      />
      <FormControlLabel
        style={{ margin: "auto" }}
        control={
          <Checkbox
            checked={props.busyworkCchecked}
            onChange={props.onChange}
            name="busywork"
            color="primary"
          />
        }
        label="Busy Work"
      />
    </FormGroup>
  );
}
