import React from "react";
import ErrorMessage from "./ErrorMessage";
import LinkMessage from "./LinkMessage";
import Fade from "@material-ui/core/Fade";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Output({ responseData, checked }) {
  const Link = () => {
    if (responseData.link) {
      return (
        <LinkMessage href={responseData.link}>{responseData.link}</LinkMessage>
      );
    } else {
      return null;
    }
  };

  const OutputContents = () => {
    if (!responseData.activity) {
      return (
        <Fade in={checked}>
          <ErrorMessage />
        </Fade>
      );
    } else {
      return (
        <Fade in={checked}>
          <div className="text-container">
            <div className="text" key={responseData.key}>
              <div className="subText">Feeling bored?</div>
              <div className="mainText">{responseData.activity}</div>
              <Link />
            </div>
          </div>
        </Fade>
      );
    }
  };

  if (checked) {
    return <OutputContents />;
  } else {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          textAlign: "center",
          margin: "88.5px auto",
        }}
      >
        <CircularProgress />
      </div>
    );
  }
}
