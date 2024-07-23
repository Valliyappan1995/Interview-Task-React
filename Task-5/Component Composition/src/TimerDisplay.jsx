import React from "react";
import withTimer from "./withTimer";

const TimerDisplay = ({ seconds }) => {
  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
    </div>
  );
};

export default withTimer(TimerDisplay);
