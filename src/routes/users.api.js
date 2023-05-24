const usersApi = require('express').Router();
const Profile = require('../views/Profile');
const { Doctors, Users, Attacks } = require('../../db/models');
const isAuth = require('../middleware/isAuth');

usersApi.post('/info', async (req, res) => {
  console.log(req.body);
  const {
    userID, fullName, email, bDay, gender, addQ1, addQ2,
    addQ3, addQ4, addQ5, addQ6, addQ7, addQ8, addQ9, addQ10, addQ11,
  } = req.body;
  const userInfo = {
    fullName,
    bDay,
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
  };
  try {
    await Users.update({ email, userInfo }, { where: { id: userID } });
    // req.session.user.form = 'true';
    res.redirect(`/users/profile/${userID}`);
  } catch (error) {
    res.send(error);
  }
});

module.exports = usersApi;
