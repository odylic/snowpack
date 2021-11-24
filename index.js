import React from "react";
import ReactDOM from "react-dom";

// // needed this import to stop the regenerator runtime error and because babel polyfill is deprecated
// import "regenerator-runtime/runtime";

ReactDOM.render(
  <React.StrictMode></React.StrictMode>,
  document.getElementById("root")
);

console.log("test");
