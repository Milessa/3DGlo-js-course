"use strict";

const menu = () => {
  const handleMenu = (e) => {
    const displayMenu = () => {
      document.querySelector("menu").classList.toggle("active-menu");
    };
    if (e.target.closest(".menu") || e.target.closest("menu")) {
      displayMenu();
    } else if (!e.target.closest("menu") && e.target.closest('[href^="#"]')) {
      displayMenu();
    }
  };

  document.body.addEventListener("click", handleMenu);
};

export default menu;
