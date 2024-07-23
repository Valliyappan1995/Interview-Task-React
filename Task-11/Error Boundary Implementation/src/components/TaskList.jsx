import React from "react";

const TaskList = ({ tasks, onSelectTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} onClick={() => onSelectTask(task)}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(TaskList);
