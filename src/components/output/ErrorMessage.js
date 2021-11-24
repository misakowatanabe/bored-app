import React from "react";

export default function ErrorMessage() {
  return (
    <div className="text-container">
      <div className="text">
        <div className="mainText">Sorry, no match...</div>
        <div className="subTextForNoMatch">Try again with other criteria :)</div>
      </div>
    </div>
  );
}
