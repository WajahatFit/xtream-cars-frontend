import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-around p-3 border-b border-zinc-800 items-center bg-[#1a1a1a]/90 text-zinc-400">
      <Link to="/">
        <h1 className="text-3xl">HOME</h1>
      </Link>
      <ul className="flex gap-6 ">
        <Link to="/login">
          <h1>Login</h1>
        </Link>
        <Link to="/account">
          <h1>Account</h1>
        </Link>
        <Link to="/signup">
          <h1>Sign up</h1>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
