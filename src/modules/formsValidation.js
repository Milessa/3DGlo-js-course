"use strict";
const formsValidation = () => {
  const forms = document.querySelector(".mess"),
    userName = document.querySelectorAll("input[name=user_name]"),
    userEmail = document.querySelectorAll(".form-email"),
    userPhone = document.querySelectorAll(".form-phone");

  let callAfterValidation = () => {
    afterValidationSH();
    afterValidationText();
  };

  let afterValidationText = () => {
    event.target.value =
      event.target.value.charAt(0).toUpperCase() +
      event.target.value.substr(1).toLowerCase();
    //Первая буква каждого слова должна приводиться к верхнему регистру, а все остальные — к нижнему
  };

  let afterValidationSH = (e) => {
    //Несколько идущих подряд пробелов должны заменяться на один
    event.target.value = event.target.value
      .replace(/\s+/g, " ")
      .replace(/^\s*|\s*$/g, "");
    //Пробелы в начале и конце значения должны удаляться

    //Несколько идущих подряд дефисов должны заменяться на один
    event.target.value = event.target.value
      .replace(/-+/g, "-")
      .replace(/^\-*|\-*$/g, "");
    //Дефисы в начале и конце значения должны удаляться
  };

  forms.addEventListener("input", () => {
    forms.onblur = () => {
      event.target.value = event.target.value.replace(/[^[а-яА-Я \-]*/g, "");
      //Разрешается только ввод кириллицы в любом регистре, дефиса и пробела
      callAfterValidation(forms);
    };
  });

  userName.forEach((e) => {
    e.addEventListener("input", () => {
      e.onblur = () => {
        event.target.value = event.target.value.replace(/[^[а-яА-Я \-]*/g, "");
        //Разрешается только ввод кириллицы в любом регистре, дефиса и пробела

        callAfterValidation(e);
      };
    });
  });

  userEmail.forEach((e) => {
    e.addEventListener("input", () => {
      e.onblur = () => {
        event.target.value = event.target.value.replace(
          /[^[a-zA-Z_@.!~*' \-]*/g,
          ""
        );
        //Разрешается только ввод латиницы в любом регистре и спецсимволы:  @  -  _  . ! ~ * '
        afterValidationSH(e);
      };
    });
  });

  userPhone.forEach((e) => {
    e.addEventListener("input", () => {
      e.onblur = () => {
        event.target.value = event.target.value.replace(/[^[0-9()-]*/g, "");
        //Разрешается только ввод цифр, круглых скобок и дефис
        afterValidationSH(e);
      };
    });
  });
};

export default formsValidation;
