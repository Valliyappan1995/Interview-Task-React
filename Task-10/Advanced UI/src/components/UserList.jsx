import React, { useContext } from "react";
import { FixedSizeList as List } from "react-window";
import { GlobalContext } from "../context/GlobalState";
import UserItem from "./UserItem";

const UserList = () => {
  const { users } = useContext(GlobalContext);

  return (
    <List height={400} itemCount={users.length} itemSize={35} width={300}>
      {({ index, style }) => (
        <div style={style}>
          <UserItem user={users[index]} />
        </div>
      )}
    </List>
  );
};

export default UserList;
