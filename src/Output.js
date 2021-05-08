import React, { useState, useEffect } from "react";
import axios from "axios";

function Get() {
  let [responseData, setResponseData] = React.useState("");

  useEffect(() => {
    axios
      .get("http://www.boredapi.com/api/activity/")
      .then((response) => {
        setResponseData(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setResponseData, responseData]);

  return (
    <div>
      <pre>
        <code>{responseData && JSON.stringify(responseData, null, 4)}</code>
      </pre>
    </div>
  );
}
