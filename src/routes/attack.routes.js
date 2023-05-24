const router = require("express").Router();
const AddAttack = require("../views/AddAttack");
const AttackDetails = require("../views/AttackDetails");

const { Attacks } = require("../../db/models");

router.get("/", async (req, res) => {
  const date = new Date().toISOString();
  res.render(AddAttack, { date });
});

//запись нового приступа в базу ---------------------------
router.post("/", async (req, res) => {
  const id = 1; // req.session.user.id

  try {
    await Attacks.create({
      user_id: id,
      attackInfo: req.body,
    });
    res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.json({ status: 405 });
  }
});

// отрисовка инфы одного приступа для пациента/доктора ------------------------
router.get("/:id", async (req, res) => {
  const { id } = req.params; // id attacks
  const user_id = 1; // req.session.user.id

  try {
    const attack = await Attacks.findOne({ where: { user_id, id } });
    const attackClear = attack.get({ plain: true });
    res.render(AttackDetails, { attackClear });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
