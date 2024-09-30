import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
