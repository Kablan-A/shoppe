"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState, Children } from "react";

function Dropdown({ title, isReview, children }) {
  const id = `collapse${title.split(" ").join("")}`;
  const reviewCount = Children.count(children);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div>
      <button
        className="btn text-start w-100"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#${id}`}
        aria-expanded="false"
        aria-controls={id}
        onClick={() => setIsToggled((prev) => !prev)}
      >
        <div className="d-flex align-items-center justify-content-between gap-2">
          {title} {isReview && `(${reviewCount})`}
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`fa-chevron-down ${
              isToggled && "fa-chevron-down--active"
            }`}
          />
        </div>
      </button>
      <div className="collapse" id={id}>
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
