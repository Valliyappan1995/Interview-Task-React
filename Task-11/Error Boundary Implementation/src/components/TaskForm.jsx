import React, { useState, useCallback } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (title.trim() && description.trim()) {
        addTask({ title, description });
        setTitle("");
        setDescription("");
      }
    },
    [title, description, addTask]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default React.memo(TaskForm);
