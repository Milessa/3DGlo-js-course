"use strict";

const slider = () => {
  const slides = document.querySelectorAll(".portfolio-item"),
    sliderDot = document.querySelector(".portfolio-dots");
  const addDot = () => {
    slides.forEach(() => {
      const dot = document.createElement("li");
      dot.classList.add("dot");
      sliderDot.appendChild(dot);
    });

    sliderDot.children[0].classList.add("dot-active");
  };

  addDot();
};

export default slider;
