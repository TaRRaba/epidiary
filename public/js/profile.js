const addInfo = document.querySelector('#addInfo');
const hideInfo = document.querySelector('#hideInfo');
const moreInfo = document.querySelector('#moreInfo');
const userInfo = document.querySelector('#userInfo');

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
