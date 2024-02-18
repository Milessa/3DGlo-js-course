"use strict";

const modal = () => {
  const popup = document.querySelector(".popup"),
    popupBtn = document.querySelectorAll(".popup-btn"),
    popupContent = popup.querySelector(".popup-content"),
    popupData = {
      count: -450,
      speed: 10,
      startPos: -450,
      endPos: 0,
    };

  popupBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      popup.style.display = "block";
      if (screen.width > 768) {
        popupData.count = popupData.startPos;
        requestAnimationFrame(showPopup);
      }
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

  const showPopup = () => {
    popupData.startPos > popupData.endPos
      ? (popupData.count -= popupData.speed)
      : (popupData.count += popupData.speed);
    popupContent.style.transform = `translateY(${popupData.count}px)`;

    if (
      popupData.startPos > popupData.endPos
        ? popupData.count > popupData.endPos
        : popupData.count < popupData.endPos
    ) {
      requestAnimationFrame(showPopup);
    }
  };
};

export default modal;
