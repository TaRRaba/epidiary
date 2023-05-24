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

const question9Select = document.querySelector(".question9Select");
const question9Input = document.querySelector(".question9Input");

// const mandatoryQues1 = document.querySelector(".mandatoryQues1");
//-------------------------------------------------------------------------------------

attackForm?.addEventListener("click", async (event) => {
  event.preventDefault();

  let question1;
  let question2;
  let question4;
  let question6;
  let question9;

  if (question1Select.value === "Свой вариант") {
    question1Input.classList.replace("hidden", "visible");
    // question1Input.required = true;
  } else {
    question1Input.classList.replace("visible", "hidden");
    question1 = question1Select.value;
  }

  if (question2Select.value === "Свой вариант") {
    question2Input.classList.replace("hidden", "visible");
  } else {
    question2Input.classList.replace("visible", "hidden");
    question2 = question2Select.value;
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
    question4 = question4Input.value.trim();
  } else {
    question4Input.classList.replace("visible", "hidden");
    question4 = question4Select.value;
  }

  if (question6Select.value === "Свой вариант") {
    question6Input.classList.replace("hidden", "visible");
    question6 = question6Input.value.trim();
  } else {
    question6Input.classList.replace("visible", "hidden");
    question6 = question6Select.value;
  }

  if (question9Select.value === "Свой вариант") {
    question9Input.classList.replace("hidden", "visible");
    question9 = question9Input.value.trim();
  } else {
    question9Input.classList.replace("visible", "hidden");
    question9 = question9Select.value;
  }

  if (event.target.dataset.cancel) {
    window.location = "/";
  }

  if (event.target.dataset.save) {
    const question3 = document.querySelector(".question3Input").value.trim();
    const question5 = document.querySelector(".question5Input").value.trim();
    const question7 = document.querySelector(".question7Input").value.trim();
    const question8In = document.querySelector(".question8Input").value;
    const question8Sel = document.querySelector(".question8Select").value;
    const question8 = `${question8In} ${question8Sel}`;
    const question10 = document.querySelector(".question10Input").value.trim();
    const question11 = document.querySelector(".question11Input").value.trim();
    const question12 = document.querySelector(".question12Input").value.trim();

    // проверка на 2 обязательных инпута-----------------------------------------
    if (
      (question1Input.classList.contains("visible") &&
        question2Input.classList.contains("visible") &&
        question1Input.value !== "" &&
        question2Input.value !== "") ||
      (question1Input.classList.contains("hidden") &&
        question2Input.classList.contains("hidden"))
    ) {
      question1 = question1Input.value.trim();
      question2 = question2Input.value.trim();

      if (additionalInfo.className.includes("hidden")) {
        const response = await fetch("/attack", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question1,
            question2,
          }),
        });
        const result = await response.json();

        if (result.status === "ok") {
          window.location = "/";
        } else {
          alert("Не удалось добавить приступ!");
        }
      } else {
        const response = await fetch("/attack", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question1,
            question2,
            question3,
            question4,
            question5,
            question6,
            question7,
            question8,
            question9,
            question10,
            question11,
            question12,
          }),
        });
        const result = await response.json();

        if (result.status === "ok") {
          window.location = "/";
        } else {
          alert("Не удалось добавить приступ!");
        }
      }
    } else {
      alert("Заполните обязательные поля");
    }
  }
});
