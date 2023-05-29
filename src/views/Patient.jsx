const React = require('react');
const Layout = require('./Layout');

module.exports = function Patiecient({ user, dataUser, dataAttack }) {
  return (
    <Layout user={user}>
      <script defer src="/js/patientBtn.js" />

      <div className="flex mt-5 justify-around">
        <h1>
          Пациент №
          {dataUser.id}
        </h1>
      </div>

      <section className="flex w-3/5 mt-5 p-4 mx-auto border shadow-xl md:gap-x-4 justify-center bg-white md:items-center border-gray-700 rounded-2xl">
        <div className="">

          <div className="flex items-center flex-col">

            <div className="text-lg">
              <div className="mb-3 flex">
                <p className="mr-2 text-black-600">Адрес электронной почты:</p>
                <p className="text-gray-600">{dataUser.email}</p>
              </div>
              <div className="mb-3 flex">
                <p className="mr-2 text-black-600">Возраст:</p>
                <p className="text-gray-600">{dataUser.userInfo.birthDate}</p>
              </div>
              <div className="mb-3 flex">
                <p className="mr-2 text-black-600">Пол при рождении:</p>
                <p className="text-gray-600">{dataUser.userInfo.gender}</p>
              </div>
            </div>

            <button id="buttonDopInfo" className="changeButton bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Посмотреть все
            </button>

            <div className="flex flex-col">
              <hr className="mt-5" />
              <div id="divDopInfo" style={{ display: 'none' }}>
                <div className="mt-3 mb-3 flex justify-center">
                  <h5 className="font-bold text-lg">История заболевания</h5>
                </div>
                {dataUser.userInfo.addQ1 ? (
                  <div className="mb-2">
                    <p className="mb-1 text-black-600">
                      В каком возрасте у Вас возник первый эпилептический приступ?
                    </p>
                    <p className="text-gray-600">
                      {dataUser.userInfo.addQ1}
                    </p>
                  </div>
                )
                  : (
                    <div className="mb-2">
                      <p className="mb-1 text-black-600">
                        В каком возрасте у Вас возник первый эпилептический приступ?
                      </p>
                      <p className="text-gray-600">
                        Не указано
                      </p>
                    </div>
                  )}
                {dataUser.userInfo.addQ2 ? (
                  <div className="mb-2">
                    <p className="mb-1 text-black-600">
                      Устанавливался ли диагноз Эпилепсия?
                    </p>
                    <p className="text-gray-600">
                      {dataUser.userInfo.addQ2}
                    </p>
                  </div>
                )
                  : (
                    <div className="mb-2">
                      <p className="mb-1 text-black-600">
                        Устанавливался ли диагноз Эпилепсия?
                      </p>
                      <p className="text-gray-600">
                        Не указано
                      </p>
                    </div>
                  )}
                {dataUser.userInfo.addQ3 ? (
                  <div className="mb-2">
                    <p className="mb-1 text-black-600">
                      У кого-либо из Ваших родственников возникали эпилептические приступы?
                    </p>
                    <p className="text-gray-600">
                      {dataUser.userInfo.addQ3}
                    </p>
                  </div>
                )
                  : (
                    <div className="mb-2">
                      <p className="mb-1 text-black-600">
                        У кого-либо из Ваших родственников возникали эпилептические приступы?
                      </p>
                      <p className="text-gray-600">
                        Не указано
                      </p>
                    </div>
                  )}
                {dataUser.userInfo.addQ4 ? (
                  <div className="mb-2">
                    <p className="mb-1 text-black-600">
                      Отмечались ли осложнения при Вашем вынашивании/родах?
                    </p>
                    <p className="text-gray-600">
                      {dataUser.userInfo.addQ4}
                    </p>
                  </div>
                )
                  : (
                    <div className="mb-2">
                      <p className="mb-1 text-black-600">
                        Отмечались ли осложнения при Вашем вынашивании/родах?
                      </p>
                      <p className="text-gray-600">
                        Не указано
                      </p>
                    </div>
                  )}

                {dataUser.userInfo.addQ5 ? (
                  <div className="mb-2">
                    <p className="mb-1 text-black-600">
                      Отмечались ли задержки психомоторного развития в раннем детском периоде?
                    </p>
                    <p className="text-gray-600">
                      {dataUser.userInfo.addQ5}
                    </p>
                  </div>
                )
                  : (
                    <div className="mb-2">
                      <p className="mb-1 text-black-600">
                        Отмечались ли задержки психомоторного развития в раннем детском периоде?
                      </p>
                      <p className="text-gray-600">
                        Не указано
                      </p>
                    </div>
                  )}

                {dataUser.userInfo.addQ6 ? (
                  <div className="mb-2">
                    <p className="mb-1 text-black-600">
                      Испытывали ли Вы судороги мышц на высокую температуру в детском возрасте?
                    </p>
                    <p className="text-gray-600">
                      {dataUser.userInfo.addQ6}
                    </p>
                  </div>
                )
                  : (
                    <div className="mb-2">
                      <p className="mb-1 text-black-600">
                        Испытывали ли Вы судороги мышц на высокую температуру в детском возрасте?
                      </p>
                      <p className="text-gray-600">
                        Не указано
                      </p>
                    </div>
                  )}

                {dataUser.userInfo.addQ7 ? (
                  <div className="mb-2">
                    <p className="mb-1 text-black-600">
                      Есть ли иные неврологические заболевания?
                    </p>
                    <p className="text-gray-600">
                      {dataUser.userInfo.addQ7}
                    </p>
                  </div>
                )
                  : (
                    <div className="mb-2">
                      <p className="mb-1 text-black-600">
                        Есть ли иные неврологические заболевания?
                      </p>
                      <p className="text-gray-600">
                        Не указано
                      </p>
                    </div>
                  )}

                {dataUser.userInfo.addQ8 ? (
                  <div className="mb-2">
                    <p className="mb-1 text-black-600">
                      Проходили ли Вы хирургическое лечение от эпилепсии
                    </p>
                    <p className="text-gray-600">
                      {dataUser.userInfo.addQ8}
                    </p>
                  </div>
                )
                  : (
                    <div className="mb-2">
                      <p className="mb-1 text-black-600">
                        Проходили ли Вы хирургическое лечение от эпилепсии
                      </p>
                      <p className="text-gray-600">
                        Не указано
                      </p>
                    </div>
                  )}
                <div className="mt-3 mb-3 flex justify-center">
                  <h5 className="font-bold text-lg">Опросник по качеству жизни</h5>
                </div>
                {dataUser.userInfo.addQ9 ? (
                  <div className="mb-2">
                    <p className="mb-1 text-black-600">
                      Вы такие симптомы как снижение концентрации внимания или ухудшение памяти?
                    </p>
                    <p className="text-gray-600">
                      {dataUser.userInfo.addQ9}
                    </p>
                  </div>
                )
                  : (
                    <div className="mb-2">
                      <p className="mb-1 text-black-600">
                        Вы такие симптомы как снижение концентрации внимания или ухудшение памяти?
                      </p>
                      <p className="text-gray-600">
                        Не указано
                      </p>
                    </div>
                  )}

                {dataUser.userInfo.addQ10 ? (
                  <div className="mb-2">
                    <p className="mb-1 text-black-600">
                      Испытывали ли Вы сложности общении или социокультурном взаимодействии из-за установленного диагноза Эпилепсия?
                    </p>
                    <p className="text-gray-600">
                      {dataUser.userInfo.addQ10}
                    </p>
                  </div>
                )
                  : (
                    <div className="mb-2">
                      <p className="mb-1 text-black-600">
                        Испытывали ли Вы сложности общении или социокультурном взаимодействии из-за установленного диагноза Эпилепсия?
                      </p>
                      <p className="text-gray-600">
                        Не указано
                      </p>
                    </div>
                  )}

                {dataUser.userInfo.addQ11 ? (
                  <div className="mb-2">
                    <p className="mb-1 text-black-600">
                      Справляетесь ли Вы с эмоциональными и психологическими аспектами своего заболевания?
                    </p>
                    <p className="text-gray-600">
                      {dataUser.userInfo.addQ11}
                    </p>
                  </div>
                )
                  : (
                    <div className="mb-2">
                      <p className="mb-1 text-black-600">
                        Справляетесь ли Вы с эмоциональными и психологическими аспектами своего заболевания?
                      </p>
                      <p className="text-gray-600">
                        Не указано
                      </p>
                    </div>
                  )}

                {dataUser.userInfo.addQ12 ? (
                  <div className="mb-2">
                    <p className="mb-1 text-black-600">
                      Пользуетесь ли Вы транспортным средством в качестве водителя?
                    </p>
                    <p className="text-gray-600">
                      {dataUser.userInfo.addQ12}
                    </p>
                  </div>
                )
                  : (
                    <div className="mb-2">
                      <p className="mb-1 text-black-600">
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
      </section>

      <div className="mt-10 flex justify-around">
        <h1>Приступы</h1>
      </div>

      <div className="flex justify-center">
        <div className="flex grid grid-cols-3 p-8">
          {dataAttack.map((el) => (
            <div key={el.id} className="my-4 mx-10 flex flex-col">
              <div className="flex flex-col">
                <div className="flex-1 w-96 bg-white rounded-lg shadow-xl p-8">
                  <h4 className="text-md mb-10 text-gray-900 font-bold">Приступ</h4>
                  <ul className="mt-2 mb-5 text-gray-700">
                    <li className="flex border-b justify-between py-2">
                      <span className="font-bold flex items-center w-52">Дата приступа:</span>
                      <span className="type text-gray-700">{el.attackInfo.question1}</span>
                    </li>
                    <li className="flex border-b justify-between py-2">
                      <span className="font-bold flex items-center w-52">Тип приступа:</span>
                      <span className="outMind text-gray-700">{el.attackInfo.question2}</span>
                    </li>
                  </ul>
                  <div className="flex justify-center gap-4">
                    <a href={`/users/attacks/${el.id}`} className="text-sm justify-center cursor-pointer rounded-lg bg-gray-500 px-4 py-1.5 text-white hover:bg-gray-600">Подробнее</a>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

    </Layout>
  );
};
