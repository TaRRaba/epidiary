const indexRouter = require('express').Router();
const ProfileInfoDoc = require('../views/ProfileInfoDoc');

const { Attacks, Doctors, Users } = require('../../db/models');

function convertTimeRu(date) {
  const dateRes = new Date(date);
  return dateRes.toLocaleDateString('ru-RU');
}

indexRouter.get('/', async (req, res) => {
  // ? req.session.id чтобы можно было достать данные с бд
  // ? пока работаем с первым id
  try {
    const dataInfo = await Doctors.findOne({ where: { id: 1 } });
    const dataDoc = dataInfo.get({ plain: true });
    res.render(ProfileInfoDoc, { dataDoc });
  } catch (error) {
    console.log(error);
  }
});

indexRouter.get('/data', async (req, res) => {
  // ? req.session.id чтобы можно было достать данные с бд
  // ? пока работаем с первым id
  try {
    const dataInfo = await Doctors.findOne({ where: { id: 1 } });
    const dataDoc = dataInfo.get({ plain: true });
    res.json(dataDoc);
  } catch (error) {
    console.log(error);
  }
});

indexRouter.put('/data', async (req, res) => {
  // ? req.session.id чтобы можно было достать данные с бд
  // ? пока работаем с первым id
  const { id, email, fullName } = req.body;
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

module.exports = indexRouter;
