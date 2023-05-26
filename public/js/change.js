const changeButton = document.querySelector('.changeButton');

changeButton.addEventListener('click', async (event) => {
  if (event.target.id === 'changeButtonId') {
    try {
      const response = await fetch('/profile/data');
      const result = await response.json();
      if (result) {
        document.querySelector('.containerInfo').remove();
        const newContainer = document.createElement('div');
        newContainer.classList.add('containerInfo', 'items-center', 'flex', 'flex-col', 'justify-evenly', 'p-4', 'auto-cols-max');
        const newDiv = `
<div class="flex flex-col items-center">

<div class="containerInfo items-center flex flex-col justify-evenly p-4 auto-cols-max">
<form name="saveForm">

    <div class="mt-4">
      <h5 class="mb-2">
        Ваш возраст:
      </h5>
      <input name='birthDate' value="${result.userInfo.birthDate}" type="number" id="first_name" class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
    </div>

    <div class="mt-4">
      <h5 class="mb-2">
        Пол при рождение:
      </h5>
      <select name="gender" id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option selected>${result.userInfo.gender}</option>
      ${result.userInfo.gender === 'Мужчина' ? (
    '<option>Женщина</option>'
  ) : (
    '<option>Мужчина</option>'
  )}
    </select>
    </div>

    <div>
      <h5 class="font-bold">История заболевания</h5>
    </div>

    <div class="mt-4">
      <h5 class="mb-2">
        В каком возрасте возник первый эпилептический приступ?
      </h5>
      <input name='question1' value="${result.userInfo.question1 ? result.userInfo.question1 : ''}" type="number" class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    </div>

    <div class="mt-4">
    <h5 class="mb-2">
      Устанавливался ли вам диагноз Эпилепсия?
    </h5>
    <select id='noneInput' name="question2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option selected>${result.userInfo.question2}</option>
      ${result.userInfo.question2 === 'Да' ? (
    `<option>Нет</option>
    <option>Свой вариант</option>`
  ) : (
    `<option>Да</option>
    <option>Нет</option>
    <option>Свой вариант</option>`
  )}
    </select>
    <div id="selectInput" style="display: none;">
      <input type="text" name="question2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Введите свой вариант">
    </div>
  </div>

    <div class="mt-4">
      <h5 class="mb-2">
      У кого-либо из Ваших родственников возникали эпилептические приступы?
      </h5>
      <select name="question3" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option selected>${result.userInfo.question3}</option>
      ${result.userInfo.question3 === 'Да' ? `
        <option>Нет</option>
        <option>Не уверен</option>
      ` : result.userInfo.question3 === 'Нет' ? `
        <option>Да</option>
        <option>Не уверен</option>
      ` : `
        <option>Да</option>
        <option>Нет</option>
        <option>Не уверен</option>
      `}
    </select>
    </div>

    <div class="mt-4">
      <h5 class="mb-2">
      Отмечали ли осложнения при Вашем вынашевании/родах?
      </h5>
      <select name="question4" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option selected>${result.userInfo.question4}</option>
      ${result.userInfo.question4 === 'Да' ? `
        <option>Нет</option>
        <option>Не уверен</option>
      ` : result.userInfo.question4 === 'Нет' ? `
        <option>Да</option>
        <option>Не уверен</option>
      ` : `
        <option>Да</option>
        <option>Нет</option>
        <option>Не уверен</option>
      `}
    </select>
    </div>

    <div class="mt-4">
    <h5 class="mb-2">
    Отмечались ли задержки психомоторного развития в раннем детском периоде?
    </h5>
    <select name="question5" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>${result.userInfo.question5}</option>
    ${result.userInfo.question5 === 'Да' ? `
    <option>Нет</option>
    <option>Не уверен</option>
  ` : result.userInfo.question5 === 'Нет' ? `
    <option>Да</option>
    <option>Не уверен</option>
  ` : `
    <option>Да</option>
    <option>Нет</option>
    <option>Не уверен</option>
  `}
  </select>
  </div>

  <div class="mt-4">
  <h5 class="mb-2">
  Испытывали ли Вы судороги мышц на высокую температуру в детском возрасте?
  </h5>
  <select name="question6<option>Да</option>" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>${result.userInfo.question6}</option>
  ${result.userInfo.question6 === 'Да' ? `
  <option>Нет</option>
  <option>Не уверен</option>
` : result.userInfo.question6 === 'Нет' ? `
  <option>Да</option>
  <option>Не уверен</option>
` : `
  <option>Да</option>
  <option>Нет</option>
  <option>Не уверен</option>
`}
</select>
</div>

<div class="mt-4">
<h5 class="mb-2">
Есть ли иные неврологические заболевания?
</h5>
<input name='question7' value="${result.userInfo.question7 ? result.userInfo.question7 : ''}" type="text" id="first_name" class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>

<div class="mt-4">
<h5 class="mb-2">
Проходили ли Вы хирургическое лечение от эпилепсии?
</h5>
<select name="question8" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
<option selected>${result.userInfo.question8}</option>
${result.userInfo.question8 === 'Да' ? `
<option>Нет</option>
` : result.userInfo.question8 === 'Нет' ? `
<option>Да</option>
` : `
<option>Да</option>
<option>Нет</option>
`}
</select>
</div>

<div>
<h5 class="font-bold">История заболевания</h5>
</div>

<div class="mt-4">
<h5 class="mb-2">
Отмечаете ли Вы такие симптомы как снижение концентрации внимания или ухудшение памяти?
</h5>
<select name="question9" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
${result.userInfo.question9 === 'Да' ? `
<option>Нет</option>
` : result.userInfo.question9 === 'Нет' ? `
<option>Да</option>
` : `
<option>Да</option>
<option>Нет</option>
`}
</select>
</div>

<div class="mt-4">
<h5 class="mb-2">
Испытывали ли Вы сложности общении или социокультурном взаимодействии из-за установленного диагноза Эпилепсия?
</h5>
<select name="question10" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
<option selected>${result.userInfo.question10}</option>
${result.userInfo.question10 === 'Да' ? `
<option>Нет</option>
` : result.userInfo.question10 === 'Нет' ? `
<option>Да</option>
` : `
<option>Да</option>
<option>Нет</option>
`}
</select>
</div>

<div class="mt-4">
<h5 class="mb-2">
Справляетесь ли Вы с эмоциональными и психологическими аспектами своего заболевания?
</h5>
<select name="question11" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
<option selected>${result.userInfo.question11}</option>
${result.userInfo.question11 === 'Да' ? `
<option>Нет</option>
` : result.userInfo.question11 === 'Нет' ? `
<option>Да</option>
` : `
<option>Да</option>
<option>Нет</option>
`}
</select>
</div>

<div class="mt-4">
<h5 class="mb-2">
Пользуетесь ли Вы транспортным средством в качестве водителя?
</h5>
<select name="question12" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
<option selected>${result.userInfo.question12}</option>
${result.userInfo.question12 === 'Да' ? `
<option>Нет</option>
` : result.userInfo.question12 === 'Нет' ? `
<option>Да</option>
` : `
<option>Да</option>
<option>Нет</option>
`}
</select>
</div>

    <div class="mt-4">
      <button type="submit" class="mt-2 saveButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Сохранить изменения
      </button>
      </div>
      <input name="id" type="hidden" value="${result.id}"/>
      </form>

    </div>
`;
        newContainer.innerHTML = newDiv;
        const changeDiv = document.querySelector('.changeDiv');
        changeDiv.appendChild(newContainer);

        const noneInput = document.getElementById('noneInput');
        const selectInput = document.getElementById('selectInput');

        if (noneInput && selectInput) {
          console.log(noneInput);

          noneInput.addEventListener('change', () => {
            if (noneInput.value === 'Свой вариант') {
              selectInput.style.display = 'block';
            } else {
              selectInput.style.display = 'none';
            }
          });
        }
      }
      const { saveForm } = document.forms;

      saveForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const data = new FormData(saveForm);
        try {
          const response = await fetch('/profile/data', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(data)),
          });
          const result = await response;
          if (result.ok) {
            window.location.href = '/profile';
          }
        } catch (error) {
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
});
