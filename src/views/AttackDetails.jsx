const React = require('react');
const Layout = require('./Layout');

module.exports = function AttackDetails({ data, user }) {
  return (
    <Layout user={user}>
      <section className="flex w-3/5 mt-10 p-4 mx-auto border md:gap-x-4 justify-center bg-white md:items-center border-gray-700 rounded-2xl">
        <div id={data.id} className="attackID flex justify-center">
          <div className="attackInfoDiv">
            <div>
              <p className="text-2xl">Информация о приступе</p>
              <p className="mt-1 text-sm text-gray-500">{`Дата приступа: ${data.attackInfo.question1}`}</p>

            </div>
            <hr className="mt-2 mb-5" />
            <div className="flex-col">
              <div className="flex-col my-3">
                <p className="mx-3">1. Приступ случился сегодня?</p>
                <span className="flex">
                  <p className="question1value visibility: visible mx-3 mt-3 font-bold">{data.attackInfo.question1}</p>
                  <input className="question1Input visibility: hidden mx-3 mt-3 px-3 py-2 w-44 border shadow-sm block rounded-md sm:text-sm ml-3" type="date" />
                </span>
              </div>
              <div className="flex-col my-3">
                <p className="mx-3">2. Какой тип эпилептического приступа случился?</p>
                <span className="flex">
                  <p className="question2value visibility: visible mx-3 mt-2 font-bold">{data.attackInfo.question2}</p>
                  <div className="question2div visibility: hidden">
                    <select className="question2Select mx-3 mt-3 px-3 py-2 w-16 border md:flex shadow-sm block rounded-md sm:text-sm">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </span>
              </div>

              <br />
              <div className="flex-col my-3">
                <p className="mx-3">
                  3. Предчувствуете ли Вы начало приступа?
                </p>
                <span className="flex">
                  <p className="question3value visibility: visible mx-3 mt-2 font-bold">{data.attackInfo.question3 === '' ? 'Не указано' : data.attackInfo.question3}</p>
                  <div className="flex question3div visibility: hidden">
                    <select className="question3Select mx-3 mt-3 px-3 py-2 w-72 border md:flex shadow-sm block rounded-md sm:text-sm">
                      <option value="">Выбрать вариант</option>
                      <option value="Да">Да</option>
                      <option value="Нет">Нет</option>
                      <option value="Свой вариант">Свой вариант</option>
                    </select>
                    <input className="question3Input visibility: hidden mx-3 mt-3 px-3 py-2 w-72 border shadow-sm block rounded-md sm:text-sm" type="text" />
                  </div>
                </span>
              </div>
              <div className="flex-col my-3">
                <p className="mx-3">4. Сколько типов эпилептических приступов Вы испытываете?</p>
                <span className="flex">
                  <p className="question4value visibility: visible mx-3 mt-2 font-bold">{data.attackInfo.question4 === '' ? 'Не указано' : data.attackInfo.question4}</p>
                  <div className="flex question4div visibility: hidden">
                    <select className="question4Select mx-3 mt-3 px-3 py-2 w-72 border shadow-sm block rounded-md sm:text-sm">
                      <option value="">Выбрать вариант</option>
                      <option value=" Один тип приступов"> Один тип приступов</option>
                      <option value="Два типа приступов">Два типа приступов</option>
                      <option value="Три типа приступов">Три типа приступов</option>
                      <option value="Свой вариант">Свой вариант</option>
                    </select>
                    <input className="question4Input visibility: hidden mx-3 mt-3 px-3 py-2 w-72 border shadow-sm block rounded-md sm:text-sm" type="text" />
                  </div>
                </span>
              </div>
              <div className="flex-col my-3">
                <p className="mx-3">5. Как долго длится Ваш типичный эпилептический приступ?</p>
                <span className="flex">
                  <p className="question5value visibility: visible ml-3 mt-2 font-bold">{data.attackInfo.question5 === '' ? 'Не указано' : data.attackInfo.question5}</p>
                  <input className="question5Input visibility: hidden box-content mx-3 mt-3 px-3 py-2 w-16 border shadow-sm block rounded-md sm:text-sm" type="number" />
                  <span className="mt-2 ml-2 flex items-center">минут(ы)</span>
                </span>
              </div>
              <div className="flex-col my-3">
                <p className="mx-3">
                  6. Происходит ли травматизация во время приступа?
                  (Под травмой понимается следующие события:
                  падение с высоты собственного роста, прикус языка, ушибы, переломы)
                </p>
                <span className="flex">
                  <p className="question6value visibility: visible mx-3 mt-2 font-bold">{data.attackInfo.question6 === '' ? 'Не указано' : data.attackInfo.question6}</p>
                  <div className="flex question6div visibility: hidden">
                    <select className="question6Select mx-3 mt-3 px-3 py-2 w-72 border shadow-sm block rounded-md sm:text-sm">
                      <option value="">Выбрать вариант</option>
                      <option value="Да">Да</option>
                      <option value="Нет">Нет</option>
                      <option value="Свой вариант">Свой вариант</option>
                    </select>
                    <input className="question6Input visibility: hidden mx-3 mt-3 px-3 py-2 w-72 border shadow-sm block rounded-md sm:text-sm" type="text" />
                  </div>
                </span>
              </div>
              <div className="flex-col my-3">
                <p className="mx-3">7. Как Вы чувствуете себя после приступа?</p>
                <div className="question7value visibility: visible">
                  {data.attackInfo.question7.map((el) => (
                    <p className="visibility: visible mx-3 mt-2 font-bold">{el === '' ? 'Не указано' : el}</p>
                  ))}
                </div>
                <div className="mt-3 check-form7 visibility: hidden">
                  <form name="check7">
                    <div className="check-box">
                      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          type="checkbox"
                          value="Сразу прихожу в сознание"
                          id="q1-7"
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="q1-7"
                        >
                          Сразу прихожу в сознание
                        </label>
                      </div>

                      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          type="checkbox"
                          value="Приступ не сопровождается потерей сознания"
                          id="q2-7"
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="q2-7"
                        >
                          Приступ не сопровождается потерей сознания
                        </label>
                      </div>

                      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          type="checkbox"
                          value="Длительная дезориентация после приступа"
                          id="q3-7"
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="q3-7"
                        >
                          Длительная дезориентация после приступа
                        </label>
                      </div>

                      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          type="checkbox"
                          value="Долгий сон после приступа"
                          id="q4-7"
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="q4-7"
                        >
                          Долгий сон после приступа
                        </label>
                      </div>

                      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          type="checkbox"
                          value="Сильная мышечная слабость"
                          id="q5-7"
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="q5-7"
                        >
                          Сильная мышечная слабость
                        </label>
                      </div>

                      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          type="checkbox"
                          value="Агрессивное поведение после приступа"
                          id="q6-7"
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="q6-7"
                        >
                          Агрессивное поведение после приступа
                        </label>
                      </div>

                      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          type="checkbox"
                          value=""
                          id="q7-7"
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          id="labl"
                          htmlFor="q7-7"
                        >
                          Свой вариант
                        </label>
                        <input
                          className="px-3 py-2 w-72 border shadow-sm rounded-md"
                          type="text"
                          id="svoi"
                          hidden="hidden"
                          placeholder="Опишите свой вариант"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex-col my-3">
                <p className="mx-3">
                  8. Как часто у вас случаются эпилептические приступы?
                  (Примерное количество приступов в день/неделю/месяц)

                </p>
                <span className="flex">
                  <p className="question8value visibility: visible mx-3 mt-2 font-bold">{data.attackInfo.question8 === '' ? 'Не указано' : data.attackInfo.question8}</p>
                  <div className="question8div flex visibility: hidden">
                    <input className="question8Input box-content mx-3 mt-3 px-3 py-2 w-12 border shadow-sm block rounded-md sm:text-sm" type="number" />
                    <select className="question8Select mx-3 mt-3 px-3 py-2 w-28 border shadow-sm block rounded-md sm:text-sm">
                      <option value="День">День</option>
                      <option value="Неделю">Неделю</option>
                      <option value="Месяц">Месяц</option>
                    </select>
                  </div>
                </span>
              </div>
              <div className="flex-col my-3">
                <p className="mx-3">
                  9. Был ли период, когда у вас длительное время не возникали эпилептические приступы?
                  (Подразумевается период ремиссии эпилептических препаратов на фоне приема
                  медикаментозной терапии/проведенного хирургического лечения)
                </p>
                <span className="flex">
                  <p className="question9value visibility: visible mx-3 mt-2 font-bold">{data.attackInfo.question9 === '' ? 'Не указано' : data.attackInfo.question9}</p>
                  <div className="question9div visibility: hidden">
                    <select className="question9Select mx-3 mt-3 px-3 py-2 w-72 border shadow-sm block rounded-md sm:text-sm">
                      <option value="">Выбрать вариант</option>
                      <option value="Да">Да</option>
                      <option value="Нет">Нет</option>
                      <option value="Не уверен">Не уверен(a)</option>
                    </select>
                  </div>
                </span>
              </div>
              <div className="flex-col my-3">
                <p className="mx-3">
                  10. При положительном ответе на предыдущий вопрос:
                  Укажите длительность этого периода(в месяцах)?
                </p>
                <span className="flex">
                  <p className="question10value visibility: visible mx-3 mt-2 font-bold">
                    {data.attackInfo.question10 === '' ? 'Не указано' : data.attackInfo.question10}
                  </p>
                  <input className="question10Input visibility: hidden mx-3 mt-3 px-3 py-2 w-72 border shadow-sm block rounded-md sm:text-sm" type="text" />
                </span>
              </div>
              <div className="flex-col my-3">
                <p className="mx-3">
                  11. Менялся ли характер эпилептических приступов на протяжении
                  всего вашего заболевания?
                </p>
                <span className="flex">
                  <p className="question11value visibility: visible mx-3 mt-2 font-bold">
                    {data.attackInfo.question11 === '' ? 'Не указано' : data.attackInfo.question11}
                  </p>
                  <div className="question11div visibility: hidden">
                    <select className="question11Select mx-3 mt-3 px-3 py-2 w-72 border shadow-sm block rounded-md sm:text-sm">
                      <option value="">Выбрать вариант</option>
                      <option value="Да">Да</option>
                      <option value="Нет">Нет</option>
                      <option value="Не уверен">Не уверен(a)</option>
                    </select>
                  </div>
                </span>
              </div>
              <div className="flex-col my-3">
                <p className="mx-3">
                  12. При положительном ответе на предыдущий вопрос:
                </p>
                <span className="flex">
                  <p className="question12value visibility: visible mx-3 mt-2 font-bold">
                    {data.attackInfo.question12 === '' ? 'Не указано' : data.attackInfo.question12}
                  </p>
                  <div className="question12div flex visibility: hidden">
                    <select className="question12Select mx-3 mt-3 px-3 py-2 w-72 border shadow-sm block rounded-md sm:text-sm">
                      <option value="">Выбрать вариант</option>
                      <option value="Возник новый тип эпилептических приступов, качественно отличающийся от типичных типов приступов">Возник новый тип эпилептических приступов, качественно отличающийся от типичных типов приступов</option>
                      <option value="Качественно изменились уже имеющиеся приступы">Качественно изменились уже имеющиеся приступы</option>
                      <option value="Появилась склонность к серийности приступов">Появилась склонность к серийности приступов</option>
                      <option value="Свой вариант">Свой вариант</option>
                    </select>
                    <br />
                    <input className="question12Input visibility: hidden mx-3 mt-3 px-3 py-2 w-72 border shadow-sm block rounded-md sm:text-sm" type="text" />
                  </div>
                </span>
              </div>
              <div className="flex-col my-3">
                <p className="mx-3">
                  13. Испытывали ли Вы приступы, после которых была необходима госпитализация
                  в реанимационное отделение?
                  (Подразумевается возникновение эпилептического статуса либо серии генерализованных
                  тонико-клонических эпилептических приступов)
                </p>
                <span className="flex">
                  <p className="question13value visibility: visible mx-3 mt-2 font-bold">
                    {data.attackInfo.question13 === '' ? 'Не указано' : data.attackInfo.question13}
                  </p>
                  <div className="question13div visibility: hidden">
                    <select className="question13Select mx-3 mt-3 px-3 py-2 w-72 border shadow-sm block rounded-md sm:text-sm">
                      <option value="">Выбрать вариант</option>
                      <option value="Да">Да</option>
                      <option value="Нет">Нет</option>
                      <option value="Не уверен">Не уверен(a)</option>
                    </select>
                  </div>
                </span>
              </div>
              <div className="flex-col my-3">
                <p className="mx-3">
                  14. Уточнение по предыдущему вопросу если ответ “Да”:
                  Сколько таких событий происходило за весь период заболевания?
                </p>
                <span className="flex">
                  <p className="question14value visibility: visible mx-3 mt-2 font-bold">
                    {data.attackInfo.question14 === '' ? 'Не указано' : data.attackInfo.question14}
                  </p>
                  <input className="question14Input visibility: hidden mx-3 mt-3 px-3 py-2 w-72 border shadow-sm block rounded-md sm:text-sm" type="text" />
                </span>
              </div>
              <div className="flex-col my-3">
                <p className="mx-3">
                  15. Какие из перечисленных обстоятельств могут спровоцировать
                  эпилептический приступ?

                </p>
                <div className="question15value visibility: visible">
                  {data.attackInfo.question15.map((el) => (
                    <p className="visibility: visible mx-3 mt-2 font-bold">{el === '' ? 'Не указано' : el}</p>
                  ))}
                </div>
                <div className="mt-3 check-form15 visibility: hidden">
                  <form className="check15" name="check15">
                    <div className="check-box">
                      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          type="checkbox"
                          value="Недостаток сна"
                          id="q1-15"
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="q1-15"
                        >
                          Недостаток сна
                        </label>
                      </div>

                      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          type="checkbox"
                          value="Психоэмоциональный стресс"
                          id="q2-15"
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="q2-15"
                        >
                          Психоэмоциональный стресс
                        </label>
                      </div>

                      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          type="checkbox"
                          value="Физическая активность"
                          id="q3-15"
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="q3-15"
                        >
                          Физическая активность
                        </label>
                      </div>

                      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          type="checkbox"
                          value="Прием алкоголя"
                          id="q4-15"
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="q4-15"
                        >
                          Прием алкоголя
                        </label>
                      </div>

                      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          type="checkbox"
                          value="Пропуск противоэпилептической терапии"
                          id="q5-15"
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="q5-15"
                        >
                          Пропуск противоэпилептической терапии
                        </label>
                      </div>

                      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          type="checkbox"
                          value="Замена противоэпилептической терапии"
                          id="q6-15"
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="q6-15"
                        >
                          Замена противоэпилептической терапии
                        </label>
                      </div>

                      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          type="checkbox"
                          value="Гипервентиляция"
                          id="q7-15"
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="q7-15"
                        >
                          Гипервентиляция
                        </label>
                      </div>

                      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          type="checkbox"
                          value="Мерцание света"
                          id="q8-15"
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="q8-15"
                        >
                          Мерцание света
                        </label>
                      </div>

                      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          type="checkbox"
                          value="Очень яркий свет"
                          id="q9-15"
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="q9-15"
                        >
                          Очень яркий свет
                        </label>
                      </div>

                      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          type="checkbox"
                          value="Начало менструального цикла"
                          id="q10-15"
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="q10-15"
                        >
                          Начало менструального цикла
                        </label>
                      </div>

                      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          type="checkbox"
                          value="Пребывание в душном помещении"
                          id="q11-15"
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="q11-15"
                        >
                          Пребывание в душном помещении
                        </label>
                      </div>

                      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          type="checkbox"
                          value="Обострение хронического заболевания"
                          id="q12-15"
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="q12-15"
                        >
                          Обострение хронического заболевания
                        </label>
                      </div>

                      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          type="checkbox"
                          value=""
                          id="qPrecond"
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          id="lablPrecond"
                          htmlFor="qPrecond"
                        >
                          Свой вариант
                        </label>
                        <input
                          type="text"
                          id="svoi15"
                          hidden="hidden"
                          placeholder="Опишите свой вариант"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex-col my-3">
                <p className="mx-3">
                  16. В какое время суток обычно возникают приступы?
                </p>
                <span className="flex">
                  <p className="question16value visibility: visible mx-3 mt-2 font-bold">
                    {data.attackInfo.question16 === '' ? 'Не указано' : data.attackInfo.question16}
                  </p>
                  <div className="question16div visibility: hidden">
                    <select className="question16Select mx-3 mt-3 px-3 py-2 w-72 border shadow-sm block rounded-md sm:text-sm">
                      <option value="">Выбрать вариант</option>
                      <option value="Утро">Утро</option>
                      <option value="День">День</option>
                      <option value="Вечер">Вечер</option>
                      <option value="Ночь">Ночь</option>
                    </select>
                  </div>
                </span>
              </div>
              <div className="flex-col my-3">
                <p className="mx-3">
                  17. Какие противоэпилептические препараты вы принимаете в настоящее время ?
                </p>
                <span className="flex">
                  <p className="question17value visibility: visible mx-3 mt-2 font-bold">
                    {data.attackInfo.question17 === '' ? 'Не указано' : data.attackInfo.question17}
                  </p>
                  <div className="question17div flex visibility: hidden">
                    <select className="question17Select mx-3 mt-3 px-3 py-2 w-72 border shadow-sm block rounded-md sm:text-sm">
                      <option value="">Выбрать вариант</option>
                      <option value="Карбамазепин 100 мг">Карбамазепин 100 мг</option>
                      <option value="Карбамазепин 200 мг">Карбамазепин 200 мг</option>
                      <option value="Леветирацетам 200 мг">Леветирацетам 200 мг</option>
                      <option value="Леветирацетам 500 мг">Леветирацетам 500 мг</option>
                      <option value="Ламотриджин 25 мг">Ламотриджин 25 мг</option>
                      <option value="Ламотриджин 50 мг">Ламотриджин 50 мг</option>
                      <option value="Вальпроевая кислота 15 мг/кг">Вальпроевая кислота 15 мг/кг</option>
                      <option value="Вальпроевая кислота 10 мг/кг">Вальпроевая кислота 10 мг/кг</option>
                      <option value="Вальпроевая кислота 20 мг/кг">Вальпроевая кислота 20 мг/кг</option>
                      <option value="Топирамат 25 мг">Топирамат 25 мг</option>
                      <option value="Топирамат 100 мг">Топирамат 100 мг</option>
                      <option value="Окскарбазепин 300 мг">Окскарбазепин 300 мг</option>
                      <option value="Окскарбазепин 600 мг">Окскарбазепин 600 мг</option>
                      <option value="Бриварацетам 50 мг">Бриварацетам 50 мг</option>
                      <option value="Бриварацетам 200 мг">Бриварацетам 200 мг</option>
                      <option value="Перампанел 2 мг">Перампанел 2 мг</option>
                      <option value="Перампанел 4 мг">Перампанел 4 мг</option>
                      <option value="Перампанел 8 мг">Перампанел 8 мг</option>
                      <option value="Фенобарбитал 50 мг">Фенобарбитал 50 мг</option>
                      <option value="Фенобарбитал 100 мг">Фенобарбитал 100 мг</option>
                      <option value="Клоназепам 1.5 мг">Клоназепам 1.5 мг</option>
                      <option value="Клоназепам 4 мг">Клоназепам 4 мг</option>
                      <option value="Лакосамид 50 мг">Лакосамид 50 мг</option>
                      <option value="Лакосамид 100 мг">Лакосамид 100 мг</option>
                      <option value="Зонисамид 50 мг">Зонисамид 50 мг</option>
                      <option value="Зонисамид 100 мг">Зонисамид 100 мг</option>
                      <option value="Фенитоин 200 мг">Фенитоин 200 мг</option>
                      <option value="Фенобарбитал 50 мг">Фенобарбитал 50 мг</option>
                      <option value="Фенобарбитал 100 мг">Фенобарбитал 100 мг</option>
                      <option value="Прегабалин 75 мг">Прегабалин 75 мг</option>
                      <option value="Прегабалин 150 мг">Прегабалин 150 мг</option>
                      <option value="Свой вариант">Свой вариант</option>
                    </select>
                    <input className="question17Input visibility: hidden mx-3 mt-3 px-3 py-2 w-72 border shadow-sm block rounded-md sm:text-sm" type="text" />
                  </div>
                </span>
              </div>
              <div className="flex-col my-3">
                <p className="mx-3">
                  18. Укажите кратность приема выбранного препарата.
                </p>
                <span className="flex">
                  <p className="question18value visibility: visible mx-3 mt-2 font-bold">
                    {data.attackInfo.question18 === '' ? 'Не указано' : data.attackInfo.question18}
                  </p>
                  <div className="question18div flex visibility: hidden">
                    <select className="question18Select mx-3 mt-3 px-3 py-2 w-72 border shadow-sm block rounded-md sm:text-sm">
                      <option value="">Выбрать вариант</option>
                      <option value="Карбамазепин 100 мг">Карбамазепин 100 мг: 1-3 раза в сутки</option>
                      <option value="Карбамазепин 200 мг">Карбамазепин 200 мг: 1-3 раза в сутки</option>
                      <option value="Леветирацетам 200 мг">Леветирацетам 200 мг: 2 раза в сутки</option>
                      <option value="Леветирацетам 500 мг">Леветирацетам 500 мг: 2 раза в сутки</option>
                      <option value="Ламотриджин 25 мг">Ламотриджин 25 мг: 1-2 раза в сутки</option>
                      <option value="Ламотриджин 50 мг">Ламотриджин 50 мг: 1-2 раза в сутки</option>
                      <option value="Вальпроевая кислота 5 мг/кг">Вальпроевая кислота 5 мг/кг: 1-2 раза в сутки</option>
                      <option value="Вальпроевая кислота 10 мг/кг">Вальпроевая кислота 10 мг/кг: 1-2 раза в сутки</option>
                      <option value="Вальпроевая кислота 20 мг/кг">Вальпроевая кислота 20 мг/кг: 1-2 раза в сутки</option>
                      <option value="Топирамат 25 мг">Топирамат 25 мг: 2 раза в сутки</option>
                      <option value="Топирамат 100 мг">Топирамат 100 мг: 2 раза в сутки</option>
                      <option value="Окскарбазепин 300 мг">Окскарбазепин 300 мг: 2 раза в сутки</option>
                      <option value="Окскарбазепин 600 мг">Окскарбазепин 600 мг: 2 раза в сутки</option>
                      <option value="Бриварацетам 50 мг">Бриварацетам 50 мг: 2 раза в сутки</option>
                      <option value="Бриварацетам 200 мг">Бриварацетам 200 мг: 2 раза в сутки</option>
                      <option value="Перампанел 2 мг">Перампанел 2 мг: 1 раз в сутки</option>
                      <option value="Перампанел 4 мг">Перампанел 4 мг: 1 раз в сутки</option>
                      <option value="Перампанел 8 мг">Перампанел 8 мг: 1 раз в сутки</option>
                      <option value="Фенобарбитал 50 мг">Фенобарбитал 50 мг: 2 раза в сутки</option>
                      <option value="Фенобарбитал 100 мг">Фенобарбитал 100 мг: 2 раза в сутки</option>
                      <option value="Клоназепам 1.5 мг">Клоназепам 1,5 мг: 3-4 раза в сутки</option>
                      <option value="Клоназепам 4 мг">Клоназепам 4 мг: 3-4 раза в сутки</option>
                      <option value="Лакосамид 50 мг">Лакосамид 50 мг: 2 раза в сутки</option>
                      <option value="Лакосамид 100 мг">Лакосамид 100 мг: 2 раза в сутки</option>
                      <option value="Зонисамид 50 мг">Зонисамид 50 мг: 1 раз в сутки</option>
                      <option value="Зонисамид 100 мг">Зонисамид 100 мг: 1 раз в сутки</option>
                      <option value="Фенитоин 200 мг">Фенитоин 200 мг: 2-4 раза в сутки</option>
                      <option value="Прегабалин 75 мг">Прегабалин 75 мг: 2-3 раза в сутки</option>
                      <option value="Прегабалин 150 мг">Прегабалин 150 мг: 2-3 раза в сутки</option>
                      <option value="Свой вариант">Свой вариант</option>
                    </select>
                    <input className="question18Input visibility: hidden mx-3 mt-3 px-3 py-2 w-72 border shadow-sm block rounded-md sm:text-sm" type="text" />
                  </div>
                </span>
              </div>
              <div className="flex-col my-3">
                <p className="mx-3">
                  19. По какой причине была проведена отмена/замена препарата?
                </p>
                <span className="flex">
                  <p className="question19value visibility: visible mx-3 mt-2 font-bold">
                    {data.attackInfo.question19 === '' ? 'Не указано' : data.attackInfo.question19}
                  </p>
                  <div className="question19div visibility: hidden">
                    <select className="question19Select mx-3 mt-3 px-3 py-2 w-72 border shadow-sm block rounded-md sm:text-sm">
                      <option value="">Выбрать вариант</option>
                      <option value="Сохранение приступов">Сохранение приступов</option>
                      <option value="Учащение приступов">Учащение приступов</option>
                      <option value="Появление побочных реакций">Появление побочных реакций</option>
                      <option value="Планирование беременности">Планирование беременности</option>
                      <option value="Нежелательные лекарственные взаимодействия">Нежелательные лекарственные взаимодействия</option>
                    </select>
                  </div>
                </span>
              </div>
              <div className="flex-col my-3">
                <p className="mx-3">
                  20. Какие противоэпилептические препараты вы принимали с момента установления
                  диагноза и до настоящего времени?
                </p>
                <span className="flex">
                  <p className="question20value visibility: visible mx-3 mt-2 font-bold">
                    {data.attackInfo.question20 === '' ? 'Не указано' : data.attackInfo.question20}
                  </p>
                  <div className="question20div flex visibility: hidden">
                    <select className="question20Select mx-3 mt-3 px-3 py-2 w-72 border shadow-sm block rounded-md sm:text-sm">
                      <option value="">Выбрать вариант</option>
                      <option value="Карбамазепин 100 мг">Карбамазепин 100 мг</option>
                      <option value="Карбамазепин 200 мг">Карбамазепин 200 мг</option>
                      <option value="Леветирацетам 200 мг">Леветирацетам 200 мг</option>
                      <option value="Леветирацетам 500 мг">Леветирацетам 500 мг</option>
                      <option value="Ламотриджин 25 мг">Ламотриджин 25 мг</option>
                      <option value="Ламотриджин 50 мг">Ламотриджин 50 мг</option>
                      <option value="Вальпроевая кислота 5 мг/кг">Вальпроевая кислота 5 мг/кг</option>
                      <option value="Вальпроевая кислота 10 мг/кг">Вальпроевая кислота 10 мг/кг</option>
                      <option value="Вальпроевая кислота 20 мг/кг">Вальпроевая кислота 20 мг/кг</option>
                      <option value="Топирамат 25 мг">Топирамат 25 мг</option>
                      <option value="Топирамат 100 мг">Топирамат 100 мг</option>
                      <option value="Окскарбазепин 300 мг">Окскарбазепин 300 мг</option>
                      <option value="Окскарбазепин 600 мг">Окскарбазепин 600 мг</option>
                      <option value="Бриварацетам 50 мг">Бриварацетам 50 мг</option>
                      <option value="Бриварацетам 200 мг">Бриварацетам 200 мг</option>
                      <option value="Перампанел 2 мг">Перампанел 2 мг</option>
                      <option value="Перампанел 4 мг">Перампанел 4 мг</option>
                      <option value="Перампанел 8 мг">Перампанел 8 мг</option>
                      <option value="Фенобарбитал 100 мг">Фенобарбитал 50 мг</option>
                      <option value="Фенобарбитал 100 мг">Фенобарбитал 100 мг</option>
                      <option value="Клоназепам 1,5 мг">Клоназепам 1,5 мг</option>
                      <option value="Клоназепам 4 мг">Клоназепам 4 мг</option>
                      <option value="Лакосамид 50 мг">Лакосамид 50 мг</option>
                      <option value="Лакосамид 100 мг">Лакосамид 100 мг</option>
                      <option value="Зонисамид 50 мг">Зонисамид 50 мг</option>
                      <option value="Зонисамид 100 мг">Зонисамид 100 мг</option>
                      <option value="Фенитоин 200 мг">Фенитоин 200 мг</option>
                      <option value="Прегабалин 75 мг">Прегабалин 75 мг</option>
                      <option value="Прегабалин 150 мг">Прегабалин 150 мг</option>
                      <option value="Свой вариант">Свой вариант</option>
                    </select>
                    <input className="question20Input visibility: hidden mx-3 mt-3 px-3 py-2 w-72 border shadow-sm block rounded-md sm:text-sm" type="text" />
                  </div>
                </span>
              </div>

              {/* {user?.type === 'user' ? ( */}
              <div className="flex my-5 mx-5">
                <button id="editInfo" type="button" className="visibility: visible ml-2 flex cursor-pointer text-blue-600 hover:bg-blue-600 items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-[#4520aa] hover:text-white">Внести изменения</button>
                <button id="saveInfo" type="button" className="visibility: hidden ml-2 flex cursor-pointer text-green-600 hover:bg-green-600 items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-[#4520aa] hover:text-white">Сохранить изменения</button>
                <button id="back" type="button" className="ml-2 flex cursor-pointer text-blue-600 hover:bg-blue-600 items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-[#4520aa] hover:text-white">Назад</button>
              </div>
            </div>

            {/* <div>
              <button data-backDoc="backDoc" type="button" className="ml-2 flex cursor-pointer text-[#4520aa] items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-[#4520aa] hover:text-white">Назад</button>
            </div>
          )} */}

          </div>
        </div>
      </section>
      <script defer src="/js/attackDetails.js" />
    </Layout>
  );
};
