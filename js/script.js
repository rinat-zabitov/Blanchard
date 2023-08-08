const myForm = document.querySelector(".contacts-form");

myForm.addEventListener("submit", validateForm);

function validateForm(e) {
  e.preventDefault();
  let nameField = document.querySelector('input[name="name"]');
  let phoneField = document.querySelector('input[name="tel"]');
  let validName = document.querySelector(".valid-name");
  let validPhone = document.querySelector(".valid-phone");
  let nameRegExp = /[a-zA-Zа-яА-Я]{2,24}/gi;
  let phoneRegExp =
    /^(\+7|8)(\s|\s\()?\d{3}(\s|\)\s)?\d{2,3}[\s-]?\d{2}[\s-]?\d{2,3}$/g;
  nameRegExp.test(nameField.value)
    ? validName.classList.remove("invalid")
    : validName.classList.add("invalid");
  phoneRegExp.test(phoneField.value)
    ? validPhone.classList.remove("invalid")
    : validPhone.classList.add("invalid");
}
