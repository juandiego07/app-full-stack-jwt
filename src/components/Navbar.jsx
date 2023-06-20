import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Fragment>
      <div className="navbar">
        <Link to={"/"}>Login</Link>
        <Link to={"/register"}>Register</Link>
        <Link to={"/home"}>Home</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
      </div>
    </Fragment>
  );
};
