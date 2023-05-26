const { check7, check15 } = document.forms;
const attackForm = document.querySelector('.attackForm');

const question1Select = document.querySelector('.question1Select');
const question1Input = document.querySelector('.question1Input');

const additionalInfo = document.querySelector('.additionalInfo');
const infoDivButton = document.querySelector('.infoDivButton');
const hideDivButton = document.querySelector('.hideDivButton');

const question3Select = document.querySelector('.question3Select');
const question3Input = document.querySelector('.question3Input');
const question4Select = document.querySelector('.question4Select');
const question4Input = document.querySelector('.question4Input');
const question6Select = document.querySelector('.question6Select');
const question6Input = document.querySelector('.question6Input');
const question12Select = document.querySelector('.question12Select');
const question12Input = document.querySelector('.question12Input');
const question17Select = document.querySelector('.question17Select');
const question17Input = document.querySelector('.question17Input');
const question18Select = document.querySelector('.question18Select');
const question18Input = document.querySelector('.question18Input');
const question20Select = document.querySelector('.question20Select');
const question20Input = document.querySelector('.question20Input');
//-------------------------------------------------------------------------------------

attackForm?.addEventListener('click', async (event) => {
  let question1;
  let question3;
  let question4;
  let question6;
  let question12;
  let question17;
  let question18;
  let question20;

  if (question1Select.value === 'Нет') {
    question1Input.classList.replace('hidden', 'visible');
    question1 = new Date(question1Input.value).toLocaleDateString('ru-RU');
  } else {
    question1Input.classList.replace('visible', 'hidden');
    question1 = new Date().toLocaleDateString('ru-RU');
  }

  if (event.target.dataset.info) {
    additionalInfo.classList.replace('hidden', 'visible');
    infoDivButton.classList.replace('visible', 'hidden');
    hideDivButton.classList.replace('hidden', 'visible');
  }

  if (event.target.dataset.hide) {
    additionalInfo.classList.replace('visible', 'hidden');
    infoDivButton.classList.replace('hidden', 'visible');
    hideDivButton.classList.replace('visible', 'hidden');
  }

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

  if (event.target.dataset.save) {
    //= check7===================================================
    const res = [];
    for (const node of check7) {
      if (node.checked) {
        res.push(node.value);
      }
    }

    if (res[res.length - 1] === '') {
      res.pop();
      res.push(document.querySelector('#svoi').value.trim());
    }

    const question7 = res;

    //= === check15============================================================
    const res15 = [];
    for (const node of check15) {
      if (node.checked) {
        res15.push(node.value);
      }
    }

    if (res15[res15.length - 1] === '') {
      res15.pop();
      res15.push(document.querySelector('#svoi15').value.trim());
    }

    const question15 = res15;
    //= =====================================================================

    const question2 = document.querySelector('.question2Select').value;
    const question5 = document.querySelector('.question5Input').value.trim();

    const question8 = `${document
      .querySelector('.question8Input')
      .value.trim()} ${document.querySelector('.question8Select').value}`;
    const question9 = document.querySelector('.question9Select').value;
    const question10 = document.querySelector('.question10Input').value.trim();
    const question11 = document.querySelector('.question11Select').value;
    const question13 = document.querySelector('.question13Select').value;
    const question14 = document.querySelector('.question14Input').value.trim();
    const question16 = document.querySelector('.question16Select').value;
    const question19 = document.querySelector('.question19Select').value;

    if (
      (question1Input.classList.contains('visible')
        && question1Input.value !== '')
      || question1Input.classList.contains('hidden')
    ) {
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

      const response = await fetch('/attack', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (result.status === 'ok') {
        window.location = '/users/profile';
      } else {
        alert('Не удалось добавить приступ!');
      }
    } else {
      alert('Заполните обязательные поля');
    }
  }

  if (event.target.dataset.cancel) {
    window.location = '/users/profile';
  }
});

// -----input check7 -----------------------------------------------------------
document.querySelector('#q7').addEventListener('click', (e) => {
  if (e.target.checked) {
    document.querySelector('#labl').setAttribute('hidden', 'hidden');
    document.querySelector('#svoi').removeAttribute('hidden');
  } else {
    document.querySelector('#labl').removeAttribute('hidden');
    document.querySelector('#svoi').setAttribute('hidden', 'hidden');
  }
});

// -----input check15 -----------------------------------------------------------
document.querySelector('#qPrecond').addEventListener('click', (e) => {
  if (e.target.checked) {
    document.querySelector('#lablPrecond').setAttribute('hidden', 'hidden');
    document.querySelector('#svoi15').removeAttribute('hidden');
  } else {
    document.querySelector('#lablPrecond').removeAttribute('hidden');
    document.querySelector('#svoi15').setAttribute('hidden', 'hidden');
  }
});
