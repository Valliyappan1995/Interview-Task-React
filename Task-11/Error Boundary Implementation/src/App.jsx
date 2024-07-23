import React, { Suspense, useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

const TaskDetails = React.lazy(() => import("./components/TaskDetails"));

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const handleTaskSelect = (task) => {
    setSelectedTask(task);
  };

  return (
    <ErrorBoundary>
      <div className="App">
        <h1>Task Management</h1>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} onSelectTask={handleTaskSelect} />
        <Suspense fallback={<div>Loading...</div>}>
          <TaskDetails task={selectedTask} />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
