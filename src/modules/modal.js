"use strict";

import { animate } from "./helpers";

const modal = () => {
  const popup = document.querySelector(".popup"),
    popupBtn = document.querySelectorAll(".popup-btn"),
    popupContent = popup.querySelector(".popup-content");

  popupBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      popup.style.display = "block";
      animate({
        duration: 1000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          popupContent.style.top = 25 * progress + "%";
        },
      });
    });
  });

  popup.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      popup.style.display = "none";
    }
  });
};

export default modal;
