import React from "react";
import { GlobalProvider } from "./context/GlobalState";
import InputForm from "./components/InputForm";
import UserList from "./components/UserList";
import UserCount from "./components/UserCount";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <h1>User Management</h1>
        <InputForm />
        <UserCount />
        <UserList />
      </div>
    </GlobalProvider>
  );
}

export default App;
