"use strict";

const scroll = () => {
  document.querySelectorAll('li>a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      if (!e.target.classList.contains("close-btn")) {
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
};
export default scroll;
