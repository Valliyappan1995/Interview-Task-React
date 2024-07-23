import React, { useState } from "react";
import axios from "axios";
import "./TaskList.css"; // Add your styles here

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [pendingTasks, setPendingTasks] = useState({});

  const addTask = async (e) => {
    e.preventDefault();

    // Create an optimistic task ID
    const optimisticId = Date.now();
    const optimisticTask = {
      id: optimisticId,
      title: newTask,
      status: "pending",
    };

    // Update UI optimistically
    setTasks([...tasks, optimisticTask]);
    setPendingTasks({ ...pendingTasks, [optimisticId]: true });
    setNewTask("");

    try {
      // Send the request to the server
      const response = await axios.post("/api/tasks", { title: newTask });
      const { id } = response.data;

      // Update the task with the confirmed ID
      setTasks(
        tasks.map((task) =>
          task.id === optimisticId ? { ...task, id, status: "completed" } : task
        )
      );
      setPendingTasks((prev) => ({ ...prev, [optimisticId]: false }));
    } catch (error) {
      // Revert UI if the request fails
      setTasks(tasks.filter((task) => task.id !== optimisticId));
      console.error("Failed to add task:", error);
    }
  };

  return (
    <div className="task-list-container">
      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          required
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} {pendingTasks[task.id] && <span>(Saving...)</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
