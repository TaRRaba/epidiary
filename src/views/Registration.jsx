const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration({ title, doc }) {
  return (
    <Layout title={title}>

      <div className="regForm w-96 p-4 mt-10  shadow-xl mx-auto border bg-white md:items-center border-gray-700 rounded-2xl">

        {
          doc
            ? (
              <div className="regForm-head logForm-head sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Регистрация личного кабинета врача</h2>
              </div>
            ) : (

              <div className="regForm-head logForm-head sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Регистрация</h2>
              </div>
            )
        }

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form name="regForm" className="space-y-6">

            {
              doc
                ? (
                  <>
                    <label htmlFor="fullname" className="block text-sm font-medium leading-6 text-gray-900">Фамилия Имя и Отчество (если есть):</label>
                    <input
                      type="text"
                      id="fullname"
                      required
                      placeholder="ФИО"
                      autoComplete="name"
                      className="
                          block w-full rounded-md border-0 py-1.5
                          text-gray-900 shadow-sm ring-1 ring-inset
                          ring-gray-600 placeholder:text-gray-400
                          focus:ring-2 focus:ring-inset focus:ring-blue-600
                          sm:text-sm sm:leading-6"
                    />
                  </>
                ) : (
                  <></>
                )
            }

            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Укажите свой Email:</label>
            <input
              type="email"
              id="email"
              required
              placeholder="Email"
              autoComplete="email"
              className="
                  block w-full rounded-md border-0 py-1.5
                  text-gray-900 shadow-sm ring-1 ring-inset
                  ring-gray-600 placeholder:text-gray-400
                  focus:ring-2 focus:ring-inset focus:ring-blue-600
                  sm:text-sm sm:leading-6"
            />

            <label htmlFor="pswd" className="block text-sm font-medium leading-6 text-gray-900">Придумайте пароль:</label>
            <input
              type="password"
              id="pswd"
              required
              placeholder="Пароль"
              autoComplete="current-password"
              className="
                  block w-full rounded-md border-0 py-1.5
                  text-gray-900 shadow-sm ring-1 ring-inset
                  ring-gray-600 placeholder:text-gray-400
                  focus:ring-2 focus:ring-inset focus:ring-blue-600
                  sm:text-sm sm:leading-6"
            />

            <button
              type="submit"
              className="
              flex w-full justify-center rounded-md bg-blue-700
              px-3 py-1.5 text-sm font-semibold leading-6 text-white
              shadow-sm hover:bg-blue-600 focus-visible:outline
              focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-indigo-600 disabled:opacity-5"
            >
              Зарегистрироваться
            </button>

            <div className="regForm-footer">
              <h2 className="text-start text-sm">
                Вводя свой e-mail вы соглашаетесь с правилами обработки персональных данных.
              </h2>
            </div>

          </form>
        </div>
      </div>
      {
        doc
          ? (
            <script defer src="/js/auth-doc.js" />
          ) : (
            <script defer src="/js/auth-user.js" />
          )
      }

    </Layout>
  );
};
