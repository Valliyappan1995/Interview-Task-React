import React from "react";
import MouseTracker from "./MouseTracker";

const MousePositionDisplay = () => {
  return (
    <div>
      <h1>Move your mouse around!</h1>
      <MouseTracker
        render={({ x, y }) => (
          <p>
            The mouse position is ({x}, {y})
          </p>
        )}
      />
    </div>
  );
};

export default MousePositionDisplay;
