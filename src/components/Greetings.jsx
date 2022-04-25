import React from "react";

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

if (currentTime < 12) {
  greetingMgs = "GOOD MORNING!";
  customStyle.color = "red";
} else if (currentTime > 12 && currentTime < 18) {
  greetingMgs = "GOOD AFTERNOON!";
  customStyle.color = "green";
} else {
  greetingMgs = "GOOD NIGHT!";
  customStyle.color = "blue";
}

function Greetings() {
  return <h1 style={customStyle}>{greetingMgs}</h1>;
}

export default Greetings;
