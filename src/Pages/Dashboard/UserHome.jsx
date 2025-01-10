import React, { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";

const UserHome = () => {
  const { user } = useContext(authContext);
  return (
    <div>
      <h2 className="text-3xl">
        <span>
          Welcome back {user?.displayName ? user.displayName : "back"}
        </span>
      </h2>
    </div>
  );
};

export default UserHome;
