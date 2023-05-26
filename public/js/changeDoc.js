const changeButton = document.querySelector('#changeButtonId');

changeButton?.addEventListener('click', async (event) => {
  if (event.target.id === 'changeButtonId') {
    try {
      const response = await fetch('/profileDoc/data');
      const result = await response.json();
      if (result) {
        document.querySelector('.containerInfo').remove();
        const newDiv = `
<div class="flex flex-col items-center">

<div class="containerInfo items-center flex flex-col justify-evenly p-4 auto-cols-max">
<form name="saveForm">

    <div class="mt-4">
      <h5 class="mb-2">
       ФИО:
      </h5>
    <input name='fullName' value="${result.fullName}" type="text" class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
    </div>

    <div class="mt-4">
      <h5 class="mb-2">
        Email:
      </h5>
      <input name='email' value="${result.email}" type="email" class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
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
        const newContainer = document.createElement('div');
        newContainer.innerHTML = newDiv;
        const changeDiv = document.querySelector('.changeDiv');
        changeDiv.appendChild(newContainer);
      }
      const { saveForm } = document.forms;

      saveForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = new FormData(saveForm);
        try {
          const response2 = await fetch('/profileDoc/data', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(data)),
          });
          const result2 = await response2;
          if (result2.ok) {
            window.location.href = `/profileDoc/${result.id}`;
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
