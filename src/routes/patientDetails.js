const indexRouter = require('express').Router();
const Patiecient = require('../views/Patient');

const { Attacks, Doctors, Users } = require('../../db/models');

indexRouter.get('/', async (req, res) => {
  // ? req.session.id чтобы можно было достать данные с бд
  // ? пока работаем с первым id
  try {
    const dataInfo = await Users.findOne({ where: { id: 1 } });

    const dataInfo2 = await Attacks.findAll({ where: { user_id: dataInfo.id } });

    const dataAttack = dataInfo2.map((el) => el.get({ plain: true }));
    const dataUser = dataInfo.get({ plain: true });
    res.render(Patiecient, { dataUser, dataAttack });
  } catch (error) {
    console.log(error);
  }
});

module.exports = indexRouter;
