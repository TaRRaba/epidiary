const router = require('express').Router();
const AddAttack = require('../views/AddAttack');
const isAuth = require('../middleware/isAuth');

const { Attacks } = require('../../db/models');

router.get('/', isAuth, async (req, res) => {
  res.render(AddAttack, null);
});

router.post('/', isAuth, async (req, res) => {
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

router.delete('/', isAuth, async (req, res) => {
  const { id } = req.body;
  try {
    await Attacks.destroy({ where: { id } });
    res.json({ status: 200 });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
