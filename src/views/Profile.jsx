const React = require('react');
const Layout = require('./Layout');

module.exports = function Profile({
  id, email, user, data,
}) {
  return (
    <Layout>
      {/* {user && user.type === 'user' ? ( */}
      <span>
        {/* {user.form === 'false' ? ( */}
        <span>
          <span className="flex justify-center mt-10 text-gray-700 text-xl ml-1 md:ml-2 text-sm font-medium">Заполните, пожалуйста, данные:</span>
          <section id="userInfo" className="flex w-3/5 mt-10 p-4 mx-auto border md:gap-x-4 justify-center bg-white md:items-center border-gray-700 rounded-2xl">
            <div className="flex-col">
              <form className="flex-col" action="/api/users/info" method="POST">
                <input className="visibility: hidden" name="userID" value={id} />
                <div className="my-3 flex justify-between items-center gap-x-4">
                  <span className="flex items-center">Укажите ваш возраст:</span>
                  <input name="age" type="number" required autoComplete="text" className="px-3 py-2 w-72 border md:flex shadow-sm block rounded-md sm:text-sm" />
                </div>
                <hr />
                <div className="my-3 flex justify-between items-center gap-x-4">
                  <span className="flex items-center">Пол при рождении:</span>
                  <select className="border shadow-sm rounded-md" name="gender">
                    <option selected>Мужской</option>
                    <option>Женский</option>
                  </select>
                </div>
                <div id="addInfo" className="flex visibility: visible justify-center my-6 gap-x-4 shrink-0 lg:mt-0">
                  <button type="button" className="addInfo text-blue-600 hover:bg-blue-600 border-gray-700 hover:text-white text-xs w-1/2 md:w-auto font-medium bg-gray-100 rounded-lg px-4 py-2.5">
                    Добавить дополнительную информацию (не обязательно)
                  </button>
                </div>
                <div id="hideInfo" className="flex visibility: hidden justify-center my-6 gap-x-4 shrink-0 lg:mt-0">
                  <button type="button" className="hideInfo text-blue-600 hover:bg-blue-600 border-gray-700 hover:text-white text-xs w-1/2 md:w-auto font-medium bg-gray-100 rounded-lg px-4 py-2.5">
                    Убрать дополнительную информацию
                  </button>
                </div>
                <span id="moreInfo" className="visibility: hidden">
                  <span className="flex justify-center mb-10 font-bold items-center">История заболевания</span>
                  <div className="my-3 flex justify-between items-center gap-x-4">
                    <span className="flex items-center">В каком возрасте возник первый эпилептический приступ?</span>
                    <input name="addQ1" type="text" autoComplete="text" className="px-3 py-2 w-72 border md:flex shadow-sm block rounded-md sm:text-sm" />
                  </div>
                  <hr />
                  <div className="my-3 flex justify-between items-center gap-x-4">
                    <span className="flex items-center">Устанавливался ли диагноз Эпилепсия?</span>
                    <select id="addQ2sel" name="addQ2" className="px-3 py-2 w-72 border md:flex shadow-sm block rounded-md sm:text-sm">
                      <option>Да</option>
                      <option>Нет</option>
                      <option>Свой вариант</option>
                    </select>
                    <input id="addQ2inp" name="addQ2" type="text" autoComplete="text" className="visibility: hidden px-3 py-2 w-72 border shadow-sm rounded-md sm:text-sm" />
                  </div>
                  <hr />
                  <div className="my-3 flex justify-between items-center gap-x-4">
                    <span className="flex items-center">У кого-либо из Ваших родственников возникали эпилептические приступы?</span>
                    <select name="addQ3" className="px-3 py-2 w-72 border md:flex shadow-sm block rounded-md sm:text-sm">
                      <option>Да</option>
                      <option>Нет</option>
                      <option>Не уверен</option>
                    </select>
                  </div>
                  <hr />
                  <div className="my-3 flex justify-between items-center gap-x-4">
                    <span className="flex items-center">Отмечались ли осложнения при Вашем вынашивании/родах?</span>
                    <select name="addQ4" className="px-3 py-2 w-72 border md:flex shadow-sm block rounded-md sm:text-sm">
                      <option>Да</option>
                      <option>Нет</option>
                      <option>Не уверен</option>
                    </select>
                  </div>
                  <hr />
                  <div className="my-3 flex justify-between items-center gap-x-4">
                    <span className="flex items-center">Отмечались ли задержки психомоторного развития в раннем детском периоде?</span>
                    <select name="addQ5" className="px-3 py-2 w-72 border md:flex shadow-sm block rounded-md sm:text-sm">
                      <option>Да</option>
                      <option>Нет</option>
                      <option>Не уверен</option>
                    </select>
                  </div>
                  <hr />
                  <div className="my-3 flex justify-between items-center gap-x-4">
                    <span className="flex items-center">Испытывали ли Вы судороги мышц на высокую температуру в детском возрасте?</span>
                    <select name="addQ6" className="px-3 py-2 w-72 border md:flex shadow-sm block rounded-md sm:text-sm">
                      <option>Да</option>
                      <option>Нет</option>
                      <option>Не уверен</option>
                    </select>
                  </div>
                  <hr />
                  <div className="my-3 flex justify-between items-center gap-x-4">
                    <span className="flex items-center">Есть ли иные неврологические заболевания?</span>
                    <input name="addQ7" type="text" autoComplete="text" className="px-3 py-2 w-72 border md:flex shadow-sm block rounded-md sm:text-sm" />
                  </div>
                  <hr />
                  <div className="my-3 flex justify-between items-center gap-x-4">
                    <span className="flex items-center">Проходили ли Вы хирургическое лечение от эпилепсии?</span>
                    <select name="addQ8" className="px-3 py-2 w-72 border md:flex shadow-sm block rounded-md sm:text-sm">
                      <option>Да</option>
                      <option>Нет</option>
                    </select>
                  </div>
                  <span className="flex justify-center my-10 font-bold items-center">Опросник по качеству жизни</span>
                  <div className="my-3 flex justify-between items-center gap-x-4">
                    <span className="flex items-center">Отмечаете ли Вы такие симптомы как снижение концентрации внимания или ухудшение памяти?</span>
                    <select name="addQ9" className="px-3 py-2 w-72 border md:flex shadow-sm block rounded-md sm:text-sm">
                      <option>Да</option>
                      <option>Нет</option>
                    </select>
                  </div>
                  <hr />
                  <div className="my-3 flex justify-between items-center gap-x-4">
                    <span className="flex items-center">Испытывали ли Вы сложности общении или социокультурном взаимодействии из-за установленного диагноза Эпилепсия?</span>
                    <select name="addQ10" className="px-3 py-2 w-72 border md:flex shadow-sm block rounded-md sm:text-sm">
                      <option>Да</option>
                      <option>Нет</option>
                    </select>
                  </div>
                  <hr />
                  <div className="my-3 flex justify-between items-center gap-x-4">
                    <span className="flex items-center">Справляетесь ли Вы с эмоциональными и психологическими аспектами своего заболевания?</span>
                    <select name="addQ11" className="px-3 py-2 w-72 border md:flex shadow-sm block rounded-md sm:text-sm">
                      <option>Да</option>
                      <option>Нет</option>
                    </select>
                  </div>
                  <hr />
                  <div className="my-3 flex justify-between items-center gap-x-4">
                    <span className="flex items-center">Пользуетесь ли Вы транспортным средством в качестве водителя?</span>
                    <select name="addQ12" className="px-3 py-2 w-72 border md:flex shadow-sm block rounded-md sm:text-sm">
                      <option>Да</option>
                      <option>Нет</option>
                    </select>
                  </div>
                </span>
                <div className="flex justify-center gap-x-4 shrink-0 lg:mt-0">
                  <button type="submit" className="text-blue-600 hover:bg-blue-600 border-gray-700 hover:text-white text-xs w-1/2 md:w-auto font-medium bg-gray-100 rounded-lg px-4 py-2.5">
                    Cохранить
                  </button>
                </div>
              </form>
            </div>
          </section>
          <div className="mb-44" />
        </span>
        {/* ) : ( */}
        {/* <div className="flex justify-center mt-10">
          <a href="/attack/add" className="flex justify-center w-50 cursor-pointer rounded-md py-2 px-4 text-gray-100 text-lg font-medium bg-blue-700 hover:bg-blue-500">Добавить приступ</a>
        </div>
        <div className="flex justify-center">
          <div className="flex grid grid-cols-3 p-8">
            {data && data.map(({ id, createdAt, attackInfo }) => (
              <div className="my-4 mx-10 flex flex-col">
                <div className="flex flex-col">
                  <div className="flex-1 w-96 bg-white rounded-lg shadow-xl p-8">
                    <h4 className="text-md mb-10 text-gray-900 font-bold">{(new Date(createdAt).toUTCString())}</h4>
                    <ul className="mt-2 mb-5 text-gray-700">
                      <li className="flex border-b justify-between py-2">
                        <span className="font-bold flex items-center w-52">Тип приступа:</span>
                        <span className="type text-gray-700">{attackInfo.type}</span>
                        <input className="typeInput" style={{ display: 'none' }} type="text" autoComplete="text" />
                        <h3 className="emptyField ml-5 text-center text-md font-bold leading-9 tracking-tight text-red-600" style={{ display: 'none' }}>Это поле обязательно!</h3>
                      </li>
                      <li className="flex border-b justify-between py-2">
                        <span className="font-bold flex items-center w-52">Потеря сознания:</span>
                        <span className="outMind text-gray-700">{attackInfo.outMind}</span>
                        <input className="outMind" style={{ display: 'none' }} type="text" autoComplete="text" />
                        <h3 className="emptyField ml-5 text-center text-md font-bold leading-9 tracking-tight text-red-600" style={{ display: 'none' }}>Это поле обязательно!</h3>
                      </li>
                    </ul>
                    <div className="flex justify-center gap-4">
                      <a href={`/attacks/${id}`} className="text-sm justify-center cursor-pointer rounded-lg bg-gray-500 px-4 py-1.5 text-white hover:bg-gray-600">Подробнее</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        {/* )} */}
      </span>
      {/* ) : (null)} */}

      {/* <div className="flex justify-center mt-10">
        <span className="text-gray-700 text-xl ml-1 md:ml-2 text-sm font-medium">Ваши пациенты:</span>
      </div>
      <div className="flex justify-center">
        <div className="flex grid grid-cols-3 p-8">
          {data && data.map(({ id, email, userInfo }) => (
            <div className="my-2 mx-10 flex">
              <div className="flex">
                <div className="flex-1 w-96 bg-white rounded-lg shadow-xl p-8">
                  <h4 className="text-md mb-10 text-gray-900 font-bold">{userInfo.fullName}</h4>
                  <ul className="mt-2 mb-5 text-gray-700">
                    <li className="flex border-b justify-between py-2">
                      <span className="font-bold flex items-center w-44">E-mail:</span>
                      <span className="email text-gray-700">{email}</span>
                      <input className="userNameInp" style={{ display: 'none' }} type="text" autoComplete="text" />
                    </li>
                    <li className="flex border-b justify-between py-2">
                      <span className="font-bold flex items-center w-44">Дата рождения:</span>
                      <span className="bDate text-gray-700">{userInfo.birthDate}</span>
                      <input className="bdInput" style={{ display: 'none' }} type="text" autoComplete="text" />
                      <h3 className="emptyEmail ml-5 text-center text-md font-bold leading-9 tracking-tight text-red-600" style={{ display: 'none' }}>Это поле обязательно!</h3>
                    </li>
                    <li className="flex border-b justify-between py-2">
                      <span className="font-bold flex items-center w-44">Пол при рождении:</span>
                      <span className="gender text-gray-700">{userInfo.gender}</span>
                      <input className="genderInput" style={{ display: 'none' }} type="text" autoComplete="text" />
                    </li>
                  </ul>
                  <div className="flex justify-center gap-4">
                    <a href={`/attacks/${id}`} className="text-sm justify-center cursor-pointer rounded-lg bg-gray-500 px-4 py-1.5 text-white hover:bg-gray-600">Подробнее</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <script src="/js/profile.js" />
    </Layout>
  );
};