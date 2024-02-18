"use strict";
const calcValidation = () => {
  const calcItems = document.querySelectorAll(".calc-block>input"),
    calcBlock = document.querySelector(".calc-block"),
    calcSquare = document.querySelector(".calc-square"),
    calcDay = document.querySelector(".calc-day"),
    calcCount = document.querySelector(".calc-count"),
    totalValue = document.getElementById("total");

  calcItems.forEach((calcItem) => {
    calcItem.addEventListener("input", () => {
      const isPattern = /\d/g;
      if (!isPattern.test(calcItem.value)) {
        alert("Разрешается только ввод цифр");
        calcItem.value = "";
      }
    });
  });

  calcBlock.addEventListener("change", () => {
    let sum = 0;
    sum = +calcCount.value + +calcDay.value + +calcSquare.value;
    totalValue.textContent = sum;
  });
};

export default calcValidation;
