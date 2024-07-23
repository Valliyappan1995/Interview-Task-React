import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const InputForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { addUser } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      addUser({ name, email });
      setName('');
      setEmail('');
    }
  };

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

export default InputForm;
