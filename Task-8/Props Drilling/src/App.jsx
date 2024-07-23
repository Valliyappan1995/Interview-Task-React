import React, { useState } from "react";
import InputForm from "./InputForm";
import ItemList from "./ItemList";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className="App">
      <h1>Item List</h1>
      <InputForm onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
}

export default App;
