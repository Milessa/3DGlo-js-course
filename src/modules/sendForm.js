"use strict";

const sendForm = () => {
  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
  };

  const submitForm = (form) => {
    const statusMessage = document.createElement("div");

    const showStatus = (status) => {
      const img = document.createElement("img");
      const statusList = {
        load: {
          message: " Загрузка...",
          img: "./images/message/waiting.gif",
        },
        error: {
          message: " Что-то пошло не так...",
          img: "./images/message/error.png",
        },
        success: {
          message: " Спасибо. Наш менеджер скоро с вами свяжемся!",
          img: "./images/message/success.png",
        },
      };

      statusMessage.textContent = statusList[status].message;
      img.src = statusList[status].img;
      img.height = 35;

      statusMessage.insertBefore(img, statusMessage.firstChild);
    };

    statusMessage.style.cssText = "font-size: 2rem; color: #fff";

    form.addEventListener("submit", (e) => {
      const formElements = form.querySelectorAll("input"),
        formData = new FormData(form),
        formBody = {};
      e.preventDefault();

      showStatus("load");
      form.appendChild(statusMessage);

      formData.forEach((val, key) => {
        formBody[key] = val;
      });

      sendData(formBody)
        .then((data) => {
          showStatus("success");

          formElements.forEach((input) => {
            input.value = "";
          });
          setTimeout(() => {
            document.querySelector(".popup").style.display = "none";
          }, 2000);
        })
        .catch((error) => {
          showStatus("error");
        });
    });
  };

  document.querySelectorAll("form").forEach((elem) => submitForm(elem));
};

export default sendForm;
