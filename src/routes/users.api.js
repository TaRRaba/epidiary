const usersApi = require('express').Router();
const Profile = require('../views/Profile');
const { Doctors, Users, Attacks } = require('../../db/models');
const isAuth = require('../middleware/isAuth');

usersApi.post('/info', isAuth, async (req, res) => {
  const {
    userID, birthDate, gender, addQ1, addQ2,
    addQ3, addQ4, addQ5, addQ6, addQ7, addQ8, addQ9, addQ10, addQ11, addQ12,
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
  if (userInfo.addQ2[0] === 'Свой вариант') {
    const answer = userInfo.addQ2[1];
    userInfo.addQ2 = answer;
  } else {
    const answer = userInfo.addQ2[0];
    userInfo.addQ2 = answer;
  }
  try {
    const userData = await Users.update({ form: 'true', userInfo }, { where: { id: userID }, returning: true });
    const user = userData[1][0].get({ plain: true });
    req.session.user.form = 'true';
    const data = (await Attacks.findAll({ where: { user_id: req.session.user.id }, order: [['createdAt', 'DESC']] }))
      .map((el) => el.get({ plain: true }));
    const userDoc = (await Doctors.findOne({ where: { id: user.doctor_id } }))
      .get({ plain: true });
    const Docs = (await Doctors.findAll({ order: [['fullName', 'ASC']] }))
      .map((el) => el.get({ plain: true }));
    res.render(Profile, {
      id: req.session.user.id, userDoc, Docs, data,
    });
  } catch (error) {
    res.send(error);
  }
});

usersApi.put('/attacks', isAuth, async (req, res) => {
  const { dataID, data } = req.body;
  try {
    await Attacks.update({ attackInfo: data }, { where: { id: dataID.id } });
    res.json({ status: 'ok' });
  } catch (error) {
    console.log(error);
  }
});

usersApi.patch('/userDoc', isAuth, async (req, res) => {
  const { id } = req.session.user;
  const { docName } = req.body;
  try {
    const doc = (await Doctors.findOne({ where: { fullName: docName } })).get({ plain: true });
    await Users.update({ doctor_id: doc.id }, { where: { id } });
    res.json({ status: 200 });
  } catch (error) {
    console.log(error);
  }
});

module.exports = usersApi;
