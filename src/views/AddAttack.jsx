const React = require('react');
const Layout = require('./Layout');

module.exports = function AddAttack({ date, user }) {
  return (
    <Layout user={user}>
      <div className="flex justify-center mt-10">
        <form name="attackForm" className="attackForm bg-white" action="/attack" method="POST">
          <div>
            <h2 className="text-2xl mb-5">Новый приступ</h2>
            <p>
              Дата:
              {' '}
              {date}
            </p>
          </div>

          <div className="mandatoryQues1 my-3">
            <p>1. Какой тип приступа у Вас случился?</p>
            <select className="question1Select">
              <option value="Судорожный">Судорожный</option>
              <option value="Безсудорожный">Безсудорожный</option>
              <option value="Не уверен(а)">Не уверен(а)</option>
              <option value="Свой вариант">Свой вариант</option>
            </select>
            <input required placeholder='Заполните обязательное поле' className="question1Input visibility: hidden ml-3" type="text" />
          </div>
          <div className="mandatoryQues2 my-3">
            <p>2. Сопровождался ли этот приступ потерей сознания?</p>
            <select className="question2Select">
              <option value="Да">Да</option>
              <option value="Нет">Нет</option>
              <option value="Не уверен(а)">Не уверен(а)</option>
              <option value="Свой вариант">Свой вариант</option>
            </select>
            <input required="required" placeholder='Заполните обязательное поле' className="question2Input visibility: hidden ml-3" type="text" />
          </div>

          <div className="infoDivButton visibility: visible">
            <button data-info="info" type="button" className="ml-2 flex cursor-pointer text-[#4520aa] items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-[#4520aa] hover:text-white">
              Добавить больше информации
              {' '}
              <br />
              {' '}
              (не обязательно)
            </button>
          </div>
          <div className="hideDivButton visibility: hidden">
            <button data-hide="hide" type="button" className="ml-2 flex cursor-pointer text-[#4520aa] items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-[#4520aa] hover:text-white">
              Убрать дополнительную информацию
            </button>
          </div>

          <div className="additionalInfo visibility: hidden my-3">
            <div className="my-3">
              <p>
                3. Опишите, пожалуйста, характер своих приступов.
                Как они начинаются?
              </p>
              <input className="question3Input" type="text" />
            </div>
            <div className="my-3">
              <p>4. Предчувствуете ли Вы начало приступа?</p>
              <select className="question4Select">
                <option value="Да">Да</option>
                <option value="Нет">Нет</option>
                <option value="Свой вариант">Свой вариант</option>
              </select>
              <input className="question4Input visibility: hidden ml-3" type="text" />
            </div>
            <div className="my-3">
              <p>5. Как долго длится каждый приступ?</p>
              <input className="question5Input" type="text" />
            </div>
            <div>
              <p>
                6. Травмируетесь ли Вы во время приступа?
                <br />
                (падение с высоты собственного роста, прикус языка, свой вариант)
              </p>
              <select className="question6Select">
                <option value="Да">Да</option>
                <option value="Нет">Нет</option>
                <option value="Свой вариант">Свой вариант</option>
              </select>
              <input className="question6Input visibility: hidden ml-3" type="text" />
            </div>
            <div className="my-3">
              <p>7. Как Вы чувствуете себя после приступа?</p>
              <input className="question7Input" type="text" />
            </div>
            <div>
              <p>
                8. Как часто у вас бывают приступы?
                <br />
                (Примерное количество приступов в день/неделю/месяц)
              </p>
              <input className="question8Input box-content w-12 h-4 mr-2" type="number" />
              <select className="question8Select">
                <option value="День">День</option>
                <option value="Неделю">Неделю</option>
                <option value="Месяц">Месяц</option>
              </select>
            </div>
            <div className="my-3">
              <p>9. Меняется ли характер приступов на протяжении всего вашего заболевания?</p>
              <select className="question9Select">
                <option value="Да">Да</option>
                <option value="Нет">Нет</option>
                <option value="Свой вариант">Свой вариант</option>
              </select>
              <input className="question9Input visibility: hidden ml-3" type="text" />
            </div>
            <div className="my-3">
              <p>
                10. Испытывали ли Вы изменения артериального давления/пульса/дыхания
                во время начала эпилептического приступа?
              </p>
              <input className="question10Input" type="text" />
            </div>
            <div className="my-3">
              <p>
                11. Вы замечали какие-либо обстоятельства, которые обычно провоцируют приступ?
                <br />
                (например, недостаток сна, стресс, прием алкоголя, пропуск ПЭП, замена ПЭП, гипервентиляция,
                <br />
                вспышки/очень яркий свет, начало менструального цикла, душное/шумное помещение,
                <br />
                обострение хронического заболевания, свой вариант)
              </p>
              <input className="question11Input" type="text" />
            </div>
            <div className="my-3">
              <p>12. В какое время суток возникают приступы?</p>
              <input className="question12Input" type="text" />
            </div>
          </div>

          <div className="flex my-3">
            <button data-cancel="cancel" type="submit" className="ml-2 flex cursor-pointer text-[#4520aa] items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-[#4520aa] hover:text-white">Отменить</button>
            <button data-save="save" type="submit" className="ml-2 flex cursor-pointer text-[#4520aa] items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-[#4520aa] hover:text-white">Сохранить</button>
          </div>

        </form>
      </div>
      <script defer src="/js/attack.js" />
    </Layout>
  );
};
