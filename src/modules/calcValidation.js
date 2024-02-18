"use strict";

import { animate } from "./helpers";

const calcValidation = (price = 100) => {
  const calcItems = document.querySelectorAll(".calc-block>input"),
    calcBlock = document.querySelector(".calc-block"),
    calcType = document.querySelector(".calc-type"),
    calcSquare = document.querySelector(".calc-square"),
    calcCount = document.querySelector(".calc-count"),
    calcDay = document.querySelector(".calc-day"),
    total = document.getElementById("total");

  calcItems.forEach((calcItem) => {
    calcItem.addEventListener("input", () => {
      event.target.value = event.target.value.replace(/[^[0-9]*/g, "");
      //"Разрешается только ввод цифр
    });
  });

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value,
      calcSquareValue = calcSquare.value;

    let totalValue = 0,
      calcCountValue = 1,
      calcDayValue = 1,
      step = 1;

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcType.value && calcSquare.value) {
      totalValue =
        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    } else {
      totalValue = 0;
    }

    animate({
      duration: 1000,
      timing(timeFraction) {
        return Math.pow(timeFraction, 5);
      },
      draw(progress) {
        total.textContent = Math.round(totalValue * progress);
      },
    });
  };

  calcBlock.addEventListener("input", (e) => {
    if (
      e.target === calcType ||
      e.target === calcSquare ||
      e.target === calcCount ||
      e.target === calcDay
    ) {
      countCalc();
    }
  });
};

export default calcValidation;
