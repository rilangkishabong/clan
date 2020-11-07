import React from "react";
export const Logout = ({ history }) => {
  const logout = () => {
    localStorage.removeItem("token");
    history.push("/signin");
  };
  return <div onClick={logout}>Logout</div>;
};
