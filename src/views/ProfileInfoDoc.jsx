const React = require('react');
const Layout = require('./Layout');

module.exports = function ProfileInfoDoc({ user, dataDoc }) {
  return (
    <Layout user={user}>
      <script defer src="/js/changeDoc.js" />

      <div className="flex justify-around">
        <h1>Ваши данные</h1>
      </div>
      <section className="flex w-96 mt-10 p-4 shadow-xl mx-auto border md:gap-x-4 justify-center bg-white md:items-center border-gray-700 rounded-2xl">

        <div className="cflex flex-col items-center changeDiv">

          <div className="containerInfo items-center flex flex-col justify-evenly p-4 auto-cols-max">

            <div className="mt-4">
              <h5>
                <b>ФИО:</b>
                {' '}
                {dataDoc.fullName}
              </h5>
            </div>

            <div className="mt-4">
              <h5>
                <b>Ваш email:</b>
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
      </section>
    </Layout>
  );
};
