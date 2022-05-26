import React from "react";
import { Link, Outlet } from "react-router-dom";

function Main() {
  return (
    <div>
      Main
      <h1>text</h1>
      <Link to="home">Home</Link>
      <Link to="land">Land</Link>
      <Link to="motor">Motor</Link>
      <Outlet />
    </div>
  );
}

export default Main;
