import React from "react";
import socket from "../socket";

export default function JoinedBlock() {
  return (
    <div className="join-block">
      <input placeholder="Room ID" type="text" />
      <input placeholder="Your Name" type="text" />
      {/* <button onClick={socketIO}>SOCKET</button> */}
    </div>
  );
}
