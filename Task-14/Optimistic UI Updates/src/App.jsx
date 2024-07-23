import React from "react";
import TaskList from "./TaskList";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <div className="container">
        <TaskList />
      </div>
    </div>
  );
};

export default App;
