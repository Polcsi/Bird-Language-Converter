const chars = [
  "a",
  "á",
  "e",
  "é",
  "o",
  "ö",
  "ó",
  "ő",
  "u",
  "ú",
  "ü",
  "ű",
  "i",
  "í",
];

function convertToNormalLanguage(str) {
  let charStr = str.split("");
  for (let i = 0; i < charStr.length; ++i) {
    chars.every(function (el, index) {
      if (
        charStr[i].includes(el) &&
        charStr[i + 1] === "v" &&
        charStr[i + 2] === el
      ) {
        charStr.splice(i + 1, 2);
      }
      return true;
    });
  }
  return charStr.join("");
}

function convertToBirdLanguage(str) {
  let charStr = str.split("");
  for (let i = 0; i < str.length; ++i) {
    chars.every(function (el) {
      if (str[i].includes(el)) {
        charStr[i] = swap(str[i]);
      }
      return true;
    });
  }
  return charStr.join("");
}

function swap(char) {
  return `${char}v${char}`;
}

function isBirdLanguage(str) {
  let charStr = str.split("");
  let isTrue = false;
  for (let i = 0; i < charStr.length; ++i) {
    chars.every(function (el, index) {
      if (
        charStr[i].includes(el) &&
        charStr[i + 1] === "v" &&
        charStr[i + 2] === el
      ) {
        isTrue = true;
      }
      return true;
    });
  }
  return isTrue;
}
const forms = (document.querySelector("form").onsubmit = handleSubmit);
const resultDisplay = document.querySelector(".result");

function handleSubmit(e) {
  e.preventDefault();
  let formValue = e.target[0].value;
  if (!isBirdLanguage(formValue)) {
    resultDisplay.textContent = convertToBirdLanguage(formValue);
  } else {
    resultDisplay.textContent = convertToNormalLanguage(formValue);
  }
}
