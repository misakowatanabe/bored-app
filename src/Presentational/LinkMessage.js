import React from "react";

export default function LinkMessage(props) {
  return (
    <div className="link-container">
      <div className="link">
        <div>Start with this!</div>
        <a href={props.href} target="_blank" rel="noreferrer">
          {props.children}
        </a>
      </div>
    </div>
  );
}
