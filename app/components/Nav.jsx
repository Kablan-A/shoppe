"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBarsStaggered,
  faClose,
  faUser,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";

function Nav() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <nav className="navbar navbar-expand-xl">
      <div className="container d-xl-flex align-content-xl-center">
        <a className="navbar-brand text-uppercase me-auto" href="/">
          <span className="text-secondary">s</span>hoppe
        </a>
        <FontAwesomeIcon icon={faCartShopping} />
        <button
          className="navbar-toggler border-0 ms-2 text-primary shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setIsToggled((prev) => !prev)}
        >
          <FontAwesomeIcon
            icon={isToggled ? faClose : faBarsStaggered}
            className="fs-4"
          />
        </button>
        <div className="my-2 my-xl-0 w-100">
          <Search />
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 align-content-xl-center gap-xl-1">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Help
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>

            <hr className="d-xl-none" />
            <div className="vr mx-2 h-75 my-auto d-none d-xl-block"></div>

            <li className="nav-item">
              <a className="nav-link nav-link-with-icon" href="#">
                <FontAwesomeIcon icon={faUser} />
                <span>My account</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-with-icon" href="#">
                <FontAwesomeIcon icon={faSignOut} />
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
