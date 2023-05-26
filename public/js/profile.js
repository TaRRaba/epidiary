const addInfo = document.querySelector('#addInfo');
const hideInfo = document.querySelector('#hideInfo');
const moreInfo = document.querySelector('#moreInfo');
const userInfo = document.querySelector('#userInfo');
const addQ2sel = document.querySelector('#addQ2sel');
const addQ2inp = document.querySelector('#addQ2inp');

const docDiv = document.querySelector('.docDiv');
const docValue = document.querySelector('.docValue');
const docSelect = document.querySelector('.docSelect');
const changeDoc = document.querySelector('#changeDoc');
const saveDoc = document.querySelector('#saveDoc');
const attContainer = document.querySelector('.attContainer');

attContainer?.addEventListener('click', async (event) => {
  if (event.target.classList.contains('attDelBtn')) {
    const data = { id: event.target.id };
    try {
      const response = await fetch('/attack', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.status === 200) {
        window.location.replace('/users/profile');
      }
    } catch (error) {
      console.log(error);
    }
  }
});

userInfo?.addEventListener('click', (event) => {
  if (event.target.classList.contains('addInfo')) {
    moreInfo.classList.replace('hidden', 'visible');
    hideInfo.classList.replace('hidden', 'visible');
    addInfo.classList.replace('visible', 'hidden');
  }
  if (event.target.classList.contains('hideInfo')) {
    moreInfo.classList.replace('visible', 'hidden');
    hideInfo.classList.replace('visible', 'hidden');
    addInfo.classList.replace('hidden', 'visible');
  }
});

addQ2sel?.addEventListener('change', () => {
  if (addQ2sel.value === 'Свой вариант') {
    addQ2inp.classList.replace('hidden', 'visible');
  } else {
    addQ2inp.classList.replace('visible', 'hidden');
  }
});

docDiv?.addEventListener('click', async (event) => {
  if (event.target.id === 'changeDoc') {
    docValue.classList.replace('visible', 'hidden');
    docSelect.classList.replace('hidden', 'visible');
    changeDoc.classList.replace('visible', 'hidden');
    saveDoc.classList.replace('hidden', 'visible');
    docSelect.value = docValue.innerText;
  }
  if (event.target.id === 'saveDoc') {
    const data = { docName: docSelect.value };
    try {
      const response = await fetch('/api/users/userDoc', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.status === 200) {
        docValue.innerText = docSelect.value;
        docValue.classList.replace('hidden', 'visible');
        docSelect.classList.replace('visible', 'hidden');
        changeDoc.classList.replace('hidden', 'visible');
        saveDoc.classList.replace('visible', 'hidden');
      }
    } catch (error) {
      console.log(error);
    }
  }
});
