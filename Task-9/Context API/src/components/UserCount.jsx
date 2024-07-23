import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const UserCount = () => {
  const { users } = useContext(GlobalContext);

  return <p>Total Users: {users.length}</p>;
};

export default UserCount;
