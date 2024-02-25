"use strict";
const formsValidation = () => {
  const forms = document.querySelector(".mess"),
    userName = document.querySelectorAll("input[name=user_name]"),
    userEmail = document.querySelectorAll(".form-email"),
    userPhone = document.querySelectorAll(".form-phone");

  let afterValidationText = () => {
    let char = event.target;
    char.value =
      char.value.trim().charAt(0).toUpperCase() +
      char.value.substr(1).toLowerCase();
    //Первая буква каждого слова должна приводиться к верхнему регистру, а все остальные — к нижнему
  };

  forms.addEventListener("input", () => {
    let text = event.target;
    text.value = text.value.replace(/[^[а-яА-Я 0-9.,:;?!()«»""\-]*/g, "");
    //Разрешается только ввод кириллицы в любом регистре, пробелы, цифры и знаки препинания
    afterValidationText(forms);
  });

  userName.forEach((e) => {
    e.addEventListener("input", () => {
      let name = event.target;
      name.value = name.value.replace(/[^[а-яА-Я ]*/g, "");
      //Разрешается только ввод кириллицы в любом регистре и пробела
      if (name.value.length < 2) {
        name.setCustomValidity("В поле Имя должно быть минимум два символа");
      } else {
        name.setCustomValidity("");
      }
      afterValidationText(e);
    });
  });

  userEmail.forEach((e) => {
    e.addEventListener("input", () => {
      let email = event.target;
      email.value = email.value.replace(/[^[a-zA-Z_@.!~*' \-]*/g, "");
      //Разрешается только ввод латиницы в любом регистре и спецсимволы:  @  -  _  . ! ~ * '
    });
  });

  userPhone.forEach((e) => {
    e.addEventListener("input", () => {
      let phone = event.target;
      phone.value = phone.value.replace(/[^[0-9()+\-]*/g, "");
      //Разрешается только ввод цифр, знака “+”,круглых скобок и дефис

      if (phone.value.length < 5) {
        phone.setCustomValidity("В поле Телефон должно быть от 5 цифр");
      } else if (phone.value.length > 11) {
        phone.setCustomValidity("В поле Телефон должно быть до 11 цифр");
      } else {
        phone.setCustomValidity("");
      }
    });
  });
};

export default formsValidation;
