import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="logoWrapper">
      <div>
        <img className="logo" src="src/assets/cvLogo copy.png" alt="" />
      </div>
      <h1> App</h1>
    </div>

    <App />
  </React.StrictMode>
);
