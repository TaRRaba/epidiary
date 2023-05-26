const usersRouter = require('express').Router();
const Profile = require('../views/Profile');
const AttackDetails = require('../views/AttackDetails');
const { Doctors, Users, Attacks } = require('../../db/models');

usersRouter.get('/profile/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = (await Users.findOne({ where: { id } })).get({ plain: true });
    // const user = (await Doctors.findOne({ where: { id: 2 } })).get({ plain: true });
    // const data = (await Users.findAll({ where: { doctor_id: user.id }, order: [['id', 'ASC']] }))
    const data = (await Attacks.findAll({ where: { user_id: user.id }, order: [['createdAt', 'DESC']] }))
      .map((el) => el.get({ plain: true }));
    res.render(Profile, { id, email: user.email, data });
  } catch (error) {
    res.send(error);
  }
});

usersRouter.get('/attacks/:id', async (req, res) => {
  const { id } = req.params; // id attacks

  try {
    const data = (await Attacks.findOne({ where: { id } })).get({ plain: true });
    res.render(AttackDetails, { data });
  } catch (error) {
    console.log(error);
  }
});

module.exports = usersRouter;
