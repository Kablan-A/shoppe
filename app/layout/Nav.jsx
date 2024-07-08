"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Search from "../components/Search";
import { usePathname } from "next/navigation";

function Nav() {
  const pathname = usePathname();
  const [isToggled, setIsToggled] = useState(false);

  function isActive(linkPath) {
    if (pathname !== linkPath) {
      return "";
    }
    return "active";
  }

  return (
    <nav className="navbar navbar-expand-xl mb-xl-2">
      <div className="container d-xl-flex align-content-xl-center">
        <Link href="/" className="navbar-brand text-uppercase me-auto">
          <span className="text-secondary">s</span>hoppe
        </Link>
        <Link href="/">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
        <button
          className={`navbar-toggler ${
            isToggled && "navbar-toggler--toggled"
          } border-0 ms-3 text-primary shadow-none`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setIsToggled((prev) => !prev)}
        >
          <span className="navbar-toggler__line"></span>
        </button>
        <div className="my-2 my-xl-0 w-100">
          <Search />
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 align-content-xl-center gap-xl-1">
            <li className="nav-item">
              <Link href="/" className={`nav-link ${isActive("/")}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/shop" className={`nav-link ${isActive("/shop")}`}>
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" className={`nav-link ${isActive("/")}`}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" className={`nav-link ${isActive("/")}`}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" className={`nav-link ${isActive("/")}`}>
                Help
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" className={`nav-link ${isActive("/")}`}>
                Contact
              </Link>
            </li>

            <hr className="d-xl-none" />
            <div className="vr mx-2 h-75 my-auto d-none d-xl-block"></div>

            <li className="nav-item">
              <Link
                href="/"
                className={`nav-link nav-link-with-icon ${isActive("/")}`}
              >
                <FontAwesomeIcon icon={faUser} />
                <span>My account</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/"
                className={`nav-link nav-link-with-icon ${isActive("/")}`}
              >
                <FontAwesomeIcon icon={faSignOut} />
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
