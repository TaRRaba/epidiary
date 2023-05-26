const indexRouter = require('express').Router();
const ProfileInfo = require('../views/ProfileInfo');

const { Attack, Doctor, Users } = require('../../db/models');

indexRouter.get('/', async (req, res) => {
  // ? req.session.id чтобы можно было достать данные с бд
  // ? пока работаем с первым id
  try {
    const dataInfo = await Users.findOne({ where: { id: 1 } });
    const dataUser = dataInfo.get({ plain: true });
    res.render(ProfileInfo, { dataUser });
  } catch (error) {
    console.log(error);
  }
});

indexRouter.get('/data', async (req, res) => {
  // ? req.session.id чтобы можно было достать данные с бд
  // ? пока работаем с первым id
  try {
    const dataInfo = await Users.findOne({ where: { id: 1 } });
    const dataUser = dataInfo.get({ plain: true });
    res.json(dataUser);
  } catch (error) {
    console.log(error);
  }
});

indexRouter.put('/data', async (req, res) => {
  // ? req.session.id чтобы можно было достать данные с бд
  // ? пока работаем с первым id
  const {
    id, fullName, birthDate, gender, question1, question2, question3, question4, question5, question6, question7, question8, question9,
    question10, question11, question12
  } = req.body;
  try {
    await Users.update(
      {
        userInfo: {
          fullName,
          birthDate,
          gender,
          question1,
          question2,
          question3,
          question4,
          question5,
          question6,
          question7,
          question8,
          question9,
          question10,
          question11,
          question12,
        },
      },
      { where: { id } },
    );
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

module.exports = indexRouter;
