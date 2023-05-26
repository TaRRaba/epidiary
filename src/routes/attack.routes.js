const router = require('express').Router();
const AddAttack = require('../views/AddAttack');
const AttackDetails = require('../views/AttackDetails');

const { Attacks } = require('../../db/models');

router.get('/', async (req, res) => {
  const date = new Date().toLocaleDateString('ru-RU');
  res.render(AddAttack, { date });
});

// router.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   const data = (await Attacks.findOne({ where: { id } })).get({ plain: true });
//   res.render(AttackDetails, { data });
// });

// запись нового приступа в базу ---------------------------
router.post('/', async (req, res) => {
  const { id } = req.session.user;
  try {
    await Attacks.create({
      user_id: id,
      attackInfo: req.body,
    });
    res.json({ status: 'ok' });
  } catch (error) {
    console.log(error);
    res.json({ status: 405 });
  }
});

module.exports = router;
