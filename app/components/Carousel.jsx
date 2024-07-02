function Carousel({ id, children }) {
  return (
    <div id={id} className="carousel slide">
      <div className="carousel-indicators">
        {children.map((_, index) => (
          <button
            key={`carouselIndicator${index}`}
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {children.map((child, index) => (
          <div
            key={`carouselItem${index}`}
            className={`carousel-item ${index === 0 && "active"}`}
          >
            {child}
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
