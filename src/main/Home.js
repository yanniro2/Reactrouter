import React from "react";
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/home/client">Client</Link>
      <Link to="/home/import">Import</Link>
      <Outlet />
    </div>
  );
}

export default Home;
