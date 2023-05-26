const buttonDopInfo = document.getElementById('buttonDopInfo');
const divDopInfo = document.getElementById('divDopInfo');

buttonDopInfo?.addEventListener('click', (event) => {
  if (divDopInfo.style.display === 'none') {
    divDopInfo.style.display = 'block';
    buttonDopInfo.innerText = 'Скрыть информацию';
  } else {
    divDopInfo.style.display = 'none';
    buttonDopInfo.innerText = 'Посмотреть все';
  }
});
