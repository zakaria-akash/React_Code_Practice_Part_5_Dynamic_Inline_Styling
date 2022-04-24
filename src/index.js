//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const currentDate = new Date();
const currentTime = currentDate.getHours();
let greetingMgs;

let customStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  borderBottom: "3px solid black",
  textAlign: "center",
  color: "black"
};

if (currentTime > 12) {
  greetingMgs = "GOOD MORNING!";
  customStyle.color = "red";
} else if (currentTime > 12 && currentTime < 18) {
  greetingMgs = "GOOD AFTERNOON!";
  customStyle.color = "green";
} else {
  greetingMgs = "GOOD NIGHT!";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 style={customStyle}>{greetingMgs}</h1>
  </div>,
  document.getElementById("root")
);
