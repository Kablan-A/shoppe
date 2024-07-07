"use client";
import { useMemo, useRef, useState, useEffect } from "react";

function Slider({ children }) {
  const sliderRef = useRef(null);
  const sliderElementRef = useRef(null);

  const [sliderState, setSliderState] = useState({
    width: 0,
    gap: 16,
    position: 0,
  });

  const updateSlider = (property, value) => {
    setSliderState((prevState) => ({
      ...prevState,
      [property]: value,
    }));
  };

  useEffect(() => {
    // Function to measure the width of the element
    const measureWidth = () => {
      if (sliderElementRef.current)
        updateSlider("width", sliderElementRef.current.offsetWidth);
    };
    // Measure width on mount
    measureWidth();
    // Measure width on window resize
    window.addEventListener("resize", measureWidth);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", measureWidth);
    };
  }, []);

  const currentSlide = useMemo(() => {
    // console.log(`sliderState.position: ${sliderState.position}`);
    // console.log(`sliderState.width: ${sliderState.width}`);
    // console.log(`sliderState.gap: ${sliderState.gap}`);
    return Math.round(
      sliderState.position / (sliderState.width + sliderState.gap)
    );
  }, [sliderState]);
  // console.log(`currentSlide: ${currentSlide}`);

  // const scrollToSlide = (slider, slideIndex) => {
  //   if (!slider) {
  //     console.log("scollToSlide: slider = null");
  //     return;
  //   }

  //   slider.scrollTo({
  //     left: slideIndex * (sliderState.width + sliderState.gap),
  //     behavior: "smooth",
  //   });
  // };

  // const goToNextSlide = () => {
  //   scrollToSlide(sliderRef.current, currentSlide + 1);
  // };

  // const goToPreviousSlide = () => {
  //   scrollToSlide(sliderRef.current, currentSlide - 1);
  // };

  return (
    <>
      <ul
        ref={sliderRef}
        onScroll={(ev) => updateSlider("position", ev.currentTarget.scrollLeft)}
        className="slider p-0 rounded-3 gap-3 no-scrollbar"
      >
        {children.map((slide, index) => (
          <li
            key={index}
            ref={sliderElementRef}
            className="slider__item rounded-3"
          >
            {slide}
          </li>
        ))}
      </ul>

      {/* <div className="d-flex gap-5">
        <button
          onClick={goToPreviousSlide}
          id="prevButton"
          className="carousel-control-prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          onClick={goToNextSlide}
          id="nextButton"
          className="carousel-control-next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
    </>
  );
}

export default Slider;
