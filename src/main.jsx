import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import img from "./assets/cvLogo copy.png";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="logoWrapper">
      <div>
        <img className="logo" src={img} alt="" />
      </div>
      <h1> App</h1>
    </div>

    <App />
  </React.StrictMode>
);
