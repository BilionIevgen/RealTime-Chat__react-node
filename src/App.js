import React from "react";
import "./App.css";
import JoinedBlock from "./components/JoinedBlock";
import socket from "./socket";

function App() {
  return (
    <div className="wrapper">
      <JoinedBlock />
    </div>
  );
}

export default App;
