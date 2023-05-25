const usersApi = require('express').Router();
const Profile = require('../views/Profile');
const { Doctors, Users, Attacks } = require('../../db/models');
const isAuth = require('../middleware/isAuth');

usersApi.post('/info', async (req, res) => {
  console.log(req.body);
  const {
    userID, age, gender, extraInfo, addQ1, addQ2,
    addQ3, addQ4, addQ5, addQ6, addQ7, addQ8, addQ9, addQ10, addQ11, addQ12,
  } = req.body;
  let userInfo;
  if (extraInfo === 'true') {
    userInfo = {
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
  } else {
    userInfo = {
      age,
      gender,
    };
  }
  try {
    await Users.update({ userInfo }, { where: { id: userID } });
    // req.session.user.form = 'true';
    res.redirect(`/users/profile/${userID}`);
  } catch (error) {
    res.send(error);
  }
});

module.exports = usersApi;
