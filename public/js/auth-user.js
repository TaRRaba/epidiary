const { logForm, regForm } = document.forms;

function isValidEmail(email) {
  return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email);
}

function errorMessage(message, parentElement) {
  const errTxt = document.createElement('p');
  errTxt.innerText = message;
  errTxt.style.color = 'red';
  parentElement.appendChild(errTxt);
  setTimeout(() => {
    errTxt.remove();
  }, 4000);
}

async function submitForm(endpoint, form) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: form.email.value,
      pswd: form.pswd.value,
    }),
  });
  return response;
}

regForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (isValidEmail(event.target.email.value)) {
    try {
      const response = await submitForm('/auth/reg', event.target);

      if (response.status === 200) {
        window.location.href = '/users/profile';
      } else {
        errorMessage(
          'Адрес электронной почты уже занят',
          regForm,
        );
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    errorMessage(
      'Не верный формат электронной почты.',
      regForm,
    );
  }
});

logForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (isValidEmail(event.target.email.value)) {
    try {
      const response = await submitForm('/auth/login', event.target);

      if (response.status === 200) {
        window.location.href = '/users/profile';
      } else {
        errorMessage(
          'Неправильный адрес электронной почты или пароль',
          logForm,
        );
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    errorMessage(
      'Введите правильный формат электронной почты. Пример - example@example.com',
      logForm,
    );
  }
});
