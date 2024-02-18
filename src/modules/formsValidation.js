"use strict";
const formsValidation = () => {
  const forms = document.querySelector(".mess"),
    userName = document.querySelectorAll("input[name=user_name]"),
    userEmail = document.querySelectorAll(".form-email"),
    userPhone = document.querySelectorAll(".form-phone");

  forms.addEventListener("input", () => {
    event.target.value = event.target.value.replace(/[^[а-яА-Я \-]*/g, "");
    //Разрешается только ввод кириллицы в любом регистре, дефиса и пробела
  });

  userName.forEach((e) => {
    e.addEventListener("input", () => {
      event.target.value = event.target.value.replace(/[^[а-яА-Я \-]*/g, "");
      //Разрешается только ввод кириллицы в любом регистре, дефиса и пробела
    });
  });

  userEmail.forEach((e) => {
    e.addEventListener("input", () => {
      event.target.value = event.target.value.replace(
        /[^[a-zA-Z_@.!~*' \-]*/g,
        ""
      );
      //Разрешается только ввод латиницы в любом регистре и спецсимволы:  @  -  _  . ! ~ * '
    });
  });

  userPhone.forEach((e) => {
    e.addEventListener("input", () => {
      event.target.value = event.target.value.replace(/[^[0-9()-]*/g, "");
      //Разрешается только ввод цифр, круглых скобок и дефис
    });
  });
};

export default formsValidation;
