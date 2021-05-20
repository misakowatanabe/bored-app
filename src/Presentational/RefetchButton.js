import React from "react";
import RefreshIcon from "@material-ui/icons/Refresh";

export default function RefetchButton(props) {
  return (
    <div className="buttonPosition">
      <button onClick={props.onClick}>
        <RefreshIcon
          style={{ color: "rgb(226, 226, 226)", fontSize: "30px" }}
        />
      </button>
    </div>
  );
}
