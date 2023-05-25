const React = require('react');
const Layout = require('./Layout');

module.exports = function Login({ title, doc }) {
  return (
    <Layout title={title}>
      <div className="logForm">

        {
            doc
              ? (
                <div className="logForm-head sm:mx-auto sm:w-full sm:max-w-sm">
                  <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Вход в личный кабинет врача</h2>
                </div>
              ) : (
                <div className="logForm-head sm:mx-auto sm:w-full sm:max-w-sm">
                  <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Вход</h2>
                </div>
              )
        }

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form name="logForm" className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Введите свой Email:</label>
              <div className="mt-2">
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
                  focus:ring-2 focus:ring-inset focus:ring-indigo-600
                  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="pswd" className="block text-sm font-medium leading-6 text-gray-900">Введите свой пароль:</label>
              <div className="mt-2">
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
                  focus:ring-2 focus:ring-inset focus:ring-indigo-600
                  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <button
              type="submit"
              className="
              flex w-full justify-center rounded-md bg-indigo-600
              px-3 py-1.5 text-sm font-semibold leading-6 text-white
              shadow-sm hover:bg-indigo-500 focus-visible:outline
              focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-indigo-600"
            >
              Войти
            </button>

            <div className="logForm-footer">
              <h2 className="mt-10 text-center text-sm text-gray-500">
                Для авторизации нажнимте
                {' '}
                {
                    doc
                      ? (
                        <a href="/doc/reg" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">сюда</a>
                      ) : (
                        <a href="/user/reg" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">сюда</a>
                      )
                }
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
