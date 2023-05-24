const React = require('react');
const Layout = require('./Layout');

module.exports = function Login({ title, doc }) {
  return (
    <Layout title={title}>
      <div className="logForm">

        {
            doc
              ? (
                <div className="logForm-head">
                  <h2>Вход в личный кабинет врача</h2>
                </div>
              ) : (
                <div className="logForm-head">
                  <h2>Вход</h2>
                </div>
              )
        }

        <div>
          <form name="logForm">
            <label htmlFor="email">Введите свой Email:</label>
            <input
              type="email"
              id="email"
              required
              placeholder="Email"
              autoComplete="email"
            />

            <label htmlFor="pswd">Введите свой пароль:</label>
            <input
              type="password"
              id="pswd"
              required
              placeholder="Пароль"
              autoComplete="current-password"
            />

            <button type="submit">Войти</button>

            <div className="logForm-footer">
              <h2>
                Для авторизации нажнимте
                {' '}
                {
                    doc
                      ? (
                        <a href="/doc/reg">сюда</a>
                      ) : (
                        <a href="/user/reg">сюда</a>
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
