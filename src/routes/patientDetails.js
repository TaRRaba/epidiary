const indexRouter = require('express').Router();
const Patiecient = require('../views/Patient');
const isAuth = require('../middleware/isAuth');

const { Attacks, Users } = require('../../db/models');

indexRouter.get('/:id', isAuth, async (req, res) => {
  const { id } = req.params;
  // ? пока работаем с первым id
  try {
    const dataInfo = await Users.findOne({ where: { id } });

    const dataInfo2 = await Attacks.findAll({ where: { user_id: dataInfo.id } });

    const dataAttack = dataInfo2.map((el) => el.get({ plain: true }));
    const dataUser = dataInfo.get({ plain: true });
    res.render(Patiecient, { dataUser, dataAttack });
  } catch (error) {
    console.log(error);
  }
});

module.exports = indexRouter;
