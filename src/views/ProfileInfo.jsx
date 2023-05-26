const React = require('react');
const Layout = require('./Layout');

module.exports = function ProfileInfo({ user, dataUser }) {
  function convertTimeRu(date) {
    const dateRes = new Date(date);
    return dateRes.toLocaleDateString('ru-RU');
  }

  return (
    <Layout>
      <script defer src="/js/change.js" />

      <div className="flex justify-around">
        <h1>Ваши данные</h1>
      </div>
      <div className="cflex flex-col items-center changeDiv">

        <div className="containerInfo items-center flex flex-col justify-evenly p-4 auto-cols-max">

          <div className="mt-4">
            <h5>
              Ваш возраст:
              {dataUser.userInfo.birthDate}
            </h5>
          </div>

          <div className="mt-4">
            <h5>
              Пол при рождение:
              {' '}
              {dataUser.userInfo.gender}
            </h5>
          </div>

          <div>
            <h5 className="font-bold">История заболевания</h5>
          </div>

          {dataUser.userInfo.addQ1
            ? (
              <div className="mt-4">

                <h5>
                  В каком возрасте возник первый эпилептический приступ?
                  {' '}
                  {dataUser.userInfo.addQ1}
                </h5>
              </div>
            ) : (
              <div className="mt-4">
                <h5>
                  В каком возрасте возник первый эпилептический приступ?
                  {' '}
                  Не указано
                </h5>
              </div>
            )}
          {dataUser.userInfo.addQ2
            ? (
              <div className="mt-4">
                <h5>
                  Устанавливался ли вам диагноз Эпилепсия ?
                  {' '}
                  {dataUser.userInfo.addQ2}
                </h5>
              </div>
            ) : (
              <div className="mt-4">
                <h5>
                  Устанавливался ли вам диагноз Эпилепсия ?
                  {' '}
                  Не указано
                </h5>
              </div>
            )}

          {dataUser.userInfo.addQ3
            ? (
              <div className="mt-4">
                <h5>
                  У кого-либо из Ваших родственников возникали эпилептические приступы ?
                  {' '}
                  {dataUser.userInfo.addQ3}
                </h5>
              </div>
            ) : (
              <div className="mt-4">
                <h5>
                  У кого-либо из Ваших родственников возникали эпилептические приступы ?
                  {' '}
                  Не указано
                </h5>
              </div>
            )}

          {dataUser.userInfo.addQ4
            ? (
              <div className="mt-4">
                <h5>
                  Отмечали ли осложнения при Вашем вынашевании/родах?
                  {' '}
                  {dataUser.userInfo.addQ4}
                </h5>
              </div>
            ) : (
              <div className="mt-4">
                <h5>
                  Отмечали ли осложнения при Вашем вынашевании/родах?
                  {' '}
                  Не указано
                </h5>
              </div>
            )}

          {dataUser.userInfo.addQ5
            ? (
              <div className="mt-4">
                <h5>
                  Отмечались ли задержки психомоторного развития в раннем детском периоде?
                  {' '}
                  {dataUser.userInfo.addQ5}
                </h5>
              </div>
            ) : (
              <div className="mt-4">
                <h5>
                  Отмечались ли задержки психомоторного развития в раннем детском периоде?
                  {' '}
                  Не указано
                </h5>
              </div>
            )}

          {dataUser.userInfo.addQ6
            ? (
              <div className="mt-4">
                <h5>
                  Испытывали ли Вы судороги мышц на высокую температуру в детском возрасте?
                  {' '}
                  {dataUser.userInfo.addQ6}
                </h5>
              </div>
            ) : (
              <div className="mt-4">
                <h5>
                  Испытывали ли Вы судороги мышц на высокую температуру в детском возрасте?
                  {' '}
                  Не указано
                </h5>
              </div>
            )}

          {dataUser.userInfo.addQ7
            ? (
              <div className="mt-4">
                <h5>
                  Есть ли иные неврологические заболевания?
                  {' '}
                  {dataUser.userInfo.addQ7}
                </h5>
              </div>
            ) : (
              <div className="mt-4">
                <h5>
                  Есть ли иные неврологические заболевания?
                  {' '}
                  Не указано
                </h5>
              </div>
            )}

          {dataUser.userInfo.addQ8
            ? (
              <div className="mt-4">
                <h5>
                  Проходили ли Вы хирургическое лечение от эпилепсии?
                  {' '}
                  {dataUser.userInfo.addQ8}
                </h5>
              </div>
            ) : (
              <div className="mt-4">
                <h5>
                  Проходили ли Вы хирургическое лечение от эпилепсии?
                  {' '}
                  Не указано
                </h5>
              </div>
            )}

          <div>
            <h5 className="font-bold">История заболевания</h5>
          </div>

          {dataUser.userInfo.addQ9
            ? (
              <div className="mt-4">
                <h5>
                  Отмечаете ли Вы такие симптомы как снижение концентрации внимания или ухудшение памяти?
                  {' '}
                  {dataUser.userInfo.addQ9}
                </h5>
              </div>
            ) : (
              <div className="mt-4">
                <h5>
                  Отмечаете ли Вы такие симптомы как снижение концентрации внимания или ухудшение памяти?
                  {' '}
                  Не указано
                </h5>
              </div>
            )}

          {dataUser.userInfo.addQ10
            ? (
              <div className="mt-4">
                <h5>
                  Испытывали ли Вы сложности общении или социокультурном взаимодействии из-за установленного диагноза Эпилепсия?
                  {' '}
                  {dataUser.userInfo.addQ10}
                </h5>
              </div>
            ) : (
              <div className="mt-4">
                <h5>
                  Испытывали ли Вы сложности общении или социокультурном взаимодействии из-за установленного диагноза Эпилепсия?
                  {' '}
                  Не указано
                </h5>
              </div>
            )}

          {dataUser.userInfo.addQ11
            ? (
              <div className="mt-4">
                <h5>
                  Справляетесь ли Вы с эмоциональными и психологическими аспектами своего заболевания?
                  {' '}
                  {dataUser.userInfo.addQ11}
                </h5>
              </div>
            ) : (
              <div className="mt-4">
                <h5>
                  Справляетесь ли Вы с эмоциональными и психологическими аспектами своего заболевания?
                  {' '}
                  Не указано
                </h5>
              </div>
            )}

          {dataUser.userInfo.addQ12
            ? (
              <div className="mt-4">
                <h5>
                  Пользуетесь ли Вы транспортным средством в качестве водителя?
                  {' '}
                  {dataUser.userInfo.addQ12}
                </h5>
              </div>
            ) : (
              <div className="mt-4">
                <h5>
                  Пользуетесь ли Вы транспортным средством в качестве водителя?
                  {' '}
                  Не указано
                </h5>
              </div>
            )}

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
