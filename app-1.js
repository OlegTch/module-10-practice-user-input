const formRef = document.querySelector(".js-feedback-form");
const nameRef = document.querySelector(".js-feedback-name");
const mailRef = document.querySelector(".js-feedback-mail");
const textAreaRef = document.querySelector(".js-feedback-text");

getMessageFromLocalStorage(nameRef);
getMessageFromLocalStorage(mailRef);
getMessageFromLocalStorage(textAreaRef);
// console.log(formRef.elements);
// console.log(textAreaRef);
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

nameRef.addEventListener("input", getInputValue);

mailRef.addEventListener("input", getInputValue);

textAreaRef.addEventListener("input", getInputValue);

function onFormSubmit(event) {
  event.preventDefault();
  const form = event.target;

  removeItemFromLS(form.elements.name.name);
  removeItemFromLS(form.elements.mail.name);
  removeItemFromLS(form.elements.text.name);
  form.reset();
}

// function onFormSubmit(event) {
//   event.preventDefault();
//   //   console.log(event);
//   const form = event.target;
// //   let userName = form.elements.name.value;
// //   let userMail = form.elements.mail.value;
// //   let userText = form.elements.text.value;

//   removeItemFromLS("feedbackMessage");
//   form.reset();

//   //   if (feedbackMessage) {
//   //     userText = feedbackMessage;
//   //   }

//   //   console.log(form);
//   //   console.log(form.elements);
//   //   console.log(form.elements.name.value);
//   //   console.log(form.elements.mail.value);
//   //   console.log(form.elements.text.value);
// }

function saveToLS(localStorageKey, localStorageData) {
  localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));
  //   localStorage.setItem("feedbackMessage", String(data));
}

function getMessageFromLocalStorage(element) {
  const feedbackMessage = localStorage.getItem(element.name);
  if (feedbackMessage) {
    element.value = JSON.parse(feedbackMessage);
    // return true;
  }
  //   return false;
}

function removeItemFromLS(itemKey) {
  localStorage.removeItem(itemKey);
}

// eventTarget - элемент, на котором произошло событие (img)
// eventCurrentTarget - элемент, на котором отлавливаем событие (ul)

// formRef.addEventListener("submit", (event, Vova, Sveta) => {
//   onFormSubmit(event, "Vova", "Sveta");
// });
// function onFormSubmit(event, Vova, Sveta) {
//   event.preventDefault();
//   console.log(event);
//   console.log(Vova);
//   console.log(Sveta);
// }
