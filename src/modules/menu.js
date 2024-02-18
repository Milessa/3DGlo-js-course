"use strict";

const menu = () => {
  const handleMenu = (e) => {
    if (e.target.closest(".menu") || e.target.closest('li>a[href^="#"]')) {
      document.querySelector("menu").classList.toggle("active-menu");
    } else if (e.target.matches(".close-btn") || !e.target.closest("menu")) {
      document.querySelector("menu").classList.remove("active-menu");
    }
  };

  document.body.addEventListener("click", handleMenu);
};

export default menu;
