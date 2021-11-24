import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";

export default function Type({
  educationChecked,
  recreationalChecked,
  socialChecked,
  diyChecked,
  charityChecked,
  cookingChecked,
  relaxationChecked,
  musicChecked,
  busyworkChecked,
  onChange,
}) {
  const type = [
    { checked: educationChecked, name: "education", label: "Education" },
    {
      checked: recreationalChecked,
      name: "recreational",
      label: "Recreational",
    },
    { checked: socialChecked, name: "social", label: "Social" },
    { checked: diyChecked, name: "diy", label: "DIY" },
    { checked: charityChecked, name: "charity", label: "Charity" },
    { checked: cookingChecked, name: "cooking", label: "Cooking" },
    { checked: relaxationChecked, name: "relaxation", label: "Relaxation" },
    { checked: musicChecked, name: "music", label: "Music" },
    { checked: busyworkChecked, name: "busywork", label: "Busy Work" },
  ];

  return (
    <FormGroup>
      <Grid container style={{ marginLeft: "3%" }}>
        {type.map(({ checked, name, label }) => (
          <Grid key={name} item xs={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={onChange}
                  name={`${name}`}
                  color="primary"
                />
              }
              label={`${label}`}
            />
          </Grid>
        ))}
      </Grid>
    </FormGroup>
  );
}
