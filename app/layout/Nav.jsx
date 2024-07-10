"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
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
    <nav className="navbar navbar-expand-lg mb-lg-2 bg-white position-sticky top-0 z-3">
      <div className="container border-1 border-bottom">
        <Link href="/" className="navbar-brand text-uppercase me-auto">
          <span className="text-secondary">s</span>hoppe
        </Link>

        {/* Cart for mobile */}
        <Link href="/cart" className="d-lg-none">
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

        <div className="search-container">
          <Search />
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 align-content-lg-center gap-lg-3">
            <li className="nav-item">
              <Link href="/shop" className={`nav-link ${isActive("/shop")}`}>
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog" className={`nav-link ${isActive("/blog")}`}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/ourStory"
                className={`nav-link ${isActive("/ourStory")}`}
              >
                Our story
              </Link>
            </li>

            <hr className="d-lg-none" />
            <div className="vr mx-2 h-75 my-auto d-none d-lg-block"></div>

            {/* Cart for desktop */}
            <li className="nav-item d-none d-lg-flex">
              <Link
                href="/cart"
                className={`nav-link nav-link-with-icon ${isActive("/cart")}`}
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/account"
                className={`nav-link nav-link-with-icon ${isActive(
                  "/account"
                )}`}
              >
                <FontAwesomeIcon icon={faUser} />
                <span>My account</span>
              </Link>
            </li>
            <li className="nav-item">
              <button type="button" className="nav-link nav-link-with-icon">
                <FontAwesomeIcon icon={faSignOut} />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
