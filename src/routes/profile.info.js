const indexRouter = require('express').Router();
const ProfileInfo = require('../views/ProfileInfo');
const isAuth = require('../middleware/isAuth');
const { Users } = require('../../db/models');

indexRouter.get('/data', isAuth, async (req, res) => {
  const { id } = req.session.user;
  try {
    const dataInfo = await Users.findOne({ where: { id } });
    const dataUser = dataInfo.get({ plain: true });
    res.json(dataUser);
  } catch (error) {
    console.log(error);
  }
});

indexRouter.put('/data', isAuth, async (req, res) => {
  const { id } = req.session.user;
  const {
    birthDate, gender, addQ1, addQ2, addQ2Inp, addQ3, addQ4, addQ5, addQ6, addQ7, addQ8, addQ9,
    addQ10, addQ11, addQ12,
  } = req.body;
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
    userInfo.addQ2 = addQ2Inp;
  }

  if (addQ2 === 'Свой вариант' && addQ2Inp === '') {
    userInfo.addQ2 = '';
  }
  if (addQ2 === 'Нет') {
    userInfo.addQ2 = addQ2;
  }
  if (addQ2 === 'Да') {
    userInfo.addQ2 = addQ2;
  }
  try {
    await Users.update({ userInfo }, { where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

indexRouter.get('/:id', isAuth, async (req, res) => {
  const { id } = req.params;
  try {
    const dataInfo = (await Users.findOne({ where: { id } })).get({ plain: true });
    const dataUser = dataInfo;
    res.render(ProfileInfo, { dataUser });
  } catch (error) {
    console.log(error);
  }
});

module.exports = indexRouter;
