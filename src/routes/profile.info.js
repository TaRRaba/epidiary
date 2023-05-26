const indexRouter = require('express').Router();
const ProfileInfo = require('../views/ProfileInfo');

const { Attack, Doctor, Users } = require('../../db/models');

indexRouter.get('/', async (req, res) => {
  const { id } = req.session.user;
  // ? пока работаем с первым id
  try {
    const dataInfo = (await Users.findOne({ where: { id } })).get({ plain: true });
    const dataUser = dataInfo;
    res.render(ProfileInfo, { dataUser });
  } catch (error) {
    console.log(error);
  }
});

indexRouter.get('/data', async (req, res) => {
  const { id } = req.session.user;
  // ? пока работаем с первым id
  try {
    const dataInfo = await Users.findOne({ where: { id } });
    const dataUser = dataInfo.get({ plain: true });
    res.json(dataUser);
  } catch (error) {
    console.log(error);
  }
});

indexRouter.put('/data', async (req, res) => {
  const { id } = req.session.user;
  // ? пока работаем с первым id
  const {
    birthDate, gender, addQ1, addQ2, addQ2Inp, addQ3, addQ4, addQ5, addQ6, addQ7, addQ8, addQ9,
    addQ10, addQ11, addQ12,
  } = req.body;
  console.log('MOTHERFUCKER', req.body);
  const userInfo = {
    birthDate,
    gender,
    addQ1,
    addQ2,
    addQ3,
    addQ4,
    addQ5,
    addQ6,
    addQ7,
    addQ8,
    addQ9,
    addQ10,
    addQ11,
    addQ12,
  };
  if (addQ2Inp !== '') {
    sendData.addQ2 = addQ2Inp;
  }
  try {
    await Users.update({ userInfo }, { where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

module.exports = indexRouter;
