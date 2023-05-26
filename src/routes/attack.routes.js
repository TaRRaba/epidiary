const router = require("express").Router();
const AddAttack = require("../views/AddAttack");
const AttackDetails = require("../views/AttackDetails");

const { Attacks } = require("../../db/models");

router.get("/", async (req, res) => {
  const date = new Date().toLocaleDateString("ru-RU");
  res.render(AddAttack, { date });
});

// запись нового приступа в базу ---------------------------
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


module.exports = router;
