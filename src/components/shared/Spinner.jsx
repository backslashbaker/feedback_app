import React from "react";
import spinner from "../assets/spinner.gif";

function Spinner(props) {
  return (
    <image
      src={spinner}
      alt={"loading..."}
      style={{ width: "100px", margin: "auto", display: "block" }}
    />
  );
}

export default Spinner;
