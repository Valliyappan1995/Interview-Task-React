import React, { useState, useCallback } from "react";
import UserForm from "./components/UserForm";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = useCallback((user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  }, []);

  return (
    <div className="App">
      <h1>User Management</h1>
      <UserForm addUser={addUser} />
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
