import React from "react";
import "./App.css";
import TimerDisplay from "./TimerDisplay";
import MousePositionDisplay from "./MousePositionDisplay";

function App() {
  return (
    <div className="App">
      <TimerDisplay />
      <MousePositionDisplay />
    </div>
  );
}

export default App;
