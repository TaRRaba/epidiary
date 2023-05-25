const addInfo = document.querySelector('#addInfo');
const hideInfo = document.querySelector('#hideInfo');
const moreInfo = document.querySelector('#moreInfo');
const userInfo = document.querySelector('#userInfo');
const extraInfo = document.querySelector('#extraInfo');
const addQ2sel = document.querySelector('#addQ2sel');
const addQ2inp = document.querySelector('#addQ2inp');

userInfo?.addEventListener('click', (event) => {
  if (event.target.classList.contains('addInfo')) {
    moreInfo.classList.replace('hidden', 'visible');
    hideInfo.classList.replace('hidden', 'visible');
    addInfo.classList.replace('visible', 'hidden');
    extraInfo.value = 'true';
  }
  if (event.target.classList.contains('hideInfo')) {
    moreInfo.classList.replace('visible', 'hidden');
    hideInfo.classList.replace('visible', 'hidden');
    addInfo.classList.replace('hidden', 'visible');
    extraInfo.value = 'false';
  }
});

addQ2sel?.addEventListener('change', () => {
  if (addQ2sel.value === 'Свой вариант') {
    addQ2inp.classList.replace('hidden', 'visible');
  } else {
    addQ2inp.classList.replace('visible', 'hidden');
  }
});
