import React, { useState, useCallback } from "react";

const UserForm = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (name.trim() && email.trim()) {
        addUser({ name, email });
        setName("");
        setEmail("");
      }
    },
    [name, email, addUser]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default React.memo(UserForm);
