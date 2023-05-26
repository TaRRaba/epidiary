const React = require('react');
const Layout = require('./Layout');

module.exports = function ProfileInfoDoc({ user, dataDoc }) {
  console.log('====>INFO VIEW', dataDoc.email);
  return (
    <Layout>
      <script defer src="/js/changeDoc.js" />

      <div className="flex justify-around">
        <h1>Ваши данные</h1>
      </div>

      <div className="cflex flex-col items-center changeDiv">

        <div className="containerInfo items-center flex flex-col justify-evenly p-4 auto-cols-max">

          <div className="mt-4">
            <h5>
              ФИО:
              {' '}
              {dataDoc.fullName}
            </h5>
          </div>

          <div className="mt-4">
            <h5>
              Ваш email:
              {' '}
              {dataDoc.email}
            </h5>
          </div>

          <div className="mt-4">
            <button id="changeButtonId" className="changeButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Внести изменения
            </button>
          </div>

        </div>
      </div>

    </Layout>
  );
};
