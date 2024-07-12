function Carousel({ id, hasBasicIndicators, hasCircleIndicators, children }) {
  const Indicators = children.map((child, index) => {
    const attributes = {
      key: `carouselIndicator${index}`,
      dataBsTarget: `#${id}`,
      dataBsSlideTo: index,
      className: index === 0 ? "active" : "",
      ariaCurrent: index === 0 ? "true" : "false",
      ariaLabel: `Slide ${index + 1}`,
    };

    return (
      <button
        key={attributes.key}
        type="button"
        data-bs-target={attributes.dataBsTarget}
        data-bs-slide-to={attributes.dataBsSlideTo}
        className={attributes.className}
        aria-current={attributes.ariaCurrent}
        aria-label={attributes.ariaLabel}
      >
        {hasBasicIndicators && child}
      </button>
    );
  });

  return (
    <div id={id} className="carousel slide">
      {hasCircleIndicators && (
        <div className="carousel-indicators carousel-indicators--circle">
          {Indicators}
        </div>
      )}
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

      {hasBasicIndicators && (
        <div className="carousel-indicators">{Indicators}</div>
      )}
    </div>
  );
}

export default Carousel;
