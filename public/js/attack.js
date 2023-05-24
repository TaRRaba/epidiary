// const { attackForm } = document.forms;
const attackForm = document.querySelector(".attackForm");

const question1Select = document.querySelector(".question1Select");
const question1Input = document.querySelector(".question1Input");
const question2Select = document.querySelector(".question2Select");
const question2Input = document.querySelector(".question2Input");

const additionalInfo = document.querySelector(".additionalInfo");
const infoDivButton = document.querySelector(".infoDivButton");
const hideDivButton = document.querySelector(".hideDivButton");

const question4Select = document.querySelector(".question4Select");
const question4Input = document.querySelector(".question4Input");
const question6Select = document.querySelector(".question6Select");
const question6Input = document.querySelector(".question6Input");

const question8Select = document.querySelector(".question8Select");
const question8Input = document.querySelector(".question8Input");
const question9Select = document.querySelector(".question9Select");
const question9Input = document.querySelector(".question9Input");

attackForm?.addEventListener("click", (event) => {
  event.preventDefault();
  //   console.log(event.target);
  if (question1Select.value === "Свой вариант") {
    question1Input.classList.replace("hidden", "visible");
  } else {
    question1Input.classList.replace("visible", "hidden");
  }
  if (question2Select.value === "Свой вариант") {
    question2Input.classList.replace("hidden", "visible");
  } else {
    question2Input.classList.replace("visible", "hidden");
  }

  if (event.target.dataset.info) {
    additionalInfo.classList.replace("hidden", "visible");
    infoDivButton.classList.replace("visible", "hidden");
    hideDivButton.classList.replace("hidden", "visible");
  }

  if (event.target.dataset.hide) {
    additionalInfo.classList.replace("visible", "hidden");
    infoDivButton.classList.replace("hidden", "visible");
    hideDivButton.classList.replace("visible", "hidden");
  }

  if (question4Select.value === "Свой вариант") {
    question4Input.classList.replace("hidden", "visible");
  } else {
    question4Input.classList.replace("visible", "hidden");
  }

  if (question6Select.value === "Свой вариант") {
    question6Input.classList.replace("hidden", "visible");
  } else {
    question6Input.classList.replace("visible", "hidden");
  }

  if (question9Select.value === "Свой вариант") {
    question9Input.classList.replace("hidden", "visible");
  } else {
    question9Input.classList.replace("visible", "hidden");
  }
});
