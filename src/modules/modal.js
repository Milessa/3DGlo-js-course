"use strict";

import { animate, blockBody, unBlockBody } from "./helpers";

const modal = () => {
  const popup = document.querySelector(".popup"),
    popupBtn = document.querySelectorAll(".popup-btn"),
    popupContent = popup.querySelector(".popup-content");

  popupBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      popup.style.display = "block";
      animate({
        duration: 500,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          popupContent.style.top = 25 * progress + "%";
          blockBody();
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
      unBlockBody();
    }
  });
};

export default modal;
