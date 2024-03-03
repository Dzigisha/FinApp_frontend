import React from "react";
import "../style.css";
import { Outlet, Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <nav className="d-flex navbar bg-body ">
        <div className="container-fluid">
          <a className="navbar-brand  logoText">FINAPP</a>
          <div className="d-flex">
            <a className="navbar nav-link navBarLink pr-t" href="#">
              O nama
            </a>
            <button
              className="btn navBarLink border border-black mx-3 px-4"
              type="submit"
            >
              <Link to="/login">Login</Link>
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;
