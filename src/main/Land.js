import React from "react";
import { Link, Outlet } from "react-router-dom";

function Land() {
  return (
    <div>
      <Link to="/land/client">Client</Link>
      <Link to="/land/import">Import</Link>
      <Outlet />
    </div>
  );
}

export default Land;
