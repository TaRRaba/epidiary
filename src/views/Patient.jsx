const React = require('react');
const Layout = require('./Layout');

module.exports = function Patiecient({ user, dataUser, dataAttack }) {
  function convertTimeRu(date) {
    const dateRes = new Date(date);
    return dateRes.toLocaleDateString('ru-RU');
  }

  return (
    <Layout>
      <script defer src="/js/patientBtn.js" />

      <div className="flex justify-around">
        <h1>
          Пациент №
          {dataUser.id}
        </h1>
      </div>

      <div className="cflex flex-col items-center changeDiv">
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">

          <div className="flex items-center flex-col">

            <div className="text-lg">
              <p className="text-black-600">Адрес электронной почты:</p>
              <p className="text-gray-600">{dataUser.email}</p>
              <p className="text-black-600">Возраст:</p>
              <p className="text-gray-600">{dataUser.userInfo.birthDate}</p>
              <p className="text-black-600">Пол при рождение:</p>
              <p className="text-gray-600">{dataUser.userInfo.gender}</p>
            </div>

            <button id="buttonDopInfo" className="changeButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Посмотреть все
            </button>

            <div>
              <h5 className="font-bold">История заболевания</h5>
            </div>

            <div className="flex flex-col">

              <div id="divDopInfo" style={{ display: 'none' }}>
                {dataUser.userInfo.question1 ? (
                  <div>
                    <p className="text-black-600">
                      В каком возрасте у Вас возник первый эпилептический приступ?
                    </p>
                    <p className="text-gray-600">
                      {dataUser.userInfo.question1}
                    </p>
                  </div>
                )
                  : (
                    <div>
                      <p className="text-black-600">
                        В каком возрасте у Вас возник первый эпилептический приступ?
                      </p>
                      <p className="text-gray-600">
                        Не указано
                      </p>
                    </div>
                  )}
                {dataUser.userInfo.question2 ? (
                  <div>
                    <p className="text-black-600">
                      Устанавливался ли диагноз Эпилепсия?
                    </p>
                    <p className="text-gray-600">
                      {dataUser.userInfo.question2}
                    </p>
                  </div>
                )
                  : (
                    <div>
                      <p className="text-black-600">
                        Устанавливался ли диагноз Эпилепсия?
                      </p>
                      <p className="text-gray-600">
                        Не указано
                      </p>
                    </div>
                  )}
                {dataUser.userInfo.question3 ? (
                  <div>
                    <p className="text-black-600">
                      У кого-либо из Ваших родственников возникали эпилептические приступы?
                    </p>
                    <p className="text-gray-600">
                      {dataUser.userInfo.question3}
                    </p>
                  </div>
                )
                  : (
                    <div>
                      <p className="text-black-600">
                        У кого-либо из Ваших родственников возникали эпилептические приступы?
                      </p>
                      <p className="text-gray-600">
                        Не указано
                      </p>
                    </div>
                  )}
                {dataUser.userInfo.question4 ? (
                  <div>
                    <p className="text-black-600">
                      Отмечались ли осложнения при Вашем вынашивании/родах?
                    </p>
                    <p className="text-gray-600">
                      {dataUser.userInfo.question4}
                    </p>
                  </div>
                )
                  : (
                    <div>
                      <p className="text-black-600">
                        Отмечались ли осложнения при Вашем вынашивании/родах?
                      </p>
                      <p className="text-gray-600">
                        Не указано
                      </p>
                    </div>
                  )}

                {dataUser.userInfo.question5 ? (
                  <div>
                    <p className="text-black-600">
                      Отмечались ли задержки психомоторного развития в раннем детском периоде?
                    </p>
                    <p className="text-gray-600">
                      {dataUser.userInfo.question5}
                    </p>
                  </div>
                )
                  : (
                    <div>
                      <p className="text-black-600">
                        Отмечались ли задержки психомоторного развития в раннем детском периоде?
                      </p>
                      <p className="text-gray-600">
                        Не указано
                      </p>
                    </div>
                  )}

                {dataUser.userInfo.question6 ? (
                  <div>
                    <p className="text-black-600">
                      Испытывали ли Вы судороги мышц на высокую температуру в детском возрасте?
                    </p>
                    <p className="text-gray-600">
                      {dataUser.userInfo.question6}
                    </p>
                  </div>
                )
                  : (
                    <div>
                      <p className="text-black-600">
                        Испытывали ли Вы судороги мышц на высокую температуру в детском возрасте?
                      </p>
                      <p className="text-gray-600">
                        Не указано
                      </p>
                    </div>
                  )}

                {dataUser.userInfo.question7 ? (
                  <div>
                    <p className="text-black-600">
                      Есть ли иные неврологические заболевания?
                    </p>
                    <p className="text-gray-600">
                      {dataUser.userInfo.question7}
                    </p>
                  </div>
                )
                  : (
                    <div>
                      <p className="text-black-600">
                        Есть ли иные неврологические заболевания?
                      </p>
                      <p className="text-gray-600">
                        Не указано
                      </p>
                    </div>
                  )}

                {dataUser.userInfo.question8 ? (
                  <div>
                    <p className="text-black-600">
                      Проходили ли Вы хирургическое лечение от эпилепсии
                    </p>
                    <p className="text-gray-600">
                      {dataUser.userInfo.question8}
                    </p>
                  </div>
                )
                  : (
                    <div>
                      <p className="text-black-600">
                        Проходили ли Вы хирургическое лечение от эпилепсии
                      </p>
                      <p className="text-gray-600">
                        Не указано
                      </p>
                    </div>
                  )}

                {dataUser.userInfo.question9 ? (
                  <div>
                    <p className="text-black-600">
                      Вы такие симптомы как снижение концентрации внимания или ухудшение памяти?
                    </p>
                    <p className="text-gray-600">
                      {dataUser.userInfo.question9}
                    </p>
                  </div>
                )
                  : (
                    <div>
                      <p className="text-black-600">
                        Вы такие симптомы как снижение концентрации внимания или ухудшение памяти?
                      </p>
                      <p className="text-gray-600">
                        Не указано
                      </p>
                    </div>
                  )}

                {dataUser.userInfo.question10 ? (
                  <div>
                    <p className="text-black-600">
                      Испытывали ли Вы сложности общении или социокультурном взаимодействии из-за установленного диагноза Эпилепсия?
                    </p>
                    <p className="text-gray-600">
                      {dataUser.userInfo.question10}
                    </p>
                  </div>
                )
                  : (
                    <div>
                      <p className="text-black-600">
                        Испытывали ли Вы сложности общении или социокультурном взаимодействии из-за установленного диагноза Эпилепсия?
                      </p>
                      <p className="text-gray-600">
                        Не указано
                      </p>
                    </div>
                  )}

                {dataUser.userInfo.question11 ? (
                  <div>
                    <p className="text-black-600">
                      Справляетесь ли Вы с эмоциональными и психологическими аспектами своего заболевания?
                    </p>
                    <p className="text-gray-600">
                      {dataUser.userInfo.question11}
                    </p>
                  </div>
                )
                  : (
                    <div>
                      <p className="text-black-600">
                        Справляетесь ли Вы с эмоциональными и психологическими аспектами своего заболевания?
                      </p>
                      <p className="text-gray-600">
                        Не указано
                      </p>
                    </div>
                  )}

                {dataUser.userInfo.question12 ? (
                  <div>
                    <p className="text-black-600">
                      Пользуетесь ли Вы транспортным средством в качестве водителя?
                    </p>
                    <p className="text-gray-600">
                      {dataUser.userInfo.question12}
                    </p>
                  </div>
                )
                  : (
                    <div>
                      <p className="text-black-600">
                        Пользуетесь ли Вы транспортным средством в качестве водителя?
                      </p>
                      <p className="text-gray-600">
                        Не указано
                      </p>
                    </div>
                  )}

              </div>

            </div>
          </div>

        </div>
      </div>

      <div className="flex justify-around">
        <h1>Приступы</h1>
      </div>

      <div className="cflex flex-col items-center changeDiv">
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          {dataAttack.map((el) => (
            <div className="flex items-center">
              <div className="text-lg">
                <p className="text-black-600">Дата:</p>
                <p className="text-gray-600">{el.attackInfo.date}</p>
                <p className="text-black-600">Тип:</p>
                <p className="text-gray-600">{el.attackInfo.type}</p>
              </div>
            </div>
          ))}

        </div>
      </div>

    </Layout>
  );
};
