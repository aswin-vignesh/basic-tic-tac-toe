import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TicTacToe from "./TicTacToe";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TicTacToe />
    </div>
  </React.StrictMode>
);
