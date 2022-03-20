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
const text = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat lacinia leo, ut placerat arcu aliquet eu. Fusce convallis lacinia risus, sit amet auctor nunc viverra vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras id laoreet est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque id faucibus sapien. Ut ultricies ligula eget maximus euismod.",
  "Aliquam maximus libero sit amet orci dictum mollis eget rutrum ante. Aliquam placerat a neque nec pellentesque. Curabitur scelerisque tortor nibh, vel ornare nulla fringilla at. Nulla facilisi. Aliquam erat volutpat. Quisque ullamcorper scelerisque ipsum, et vehicula lectus sollicitudin ac. Duis tristique auctor ante, eu tincidunt nisl egestas at. In est metus, viverra vitae nulla nec, tempus tempus neque. Ut maximus, urna id feugiat iaculis, erat augue luctus turpis, a porttitor justo ex non nulla. Sed est justo, dapibus in augue sit amet, elementum eleifend urna. Maecenas et dui non felis venenatis sollicitudin. Aliquam non mollis mauris. Nulla ut odio orci. Cras tempus, lectus et egestas bibendum, magna tellus tristique sapien, eget tempor nibh leo vel ex.",
  "Donec consequat, lacus quis laoreet pretium, quam velit gravida dui, in accumsan arcu ipsum in massa. Praesent et ullamcorper enim. Aliquam erat volutpat. Mauris tempus quam ut mollis luctus. Suspendisse semper magna nec lacus congue, ut eleifend metus commodo. Phasellus rutrum nibh non nisi efficitur, ac ultricies lorem blandit. Nam eu felis sit amet nisl feugiat placerat. Donec ipsum lacus, scelerisque ut libero vel, molestie consequat tellus. Vestibulum suscipit eu ligula in cursus.",
  "Sed feugiat eu enim eu efficitur. Suspendisse cursus dolor vel placerat pulvinar. Integer porta massa semper ex tempus scelerisque. Vivamus sed eleifend ante. Praesent facilisis pretium est, sit amet aliquet metus iaculis quis. Quisque fermentum justo a dolor suscipit aliquam. Curabitur in lacus mollis augue lacinia bibendum. Etiam vel justo eleifend, molestie eros et, porttitor lectus.",
  "Vivamus vestibulum sem sapien, et pretium quam pharetra in. Cras interdum nibh sed posuere porttitor. Suspendisse potenti. Aenean lobortis congue turpis eu ullamcorper. Pellentesque sed dignissim augue. Nullam sed magna ante. Cras malesuada lorem a feugiat viverra. Quisque id lectus sollicitudin, convallis odio vitae, mollis nisl. Proin et ultricies elit, et commodo purus. Quisque venenatis sollicitudin urna, nec pulvinar magna lacinia eget. Nulla suscipit id nisl eu facilisis. Nulla facilisi. In hac habitasse platea dictumst. Etiam turpis mauris, fringilla id sem in, euismod pellentesque nulla.",
  "Nam quis felis sed eros vehicula pellentesque vitae varius sem. Morbi finibus non ipsum vel fermentum. Aliquam pretium ante sit amet purus porttitor, commodo auctor nulla fringilla. Vestibulum nec semper nunc, nec faucibus purus. Proin nec ornare sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo ante, dapibus ac sapien in, malesuada aliquam mauris. Donec sed felis dui. Integer porta massa eget purus vestibulum faucibus. Fusce eget fermentum nisl, vel vulputate massa. Nunc eu volutpat est. Nam scelerisque enim ut mauris luctus sollicitudin. Donec ornare dui ac justo vestibulum cursus. Aenean sit amet enim a arcu hendrerit consectetur a sed enim. Aenean suscipit eget augue non aliquet. Integer eu dignissim leo.",
  "Donec blandit, lectus vitae lobortis lobortis, lacus enim ultrices odio, vitae fermentum risus nunc consectetur odio. Nunc interdum sit amet purus et consequat. Morbi interdum sed eros eu ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi pretium sed dui non ultrices. Vivamus tempus quis ligula sed mattis. Aliquam in neque vel lorem aliquam dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin justo ex, maximus quis lacinia non, pellentesque in lectus. In gravida eros a posuere consequat. Sed in odio aliquet, feugiat mauris id, vestibulum felis. Phasellus pulvinar, justo at facilisis interdum, mi neque consequat odio, id laoreet nibh ipsum ac odio.",
  "Proin pharetra magna vehicula blandit varius. Donec venenatis maximus imperdiet. Proin molestie, orci suscipit blandit placerat, lacus erat semper lectus, eu malesuada velit purus id massa. Etiam commodo sapien non ante luctus rhoncus. Nam accumsan et nisl iaculis sollicitudin. Pellentesque nec purus efficitur magna interdum tristique vitae sagittis enim. Phasellus consectetur, purus vitae malesuada vehicula, mi augue sodales erat, sed aliquam eros elit auctor augue. Donec eros diam, tincidunt id dolor cursus, laoreet bibendum leo. In maximus diam eu quam eleifend, nec venenatis ipsum consectetur.",
];

function convertToNormalLanguage(str) {
  let charStr = str.split("");
  for (let i = 0; i < charStr.length; ++i) {
    chars.every(function (el) {
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
    chars.every(function (el) {
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

function generateRandomText() {
  return text[Math.floor(Math.random() * text.length)];
}

const forms = (document.querySelector("form").onsubmit = handleSubmit);
const resultDisplay = document.querySelector(".show-result");
const clearBtn = document.querySelector("#clear");
const randomBtn = document.querySelector("#randomText");
const copyBtn = document.querySelector(".copy");
const textArea = document.querySelector("#text");

function handleSubmit(e) {
  e.preventDefault();
  let formValue = e.target[0].value.toLowerCase();
  if (formValue) {
    if (!isBirdLanguage(formValue)) {
      resultDisplay.textContent = convertToBirdLanguage(formValue);
    } else {
      resultDisplay.textContent = convertToNormalLanguage(formValue);
    }
  }
}

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(resultDisplay.textContent);
  copyBtn.textContent = "copied";
  copyBtn.classList.add("copied");
  setTimeout(() => {
    copyBtn.textContent = "copy";
    copyBtn.classList.remove("copied");
  }, 2000);
});

clearBtn.addEventListener("click", () => {
  textArea.value = "";
  resultDisplay.textContent = "Result will be here...";
});

randomBtn.addEventListener("click", () => {
  textArea.value = generateRandomText();
});
