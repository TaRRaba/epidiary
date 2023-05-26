const indexRouter = require('express').Router();
const ProfileInfoDoc = require('../views/ProfileInfoDoc');
const isAuth = require('../middleware/isAuth');
const { Doctors } = require('../../db/models');

indexRouter.get('/data', isAuth, async (req, res) => {
  const { id } = req.session.user;
  try {
    const dataInfo = await Doctors.findOne({ where: { id } });
    const dataDoc = dataInfo.get({ plain: true });
    res.json(dataDoc);
  } catch (error) {
    console.log(error);
  }
});

indexRouter.put('/data', isAuth, async (req, res) => {
  const { id } = req.session.user;
  const { email, fullName } = req.body;
  try {
    await Doctors.update(
      { email, fullName },
      { where: { id } },
    );
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

indexRouter.get('/:id', isAuth, async (req, res) => {
  const { id } = req.params;
  try {
    const dataInfo = await Doctors.findOne({ where: { id } });
    const dataDoc = dataInfo.get({ plain: true });
    res.render(ProfileInfoDoc, { dataDoc });
  } catch (error) {
    console.log(error);
  }
});

module.exports = indexRouter;
