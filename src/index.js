import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.color = "blue"; // changing styling when something happens

root.render(
  <div>
    <h1 style={{ color: "orange" }}> Hello World! </h1>
    <p style={customStyle}> This is a paragraph. </p>
  </div>
);
