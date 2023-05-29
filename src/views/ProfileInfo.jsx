const React = require('react');
const Layout = require('./Layout');

module.exports = function ProfileInfo({ user, dataUser }) {
  return (
    <Layout user={user}>
      <script defer src="/js/change.js" />

      <div className="flex mt-8 justify-around">
        <h1>Ваши данные</h1>
      </div>
      <section className="flex w-3/5 mt-10 p-4 mx-auto shadow-xl border md:gap-x-4 justify-center bg-white md:items-center border-gray-700 rounded-2xl">
        <div className="cflex flex-col items-center changeDiv">

          <div className="containerInfo items-center flex flex-col justify-evenly p-4 auto-cols-max">

            <div className="mt-0">
              <h5>
                <b>Ваш возраст:</b>
                {' '}
                {dataUser.userInfo.birthDate}
              </h5>
            </div>

            <div className="mt-4">
              <h5>
                <b>Пол при рождении:</b>
                {' '}
                {dataUser.userInfo.gender}
              </h5>
            </div>

            <div className="mt-10">
              <h5 className="font-bold">История заболевания</h5>
            </div>

            {dataUser.userInfo.addQ1
              ? (
                <div className="mt-4">

                  <h5>
                    В каком возрасте возник первый эпилептический приступ?
                    {' '}
                    <b>{dataUser.userInfo.addQ1}</b>
                  </h5>
                </div>
              ) : (
                <div className="mt-4">
                  <h5>
                    В каком возрасте возник первый эпилептический приступ?
                    {' '}
                    <b>Не указано</b>
                  </h5>
                </div>
              )}
            {dataUser.userInfo.addQ2
              ? (
                <div className="mt-4">
                  <h5>
                    Устанавливался ли вам диагноз Эпилепсия ?
                    {' '}
                    <b>{dataUser.userInfo.addQ2}</b>
                  </h5>
                </div>
              ) : (
                <div className="mt-4">
                  <h5>
                    Устанавливался ли вам диагноз Эпилепсия ?
                    {' '}
                    <b>Не указано</b>
                  </h5>
                </div>
              )}

            {dataUser.userInfo.addQ3
              ? (
                <div className="mt-4">
                  <h5>
                    У кого-либо из Ваших родственников возникали эпилептические приступы ?
                    {' '}
                    <b>{dataUser.userInfo.addQ3}</b>
                  </h5>
                </div>
              ) : (
                <div className="mt-4">
                  <h5>
                    У кого-либо из Ваших родственников возникали эпилептические приступы ?
                    {' '}
                    <b>Не указано</b>
                  </h5>
                </div>
              )}

            {dataUser.userInfo.addQ4
              ? (
                <div className="mt-4">
                  <h5>
                    Отмечали ли осложнения при Вашем вынашевании/родах?
                    {' '}
                    <b>{dataUser.userInfo.addQ4}</b>
                  </h5>
                </div>
              ) : (
                <div className="mt-4">
                  <h5>
                    Отмечали ли осложнения при Вашем вынашевании/родах?
                    {' '}
                    <b>Не указано</b>
                  </h5>
                </div>
              )}

            {dataUser.userInfo.addQ5
              ? (
                <div className="mt-4">
                  <h5>
                    Отмечались ли задержки психомоторного развития в раннем детском периоде?
                    {' '}
                    <b>{dataUser.userInfo.addQ5}</b>
                  </h5>
                </div>
              ) : (
                <div className="mt-4">
                  <h5>
                    Отмечались ли задержки психомоторного развития в раннем детском периоде?
                    {' '}
                    <b>Не указано</b>
                  </h5>
                </div>
              )}

            {dataUser.userInfo.addQ6
              ? (
                <div className="mt-4">
                  <h5>
                    Испытывали ли Вы судороги мышц на высокую температуру в детском возрасте?
                    {' '}
                    <b>{dataUser.userInfo.addQ6}</b>
                  </h5>
                </div>
              ) : (
                <div className="mt-4">
                  <h5>
                    Испытывали ли Вы судороги мышц на высокую температуру в детском возрасте?
                    {' '}
                    <b>Не указано</b>
                  </h5>
                </div>
              )}

            {dataUser.userInfo.addQ7
              ? (
                <div className="mt-4">
                  <h5>
                    Есть ли иные неврологические заболевания?
                    {' '}
                    <b>{dataUser.userInfo.addQ7}</b>
                  </h5>
                </div>
              ) : (
                <div className="mt-4">
                  <h5>
                    Есть ли иные неврологические заболевания?
                    {' '}
                    <b>Не указано</b>
                  </h5>
                </div>
              )}

            {dataUser.userInfo.addQ8
              ? (
                <div className="mt-4">
                  <h5>
                    Проходили ли Вы хирургическое лечение от эпилепсии?
                    {' '}
                    <b>{dataUser.userInfo.addQ8}</b>
                  </h5>
                </div>
              ) : (
                <div className="mt-4">
                  <h5>
                    Проходили ли Вы хирургическое лечение от эпилепсии?
                    {' '}
                    <b>Не указано</b>
                  </h5>
                </div>
              )}

            <div className="mt-5">
              <h5 className="font-bold">Опросник по качеству жизни</h5>
            </div>

            {dataUser.userInfo.addQ9
              ? (
                <div className="mt-4">
                  <h5>
                    Отмечаете ли Вы такие симптомы как снижение концентрации внимания или ухудшение памяти?
                    {' '}
                    <b>{dataUser.userInfo.addQ9}</b>
                  </h5>
                </div>
              ) : (
                <div className="mt-4">
                  <h5>
                    Отмечаете ли Вы такие симптомы как снижение концентрации внимания или ухудшение памяти?
                    {' '}
                    <b>Не указано</b>
                  </h5>
                </div>
              )}

            {dataUser.userInfo.addQ10
              ? (
                <div className="mt-4">
                  <h5>
                    Испытывали ли Вы сложности общении или социокультурном взаимодействии из-за установленного диагноза Эпилепсия?
                    {' '}
                    <b>{dataUser.userInfo.addQ10}</b>
                  </h5>
                </div>
              ) : (
                <div className="mt-4">
                  <h5>
                    Испытывали ли Вы сложности общении или социокультурном взаимодействии из-за установленного диагноза Эпилепсия?
                    {' '}
                    <b>Не указано</b>
                  </h5>
                </div>
              )}

            {dataUser.userInfo.addQ11
              ? (
                <div className="mt-4">
                  <h5>
                    Справляетесь ли Вы с эмоциональными и психологическими аспектами своего заболевания?
                    {' '}
                    <b>{dataUser.userInfo.addQ11}</b>
                  </h5>
                </div>
              ) : (
                <div className="mt-4">
                  <h5>
                    Справляетесь ли Вы с эмоциональными и психологическими аспектами своего заболевания?
                    {' '}
                    <b>Не указано</b>
                  </h5>
                </div>
              )}

            {dataUser.userInfo.addQ12
              ? (
                <div className="mt-4">
                  <h5>
                    Пользуетесь ли Вы транспортным средством в качестве водителя?
                    {' '}
                    <b>{dataUser.userInfo.addQ12}</b>
                  </h5>
                </div>
              ) : (
                <div className="mt-4">
                  <h5>
                    Пользуетесь ли Вы транспортным средством в качестве водителя?
                    {' '}
                    <b>Не указано</b>
                  </h5>
                </div>
              )}

            <div className="mt-4">
              <button id="changeButtonId" className="changeButton bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Внести изменения
              </button>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
