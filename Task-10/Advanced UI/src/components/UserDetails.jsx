import React from "react";

const UserDetails = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetails;
