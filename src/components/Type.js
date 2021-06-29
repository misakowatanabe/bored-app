import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";

export default function Type(props) {
  return (
    <FormGroup>
      <Grid container style={{marginLeft: "3%"}}>
        <Grid item xs={6}>
          <FormControlLabel
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
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
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
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
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
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
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
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
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
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
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
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
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
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
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
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
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
        </Grid>
      </Grid>
    </FormGroup>
  );
}
