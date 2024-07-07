"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

function Stars({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i += 1) {
    stars.push(
      <FontAwesomeIcon
        key={`star${i}`}
        icon={i <= rating ? faStarSolid : faStarRegular}
        className="text-secondary"
      />
    );
  }

  return <div className="d-flex align-items-center gap-1">{stars}</div>;
}

function Review({ username, date, rating, text }) {
  return (
    <div className="card border-0">
      <div className="card-body mb-1">
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="card-title m-0">{username}</h5>
          <Stars rating={rating} />
        </div>
        <h6 className="card-text fw-light">{date}</h6>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default Review;
