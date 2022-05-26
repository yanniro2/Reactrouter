import React from "react";
import { Link, Outlet } from "react-router-dom";
function Motor() {
  return (
    <div>
      <div>
        <Link to="/motor/client">Client</Link>
        <Link to="/motor/import">Import</Link>
        <Outlet />
      </div>
    </div>
  );
}

export default Motor;
