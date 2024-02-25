const animate = ({ timing, draw, duration }) => {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

const blockBody = () => {
  const body = document.body;
  body.style.overflow = "hidden";
  const bodyScroll = calcScroll();
  body.style.marginRight = `${bodyScroll}px`;
};

const unBlockBody = () => {
  const body = document.body;
  body.style.overflow = "auto";
  body.style.marginRight = `0`;
};

function calcScroll() {
  let div = document.createElement("div");
  div.style.width = "500px";
  div.style.height = "500px";
  div.style.overflowY = "scroll";
  div.style.visibility = "hidden";
  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
}

export { animate, blockBody, unBlockBody, calcScroll };
