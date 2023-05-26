const usersApi = require('express').Router();
const Profile = require('../views/Profile');
const { Doctors, Users, Attacks } = require('../../db/models');
const isAuth = require('../middleware/isAuth');

usersApi.post('/info', async (req, res) => {
  const {
    userID, age, gender, addQ1, addQ2,
    addQ3, addQ4, addQ5, addQ6, addQ7, addQ8, addQ9, addQ10, addQ11, addQ12,
  } = req.body;
  const userInfo = {
    age,
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
  if (userInfo.addQ2[0] === 'Свой вариант') {
    const answer = userInfo.addQ2[1];
    userInfo.addQ2 = answer;
  } else {
    const answer = userInfo.addQ2[0];
    userInfo.addQ2 = answer;
  }
  try {
    await Users.update({ form: 'true', userInfo }, { where: { id: userID } });
    req.session.user.form = 'true';
    const data = (await Attacks.findAll({ where: { user_id: req.session.user.id }, order: [['createdAt', 'DESC']] }))
      .map((el) => el.get({ plain: true }));
    res.render(Profile, { id: req.session.user.id, data });
  } catch (error) {
    res.send(error);
  }
});

usersApi.post('/attacks/edit', async (req, res) => {
  const { dataID, data } = req.body;
  try {
    await Attacks.update({ attackInfo: data }, { where: { id: dataID.id } });
    res.json({ status: 'ok' });
  } catch (error) {
    console.log(error);
  }
});

module.exports = usersApi;
