import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Mobilenav() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const openNav = () => {
    setIsSideNavOpen(true);
  };

  const closeNav = () => {
    setIsSideNavOpen(false);
  };
  return (
    <>
      <div className="navbar">
        <a href="javascript:void(0)" onClick={openNav}>
          <div className="bar-style">
            <i className="fa fa-bars sidebar-bar" aria-hidden="true"></i>
          </div>
        </a>
        <div
          id="mySidenav"
          className={isSideNavOpen ? "open-side sidenav" : "sidenav"}
        >
          <a
            href="javascript:void(0)"
            className="sidebar-overlay"
            onClick={closeNav}
          ></a>
          <nav>
            <div onClick={closeNav}>
              <div className="sidebar-back text-left">
                <i className="fa fa-angle-left pr-2" aria-hidden="true"></i>{" "}
                Back
              </div>
            </div>
            <ul id="sub-menu" className="sm pixelstrap sm-vertical">
              <li>
                <Link to="/" onClick={closeNav} className="active">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/categories" onClick={closeNav}>
                  Categories
                </Link>
              </li>
              <li>
                <a href="#" onClick={closeNav}>
                  Admins
                </a>
              </li>
              <li>
                <a href="#" onClick={closeNav}>
                  Appointments
                </a>
              </li>
              <li>
                <a href="#" onClick={closeNav}>
                  Profile
                </a>
              </li>
              <li>
                <a href="#" onClick={closeNav}>
                  Settings
                </a>
              </li>
              <li>
                <a href="#" onClick={closeNav}>
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
