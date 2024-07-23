import React from "react";

const TaskDetails = ({ task }) => {
  if (!task) {
    return <div>No task selected</div>;
  }

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </div>
  );
};

export default React.memo(TaskDetails);
