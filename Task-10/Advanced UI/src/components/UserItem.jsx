import React, { useMemo } from "react";

const UserItem = ({ user }) => {
  const userInfo = useMemo(() => {
    return `${user.name} (${user.email})`;
  }, [user.name, user.email]);

  return <div>{userInfo}</div>;
};

export default React.memo(UserItem);
