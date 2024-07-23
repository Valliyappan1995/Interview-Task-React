import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const UserList = () => {
  const { users } = useContext(GlobalContext);

  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
};

export default UserList;
