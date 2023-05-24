const React = require('react');
const Layout = require('./Layout');

module.exports = function AttackDetails({ attackClear, user }) {
  return (
    <Layout user={user}>
      <div className="flex justify-center mt-10">
        <div className="attackInfoDiv">
          <div>
            <p className="text-2xl mb-5">{`Приступ ${attackClear?.id}.`}</p>
            <p className="m-3">{`Дата приступа: ${new Date(attackClear?.createdAt).toISOString()}.`}</p>
          </div>

          <div className="my-3">
            <p>1. Какой тип приступа у Вас случился?</p>
            <p>{attackClear.attackInfo.question1}</p>
          </div>
          <div className="my-3">
            <p>2. Сопровождался ли этот приступ потерей сознания?</p>
            <p>{attackClear.attackInfo.question2}</p>
          </div>

          <br />
          <div className="my-3">
            <p>
              3. Опишите, пожалуйста, характер своих приступов.
              Как они начинаются?
            </p>
            <p>{attackClear.attackInfo.question3}</p>
          </div>
          <div className="my-3">
            <p>4. Предчувствуете ли Вы начало приступа?</p>
            <p>{attackClear.attackInfo.question4}</p>
          </div>
          <div className="my-3">
            <p>5. Как долго длится каждый приступ?</p>
            <p>{attackClear.attackInfo.question5}</p>
          </div>
          <div className="my-3">
            <p>
              6. Травмируетесь ли Вы во время приступа?
              <br />
              (падение с высоты собственного роста, прикус языка, свой вариант)
            </p>
            <p>{attackClear.attackInfo.question6}</p>
          </div>
          <div className="my-3">
            <p>7. Как Вы чувствуете себя после приступа?</p>
            <p>{attackClear.attackInfo.question7}</p>
          </div>
          <div>
            <p>
              8. Как часто у вас бывают приступы?
              <br />
              (Примерное количество приступов в день/неделю/месяц)
            </p>
            <p>{attackClear.attackInfo.question8}</p>
          </div>
          <div className="my-3">
            <p>9. Меняется ли характер приступов на протяжении всего вашего заболевания?</p>
            <p>{attackClear.attackInfo.question9}</p>
          </div>
          <div className="my-3">
            <p>
              10. Испытывали ли Вы изменения артериального давления/пульса/дыхания
              во время начала эпилептического приступа?
            </p>
            <p>{attackClear.attackInfo.question10}</p>
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
            <p>
              {attackClear.attackInfo.question11}
            </p>
          </div>
          <div className="my-3">
            <p>12. В какое время суток возникают приступы?</p>
            <p>{attackClear.attackInfo.question12}</p>
          </div>

          {/* {user?.type === 'user' ? ( */}
          <div className="flex my-3">
            <button data-back="back" type="button" className="ml-2 flex cursor-pointer text-[#4520aa] items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-[#4520aa] hover:text-white">Назад</button>
            <button data-saveInfo="saveInfo" type="button" className="ml-2 flex cursor-pointer text-[#4520aa] items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-[#4520aa] hover:text-white">Сохранить изменения</button>
          </div>

          {/* <div>
              <button data-backDoc="backDoc" type="button" className="ml-2 flex cursor-pointer text-[#4520aa] items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-[#4520aa] hover:text-white">Назад</button>
            </div>
          )} */}

        </div>
      </div>
      <script defer src="/js/attactDetails.js" />
    </Layout>
  );
};
