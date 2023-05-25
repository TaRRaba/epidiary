/* eslint-disable no-restricted-syntax */
const attackInfoDiv = document.querySelector('.attackInfoDiv');

attackInfoDiv?.addEventListener('click', (event) => {
  if (event.target.dataset.back) {
    window.location = '/';
  }

  if (event.target.dataset.backDoc) {
    window.location = '/patientDetails';
  }
});

const { check7, check15 } = document.forms;
const question1value = document.querySelector('.question1value');
const question2value = document.querySelector('.question2value');
const question2select = document.querySelector('.question2Select');
const question3value = document.querySelector('.question3value');
const question3div = document.querySelector('.question3div');
const question1Input = document.querySelector('.question1Input');
const question2div = document.querySelector('.question2div');
const question3Select = document.querySelector('.question3Select');
const question3Input = document.querySelector('.question3Input');
const question4Select = document.querySelector('.question4Select');
const question4Input = document.querySelector('.question4Input');
const question5Input = document.querySelector('.question5Input');
const question4div = document.querySelector('.question4div');
const question4value = document.querySelector('.question4value');
const question5value = document.querySelector('.question5value');
const question6Select = document.querySelector('.question6Select');
const question6div = document.querySelector('.question6div');
const question6Input = document.querySelector('.question6Input');
const question6value = document.querySelector('.question6value');
const question8Select = document.querySelector('.question8Select');
const question8div = document.querySelector('.question8div');
const question8Input = document.querySelector('.question8Input');
const question8value = document.querySelector('.question8value');
const question9Select = document.querySelector('.question9Select');
const question9div = document.querySelector('.question9div');
const question9value = document.querySelector('.question9value');
const question10Input = document.querySelector('.question10Input');
const question10value = document.querySelector('.question10value');
const question11Select = document.querySelector('.question11Select');
const question11value = document.querySelector('.question11value');
const question11div = document.querySelector('.question11div');
const question12Select = document.querySelector('.question12Select');
const question12Input = document.querySelector('.question12Input');
const question12value = document.querySelector('.question12value');
const question12div = document.querySelector('.question12div');
const question13Select = document.querySelector('.question13Select');
const question13value = document.querySelector('.question13value');
const question13div = document.querySelector('.question13div');
const question14Input = document.querySelector('.question14Input');
const question14value = document.querySelector('.question14value');
const question16Select = document.querySelector('.question16Select');
const question16value = document.querySelector('.question16value');
const question16div = document.querySelector('.question16div');
const question17Select = document.querySelector('.question17Select');
const question17Input = document.querySelector('.question17Input');
const question17value = document.querySelector('.question17value');
const question17div = document.querySelector('.question17div');
const question18Select = document.querySelector('.question18Select');
const question18Input = document.querySelector('.question18Input');
const question18value = document.querySelector('.question18value');
const question18div = document.querySelector('.question18div');
const question19Select = document.querySelector('.question19Select');
const question19value = document.querySelector('.question19value');
const question19div = document.querySelector('.question19div');
const question20Select = document.querySelector('.question20Select');
const question20Input = document.querySelector('.question20Input');
const question20value = document.querySelector('.question20value');
const question20div = document.querySelector('.question20div');
const editInfo = document.querySelector('#editInfo');
const saveInfo = document.querySelector('#saveInfo');
//-------------------------------------------------------------------------------------

let question1;
let question3;
let question4;
let question6;
const question7 = [];
let question12;
const question15 = [];
let question17;
let question18;
let question20;

attackInfoDiv?.addEventListener('change', async () => {
  if (question3Select.value === 'Свой вариант') {
    question3Input.classList.replace('hidden', 'visible');
    question3 = question3Input.value.trim();
  } else {
    question3Input.classList.replace('visible', 'hidden');
    question3 = question3Select.value;
  }

  if (question4Select.value === 'Свой вариант') {
    question4Input.classList.replace('hidden', 'visible');
    question4 = question4Input.value.trim();
  } else {
    question4Input.classList.replace('visible', 'hidden');
    question4 = question4Select.value;
  }

  if (question6Select.value === 'Свой вариант') {
    question6Input.classList.replace('hidden', 'visible');
    question6 = question6Input.value.trim();
  } else {
    question6Input.classList.replace('visible', 'hidden');
    question6 = question6Select.value;
  }

  if (question12Select.value === 'Свой вариант') {
    question12Input.classList.replace('hidden', 'visible');
    question12 = question12Input.value.trim();
  } else {
    question12Input.classList.replace('visible', 'hidden');
    question12 = question12Select.value;
  }

  if (question17Select.value === 'Свой вариант') {
    question17Input.classList.replace('hidden', 'visible');
    question17 = question17Input.value.trim();
  } else {
    question17Input.classList.replace('visible', 'hidden');
    question17 = question17Select.value;
  }

  if (question18Select.value === 'Свой вариант') {
    question18Input.classList.replace('hidden', 'visible');
    question18 = question18Input.value.trim();
  } else {
    question18Input.classList.replace('visible', 'hidden');
    question18 = question18Select.value;
  }

  if (question20Select.value === 'Свой вариант') {
    question20Input.classList.replace('hidden', 'visible');
    question20 = question20Input.value.trim();
  } else {
    question20Input.classList.replace('visible', 'hidden');
    question20 = question20Select.value;
  }
});

attackInfoDiv?.addEventListener('click', async (event) => {
  if (event.target.id === 'editInfo') {
    editInfo.classList.replace('visible', 'hidden');
    saveInfo.classList.replace('hidden', 'visible');
    question1value.classList.replace('visible', 'hidden');
    question1Input.classList.replace('hidden', 'visible');
    const date = question1value.innerText.split('.');
    question1Input.value = new Date(date[2], date[1] - 1, date[0]).toLocaleDateString('fr-CA');

    question2div.classList.replace('hidden', 'visible');
    question2value.classList.replace('visible', 'hidden');
    question2select.value = question2value.innerText;

    const q3values = [];
    question3div.classList.replace('hidden', 'visible');
    question3value.classList.replace('visible', 'hidden');
    for (let i = 0; i < question3Select.children.length; i++) {
      q3values.push(question3Select.children[i].value);
    }
    if (q3values.includes(question3value.innerText)) {
      question3Select.value = question3value.innerText;
    } else {
      question3Input.classList.replace('hidden', 'visible');
      question3Select.value = question3Select.lastChild.value;
      question3Input.value = question3value.innerText;
    }

    const q4values = [];
    question4div.classList.replace('hidden', 'visible');
    question4value.classList.replace('visible', 'hidden');
    for (let i = 0; i < question4Select.children.length; i++) {
      q4values.push(question4Select.children[i].value);
    }
    if (q4values.includes(question4value.innerText)) {
      question4Select.value = question4value.innerText;
    } else {
      question4Input.classList.replace('hidden', 'visible');
      question4Select.value = question4Select.lastChild.value;
      question4Input.value = question4value.innerText;
    }

    question5Input.classList.replace('hidden', 'visible');
    question5value.classList.replace('visible', 'hidden');
    question5Input.value = question5value.innerText;

    const q6values = [];
    question6div.classList.replace('hidden', 'visible');
    question6value.classList.replace('visible', 'hidden');
    for (let i = 0; i < question6Select.children.length; i++) {
      q6values.push(question6Select.children[i].value);
    }
    if (q6values.includes(question6value.innerText)) {
      question6Select.value = question6value.innerText;
    } else {
      question6Input.classList.replace('hidden', 'visible');
      question6Select.value = question6Select.lastChild.value;
      question6Input.value = question6value.innerText;
    }

    const q8values = [];
    question8div.classList.replace('hidden', 'visible');
    question8value.classList.replace('visible', 'hidden');
    for (let i = 0; i < question8Select.children.length; i++) {
      q8values.push(question8Select.children[i].value);
    }
    const valueData = question8value.innerText.split(' ');
    question8Select.value = String(q8values.filter((el) => el === valueData[1]));
    question8Input.value = valueData[0];

    question9div.classList.replace('hidden', 'visible');
    question9value.classList.replace('visible', 'hidden');
    question9Select.value = question9value.innerText;

    question10Input.classList.replace('hidden', 'visible');
    question10value.classList.replace('visible', 'hidden');
    question10Input.value = question10value.innerText;

    question11div.classList.replace('hidden', 'visible');
    question11value.classList.replace('visible', 'hidden');
    question11Select.value = question11value.innerText;

    const q12values = [];
    question12div.classList.replace('hidden', 'visible');
    question12value.classList.replace('visible', 'hidden');
    for (let i = 0; i < question12Select.children.length; i++) {
      q12values.push(question12Select.children[i].value);
    }
    if (q12values.includes(question12value.innerText)) {
      question12Select.value = question12value.innerText;
    } else {
      question12Input.classList.replace('hidden', 'visible');
      question12Select.value = question12Select.lastChild.value;
      question12Input.value = question12value.innerText;
    }

    question13div.classList.replace('hidden', 'visible');
    question13value.classList.replace('visible', 'hidden');
    question13Select.value = question13value.innerText;

    question14Input.classList.replace('hidden', 'visible');
    question14value.classList.replace('visible', 'hidden');
    question14Input.value = question14value.innerText;

    question16div.classList.replace('hidden', 'visible');
    question16value.classList.replace('visible', 'hidden');
    question16Select.value = question16value.innerText;

    const q17values = [];
    question17div.classList.replace('hidden', 'visible');
    question17value.classList.replace('visible', 'hidden');
    for (let i = 0; i < question17Select.children.length; i++) {
      q17values.push(question17Select.children[i].value);
    }
    if (q17values.includes(question17value.innerText)) {
      question17Select.value = question17value.innerText;
    } else {
      question17Input.classList.replace('hidden', 'visible');
      question17Select.value = question17Select.lastChild.value;
      question17Input.value = question17value.innerText;
    }

    const q18values = [];
    question18div.classList.replace('hidden', 'visible');
    question18value.classList.replace('visible', 'hidden');
    for (let i = 0; i < question18Select.children.length; i++) {
      q18values.push(question18Select.children[i].value);
    }
    if (q18values.includes(question18value.innerText)) {
      question18Select.value = question18value.innerText;
    } else {
      question18Input.classList.replace('hidden', 'visible');
      question18Select.value = question18Select.lastChild.value;
      question18Input.value = question18value.innerText;
    }

    question19div.classList.replace('hidden', 'visible');
    question19value.classList.replace('visible', 'hidden');
    question19Select.value = question19value.innerText;

    const q20values = [];
    question20div.classList.replace('hidden', 'visible');
    question20value.classList.replace('visible', 'hidden');
    for (let i = 0; i < question20Select.children.length; i++) {
      q20values.push(question20Select.children[i].value);
    }
    if (q20values.includes(question20value.innerText)) {
      question20Select.value = question20value.innerText;
    } else {
      question20Input.classList.replace('hidden', 'visible');
      question20Select.value = question20Select.lastChild.value;
      question20Input.value = question20value.innerText;
    }

    // --7-----------------------------------------------------------

    const question7value = document.querySelector('.question7value');
    const question7checkbox = document.querySelector('.check-form7');
    question7value.classList.replace('visible', 'hidden');
    question7checkbox.classList.replace('hidden', 'visible');
    const inputs7 = Array.from(check7);
    const values7 = Array.from(question7value.children).map((el) => el.innerText);
    const inputValues7 = inputs7.map((el) => el.value).slice(0, -2);
    const checked7 = [];
    const notChecked7 = [];
    for (let i = 0; i < values7.length; i++) {
      for (let j = 0; j < inputs7.length; j++) {
        if (values7[i] === inputs7[j].value) {
          checked7.push(inputs7[j].id);
        } else if (!inputValues7.includes(values7[i])) {
          notChecked7.push(values7[i]);
        }
      }
    }
    if (notChecked7.length > 0) {
      document.getElementById(inputs7[inputs7.length - 2].id).checked = true;
      inputs7[inputs7.length - 1].removeAttribute('hidden');
      document.querySelector('#labl').setAttribute('hidden', 'hidden');
      inputs7[inputs7.length - 1].value = notChecked7[0];
    }
    checked7.forEach((el) => document.getElementById(el).checked = true);

    // --15-----------------------------------------------------------

    const question15value = document.querySelector('.question15value');
    const question15checkbox = document.querySelector('.check-form15');
    question15value.classList.replace('visible', 'hidden');
    question15checkbox.classList.replace('hidden', 'visible');
    const inputs15 = Array.from(check15);
    const values15 = Array.from(question15value.children).map((el) => el.innerText);
    const inputValues15 = inputs15.map((el) => el.value).slice(0, -2);
    const checked15 = [];
    const notChecked15 = [];
    for (let i = 0; i < values15.length; i++) {
      for (let j = 0; j < inputs15.length; j++) {
        if (values15[i] === inputs15[j].value) {
          checked15.push(inputs15[j].id);
        } else if (!inputValues15.includes(values15[i])) {
          notChecked15.push(values15[i]);
        }
      }
    }
    if (notChecked15.length > 0) {
      document.getElementById(inputs15[inputs15.length - 2].id).checked = true;
      inputs15[inputs15.length - 1].removeAttribute('hidden');
      document.querySelector('#lablPrecond').setAttribute('hidden', 'hidden');
      inputs15[inputs15.length - 1].value = notChecked15[0];
    }
    checked15.forEach((el) => document.getElementById(el).checked = true);
  }

  if (event.target.id === 'back') {
    window.location = '/';
  }

  if (event.target.id === 'saveInfo') {
    question1 = question1Input.value;
    question3 = question3Input.value;
    question4 = question4Input.value;
    question6 = question6Input.value;
    question12 = question12Input.value;
    question17 = question17Input.value;
    question18 = question18Input.value;
    question20 = question20Input.value;
    const question2 = document.querySelector('.question2Select').value.trim();
    const question5 = document.querySelector('.question5Input').value.trim();
    const question8 = `${document.querySelector('.question8Input').value} ${
      document.querySelector('.question8Select').value
    }`;
    const question9 = document.querySelector('.question9Select').value.trim();
    const question10 = document.querySelector('.question10Input').value.trim();
    const question11 = document.querySelector('.question11Select').value.trim();
    const question13 = document.querySelector('.question13Select').value.trim();
    const question14 = document.querySelector('.question14Input').value.trim();
    const question16 = document.querySelector('.question16Select').value.trim();
    const question19 = document.querySelector('.question19Select').value.trim();
    const attackID = document.querySelector('.attackID');
    const dataID = { id: attackID.id };

    for (const node of check7) {
      if (node.checked) {
        question7.push(node.value);
      }
    }

    if (question7[question7.length - 1] === '') {
      question7.pop();
      question7.push(document.querySelector('#svoi').value.trim());
    }

    for (const node of check15) {
      if (node.checked) {
        question15.push(node.value);
      }
    }

    if (question15[question15.length - 1] === '') {
      question15.pop();
      question15.push(document.querySelector('#svoi15').value.trim());
    }

    const data = {
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
      question13,
      question14,
      question15,
      question16,
      question17,
      question18,
      question19,
      question20,
    };

    const response = await fetch('/api/users/attacks/edit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ dataID, data }),
    });
    const result = await response.json();

    if (result.status === 'ok') {
      window.location = '/';
    } else {
      alert('Не удалось добавить приступ!');
    }
  }
});

document.querySelector('#q7-7').addEventListener('click', (e) => {
  if (e.target.checked) {
    document.querySelector('#labl').setAttribute('hidden', 'hidden');
    document.querySelector('#svoi').removeAttribute('hidden');
  } else {
    document.querySelector('#labl').removeAttribute('hidden');
    document.querySelector('#svoi').setAttribute('hidden', 'hidden');
  }
});

document.querySelector('#qPrecond').addEventListener('click', (e) => {
  if (e.target.checked) {
    document.querySelector('#lablPrecond').setAttribute('hidden', 'hidden');
    document.querySelector('#svoi15').removeAttribute('hidden');
  } else {
    document.querySelector('#lablPrecond').removeAttribute('hidden');
    document.querySelector('#svoi15').setAttribute('hidden', 'hidden');
  }
});
