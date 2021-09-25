const formRef = document.querySelector(".js-feedback-form");
console.log(formRef.elements);
const inputRef = document.querySelectorAll(".js-input");
console.log(inputRef);

inputRef.forEach((element) => {
  getMessageFromLocalStorage(element);
});

formRef.addEventListener("submit", onFormSubmit);

function getInputValue(elementName) {
  const inputText = elementName.target.value;
  console.log(inputText);
  if (inputText.length > 0) {
    saveToLS(elementName.target.name, inputText);
    console.log(elementName.target.name);
  } else {
    removeItemFromLS(elementName.target.name);
  }
}

inputRef.forEach((element) => {
  element.addEventListener("input", getInputValue);
});

function onFormSubmit(event) {
  event.preventDefault();
  const form = event.target;

  inputRef.forEach((element) => {
    removeItemFromLS(element.name);
  });

  form.reset();
}
function saveToLS(localStorageKey, localStorageData) {
  localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));
}

function getMessageFromLocalStorage(element) {
  const feedbackMessage = localStorage.getItem(element.name);
  if (feedbackMessage) {
    element.value = JSON.parse(feedbackMessage);
  }
}

function removeItemFromLS(itemKey) {
  localStorage.removeItem(itemKey);
}

// eventTarget - элемент, на котором произошло событие (img)
// eventCurrentTarget - элемент, на котором отлавливаем событие (ul)
