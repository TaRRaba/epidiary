const React = require('react');
const Layout = require('./Layout');

module.exports = function AddAttack({ user }) {
  return (
    <Layout user={user}>
      <section className="flex w-3/5 mt-10 p-4 mx-auto border md:gap-x-4 justify-center bg-white md:items-center border-gray-700 rounded-2xl">
        <div className="flex justify-center">
          <div name="attackForm" className="attackForm bg-white">
            <div>
              <h2 className="text-2xl">Добавление приступа</h2>
            </div>
            <hr className="mt-2 mb-5" />
            <div className="mandatoryQues1 my-3">
              <p>1. Приступ случился сегодня?</p>
              <select className="question1Select border shadow-sm rounded-md mt-3">
                <option value="Да">Да</option>
                <option value="Нет">Нет</option>
              </select>
              <input required className="question1Input visibility: hidden ml-3 border shadow-sm rounded-md" type="date" />
            </div>
            <div className="mandatoryQues2 my-3">
              <p>2. Какой тип эпилептического приступа случился?</p>
              <select className="question2Select border shadow-sm rounded-md mt-3">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div className="infoDivButton visibility: visible">
              <button data-info="info" type="button" className="ml-2 flex cursor-pointer text-blue-600 hover:bg-blue-600 items-center gap-x-1 rounded-md border py-2 px-4 hover:text-white">
                Добавить больше информации
                {' '}
                <br />
                {' '}
                (не обязательно)
              </button>
            </div>
            <div className="hideDivButton visibility: hidden">
              <button data-hide="hide" type="button" className="ml-2 flex cursor-pointer text-blue-600 hover:bg-blue-600 items-center gap-x-1 rounded-md border py-2 px-4 hover:text-white">
                Убрать дополнительную информацию
              </button>
            </div>

            <div className="additionalInfo visibility: hidden my-3">

              <h2 className="text-xl">Дополнительная информация</h2>
              <hr className="mt-2 mb-5" />
              <div className="my-3">
                <p>3. Предчувствуете ли Вы начало приступа?</p>
                <select className="question3Select border shadow-sm w-72 rounded-md mt-3">
                  <option value="">Выбрать вариант</option>
                  <option value="Да">Да</option>
                  <option value="Нет">Нет</option>
                  <option value="Свой вариант">Свой вариант</option>
                </select>
                <input className="question3Input visibility: hidden ml-3 border shadow-sm w-72 rounded-md mt-3" type="text" />
              </div>

              <div className="my-3">
                <p>4. Сколько типов эпилептических приступов Вы испытываете? </p>
                <select className="question4Select border shadow-sm w-72 rounded-md mt-3">
                  <option value="">Выбрать вариант</option>
                  <option value=" Один тип приступов"> Один тип приступов</option>
                  <option value="Два типа приступов">Два типа приступов</option>
                  <option value="Три типа приступов">Три типа приступов</option>
                  <option value="Свой вариант">Свой вариант</option>
                </select>
                <input className="question4Input visibility: hidden ml-3 border shadow-sm w-72 rounded-md mt-3" type="text" />
              </div>
              <div className="my-3">
                <p>5. Как долго длится Ваш типичный эпилептический приступ?</p>
                <input className="question5Input box-content w-12 h-4 mr-2 border shadow-sm rounded-md mt-3" type="number" />
                <span>минут</span>
              </div>
              <div className="my-3">
                <p>
                  6. Происходит ли травматизация во время приступа?
                  <br />
                  (Под травмой понимается следующие события:
                  падение с высоты собственного роста, прикус языка, ушибы, переломы)
                </p>
                <select className="question6Select border shadow-sm w-72 rounded-md mt-3">
                  <option value="">Выбрать вариант</option>
                  <option value="Да">Да</option>
                  <option value="Нет">Нет</option>
                  <option value="Свой вариант">Свой вариант</option>
                </select>
                <input className="question6Input visibility: hidden ml-3 border shadow-sm w-72 rounded-md mt-3" type="text" />
              </div>
              <p>7. Как Вы чувствуете себя после приступа?</p>
              <div className="flex-col my-3">
                <form className="check" name="check7">
                  <div className="check-box">
                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                      <input
                        type="checkbox"
                        value="Сразу прихожу в сознание"
                        id="q1"
                      />
                      <label
                        className="inline-block pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="q1"
                      >
                        Сразу прихожу в сознание
                      </label>
                    </div>

                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                      <input
                        type="checkbox"
                        value="Приступ не сопровождается потерей сознания"
                        id="q2"
                      />
                      <label
                        className="inline-block pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="q2"
                      >
                        Приступ не сопровождается потерей сознания
                      </label>
                    </div>

                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                      <input
                        type="checkbox"
                        value="Длительная дезориентация после приступа"
                        id="q3"
                      />
                      <label
                        className="inline-block pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="q3"
                      >
                        Длительная дезориентация после приступа
                      </label>
                    </div>

                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                      <input
                        type="checkbox"
                        value="Долгий сон после приступа"
                        id="q4"
                      />
                      <label
                        className="inline-block pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="q4"
                      >
                        Долгий сон после приступа
                      </label>
                    </div>

                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                      <input
                        type="checkbox"
                        value="Сильная мышечная слабость"
                        id="q5"
                      />
                      <label
                        className="inline-block pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="q5"
                      >
                        Сильная мышечная слабость
                      </label>
                    </div>

                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                      <input
                        type="checkbox"
                        value="Агрессивное поведение после приступа"
                        id="q6"
                      />
                      <label
                        className="inline-block pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="q6"
                      >
                        Агрессивное поведение после приступа
                      </label>
                    </div>

                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                      <input
                        type="checkbox"
                        value=""
                        id="q7"
                      />
                      <label
                        className="inline-block pl-[0.15rem] hover:cursor-pointer"
                        id="labl"
                        htmlFor="q7"
                      >
                        Свой вариант
                      </label>
                      <input
                        className="border shadow-sm w-72 rounded-md mt-3"
                        type="text"
                        id="svoi"
                        hidden="hidden"
                        placeholder="Опишите свой вариант"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="my-3">
                <p>
                  8. Как часто у вас случаются эпилептические приступы?
                  <br />
                  (Примерное количество приступов в день/неделю/месяц)
                </p>
                <input className="question8Input box-content w-12 h-4 mr-2 border shadow-sm rounded-md mt-3" type="number" />
                <select className="question8Select border shadow-sm rounded-md mt-3">
                  <option value="День">День</option>
                  <option value="Неделю">Неделю</option>
                  <option value="Месяц">Месяц</option>
                </select>
              </div>
              <div className="my-3">
                <p>
                  9. Был ли период, когда у вас длительное время не возникали эпилептические приступы?
                  <br />
                  (Подразумевается период ремиссии эпилептических препаратов на фоне приема
                  медикаментозной
                  <br />
                  терапии/проведенного хирургического лечения)
                </p>
                <select className="question9Select border shadow-sm w-72 rounded-md mt-3">
                  <option value="">Выбрать вариант</option>
                  <option value="Да">Да</option>
                  <option value="Нет">Нет</option>
                  <option value="Не уверен">Не уверен(a)</option>
                </select>
              </div>

              <div className="my-3">
                <p>
                  10. При положительном ответе на предыдущий вопрос:
                  <br />
                  Укажите длительность этого периода(в месяцах)?
                </p>
                <input className="question10Input border shadow-sm w-72 rounded-md mt-3" type="text" />
              </div>

              <div className="my-3">
                <p>
                  11. Менялся ли характер эпилептических приступов на протяжении
                  всего вашего заболевания?
                </p>
                <select className="question11Select border shadow-sm w-72 rounded-md mt-3">
                  <option value="">Выбрать вариант</option>
                  <option value="Да">Да</option>
                  <option value="Нет">Нет</option>
                  <option value="Не уверен">Не уверен(a)</option>
                </select>
              </div>

              <div className="my-3">
                <p>
                  12. При положительном ответе на предыдущий вопрос:
                </p>
                <select className="question12Select border shadow-sm w-72 rounded-md mt-3">
                  <option value="">Выбрать вариант</option>
                  <option value="Возник новый тип эпилептических приступов, качественно отличающийся от типичных типов приступов">Возник новый тип эпилептических приступов, качественно отличающийся от типичных типов приступов</option>
                  <option value="Качественно изменились уже имеющиеся приступы">Качественно изменились уже имеющиеся приступы</option>
                  <option value="Появилась склонность к серийности приступов">Появилась склонность к серийности приступов</option>
                  <option value="Свой вариант">Свой вариант</option>
                </select>
                <br />
                <input className="question12Input visibility: hidden my-3 border shadow-sm w-72 rounded-md mt-3" type="text" />
              </div>

              <div className="my-3">
                <p>
                  13. Испытывали ли Вы приступы, после которых была необходима госпитализация
                  в реанимационное отделение?
                  <br />
                  (Подразумевается возникновение эпилептического статуса либо серии генерализованных
                  тонико-клонических эпилептических приступов)
                </p>
                <select className="question13Select border shadow-sm w-72 rounded-md mt-3">
                  <option value="">Выбрать вариант</option>
                  <option value="Да">Да</option>
                  <option value="Нет">Нет</option>
                  <option value="Не уверен">Не уверен(a)</option>
                </select>
              </div>

              <div className="my-3">
                <p>
                  14. Уточнение по предыдущему вопросу если ответ “Да”:
                  <br />
                  Сколько таких событий происходило за весь период заболевания?
                </p>
                <input className="question14Input border shadow-sm w-72 rounded-md mt-3" type="text" />
              </div>

              <p>15. Какие из перечисленных обстоятельств могут спровоцировать эпилептический приступ? </p>
              <form className="mt-3 check15" name="check15">
                <div className="check-box">
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      type="checkbox"
                      value="Недостаток сна"
                      id="q1"
                    />
                    <label
                      className="inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="q1"
                    >
                      Недостаток сна
                    </label>
                  </div>

                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      type="checkbox"
                      value="Психоэмоциональный стресс"
                      id="q2"
                    />
                    <label
                      className="inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="q2"
                    >
                      Психоэмоциональный стресс
                    </label>
                  </div>

                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      type="checkbox"
                      value="Физическая активность"
                      id="q3"
                    />
                    <label
                      className="inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="q3"
                    >
                      Физическая активность
                    </label>
                  </div>

                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      type="checkbox"
                      value="Прием алкоголя"
                      id="q4"
                    />
                    <label
                      className="inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="q4"
                    >
                      Прием алкоголя
                    </label>
                  </div>

                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      type="checkbox"
                      value="Пропуск противоэпилептической терапии"
                      id="q5"
                    />
                    <label
                      className="inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="q5"
                    >
                      Пропуск противоэпилептической терапии
                    </label>
                  </div>

                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      type="checkbox"
                      value="Замена противоэпилептической терапии"
                      id="q6"
                    />
                    <label
                      className="inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="q6"
                    >
                      Замена противоэпилептической терапии
                    </label>
                  </div>

                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      type="checkbox"
                      value="Гипервентиляция"
                      id="q7"
                    />
                    <label
                      className="inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="q7"
                    >
                      Гипервентиляция
                    </label>
                  </div>

                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      type="checkbox"
                      value="Мерцание света"
                      id="q8"
                    />
                    <label
                      className="inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="q8"
                    >
                      Мерцание света
                    </label>
                  </div>

                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      type="checkbox"
                      value="Очень яркий свет"
                      id="q9"
                    />
                    <label
                      className="inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="q9"
                    >
                      Очень яркий свет
                    </label>
                  </div>

                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      type="checkbox"
                      value="Начало менструального цикла"
                      id="q10"
                    />
                    <label
                      className="inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="q10"
                    >
                      Начало менструального цикла
                    </label>
                  </div>

                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      type="checkbox"
                      value="Пребывание в душном помещении"
                      id="q11"
                    />
                    <label
                      className="inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="q11"
                    >
                      Пребывание в душном помещении
                    </label>
                  </div>

                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      type="checkbox"
                      value="Обострение хронического заболевания"
                      id="q12"
                    />
                    <label
                      className="inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="q12"
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
                      className="border shadow-sm w-72 rounded-md mt-3"
                      id="svoi15"
                      hidden="hidden"
                      placeholder="Опишите свой вариант"
                    />
                  </div>
                </div>
              </form>

              <div className="my-3">
                <p>16.  В какое время суток обычно возникают приступы?</p>
                <select className="question16Select border shadow-sm w-72 rounded-md mt-3">
                  <option value="">Выбрать вариант</option>
                  <option value="Утро">Утро</option>
                  <option value="День">День</option>
                  <option value="Вечер">Вечер</option>
                  <option value="Ночь">Ночь</option>
                </select>
              </div>

              <h2 className="text-xl">Данные о противоэпилептической терапии</h2>

              <div className="my-3">
                <p>
                  17. Какие противоэпилептические препараты вы принимаете в настоящее время ?
                  <br />
                </p>
                <select className="question17Select border shadow-sm w-72 rounded-md mt-3">
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
                <input className="question17Input visibility: hidden ml-3 border shadow-sm w-72 rounded-md mt-3" type="text" />
              </div>

              <div className="my-3">
                <p>
                  18. Укажите кратность приема выбранного препарата.
                  <br />
                </p>
                <select className="question18Select border shadow-sm w-72 rounded-md mt-3">
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
                <input className="question18Input visibility: hidden ml-3 border shadow-sm w-72 rounded-md mt-3" type="text" />
              </div>

              <div className="my-3">
                <p>
                  19. По какой причине была проведена отмена/замена препарата?
                  <br />
                </p>
                <select className="question19Select border shadow-sm w-72 rounded-md mt-3">
                  <option value="">Выбрать вариант</option>
                  <option value="Сохранение приступов">Сохранение приступов</option>
                  <option value="Учащение приступов">Учащение приступов</option>
                  <option value="Появление побочных реакций">Появление побочных реакций</option>
                  <option value="Планирование беременности">Планирование беременности</option>
                  <option value="Нежелательные лекарственные взаимодействия">Нежелательные лекарственные взаимодействия</option>
                </select>
              </div>

              <div className="my-3">
                <p>
                  20. Какие противоэпилептические препараты вы принимали с момента установления
                  диагноза и до настоящего времени?
                  <br />
                </p>
                <select className="question20Select border shadow-sm w-72 rounded-md mt-3">
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
                <input className="question20Input visibility: hidden ml-3 border shadow-sm w-72 rounded-md mt-3" type="text" />
              </div>

            </div>

            <div className="flex my-3">
              <button data-save="save" type="button" className="ml-2 flex cursor-pointer text-blue-600 hover:bg-blue-600 items-center gap-x-1 rounded-md border py-2 px-4 hover:text-white">Сохранить</button>
              <button data-cancel="cancel" type="button" className="ml-2 flex cursor-pointer text-blue-600 hover:bg-blue-600 items-center gap-x-1 rounded-md border py-2 px-4 hover:text-white">Отменить</button>
            </div>

          </div>
        </div>
      </section>
      <script defer src="/js/attack.js" />
    </Layout>
  );
};
