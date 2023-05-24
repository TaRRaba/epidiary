const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration({ title, doc }) {
  return (
    <Layout title={title}>

      <div className="regForm">

        {
          doc
            ? (
              <div className="regForm-head">
                <h2>Регистрация личного кабинета врача</h2>
              </div>
            ) : (

              <div className="regForm-head">
                <h2>Регистрация</h2>
              </div>
            )
        }

        <div>
          <form name="regForm">

            {
              doc
                ? (
                  <>
                    <label htmlFor="fullname">Фамилия Имя и Отчество (если есть):</label>
                    <input
                      type="text"
                      id="fullname"
                      required
                      placeholder="ФИО"
                      autoComplete="name"
                    />
                  </>
                ) : (
                  <></>
                )
            }

            <label htmlFor="email">Укажите свой Email:</label>
            <input
              type="email"
              id="email"
              required
              placeholder="Email"
              autoComplete="email"
            />

            <label htmlFor="pswd">Придумайте пароль:</label>
            <input
              type="password"
              id="pswd"
              required
              placeholder="Пароль"
              autoComplete="current-password"
            />

            <button type="submit">Зарегистрироваться</button>

            <div className="regForm-footer">
              <h2>
                Вводя свой email вы соглашаетесь с правилами обработки персональных данных.
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
