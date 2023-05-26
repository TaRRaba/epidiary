const usersRouter = require('express').Router();
const Profile = require('../views/Profile');
const AttackDetails = require('../views/AttackDetails');
const { Doctors, Users, Attacks } = require('../../db/models');
const isAuth = require('../middleware/isAuth');

usersRouter.get('/profile/', isAuth, async (req, res) => {
  const { id, type } = req.session.user;
  try {
    if (type === 'user') {
      const user = (await Users.findOne({ where: { id } })).get({ plain: true });
      const data = (await Attacks.findAll({ where: { user_id: user.id }, order: [['createdAt', 'DESC']] }))
        .map((el) => el.get({ plain: true }));
      const userDoc = (await Doctors.findOne({ where: { id: user.doctor_id } }))
        .get({ plain: true });
      const Docs = (await Doctors.findAll({ order: [['fullName', 'ASC']] }))
        .map((el) => el.get({ plain: true }));
      res.render(Profile, {
        id, userDoc, Docs, data,
      });
    }
    if (type === 'doc') {
      const doc = (await Doctors.findOne({ where: { id } })).get({ plain: true });
      const data = (await Users.findAll({ where: { doctor_id: doc.id }, order: [['id', 'ASC']] }));
      res.render(Profile, { id, data });
    }
  } catch (error) {
    res.send(error);
  }
});

usersRouter.get('/attacks/:id', isAuth, async (req, res) => {
  const { id } = req.params;
  try {
    const data = (await Attacks.findOne({ where: { id } })).get({ plain: true });
    res.render(AttackDetails, { data });
  } catch (error) {
    console.log(error);
  }
});

module.exports = usersRouter;
