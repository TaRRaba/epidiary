const router = require("express").Router();
const AddAttack = require("../views/AddAttack");

const { Attacks } = require("../../db/models");

router.get("/", async (req, res) => {
  const date = new Date().toISOString();
  //   console.log(typeof date);
  res.render(AddAttack, { date });
});

router.post("/", async (req, res) => {
  const id = 1; // req.session.user.id
  // const {
  //   question1,
  //   question2,
  //   question3,
  //   question4,
  //   question5,
  //   question6,
  //   question7,
  //   question8,
  //   question9,
  //   question10,
  //   question11,
  //   question12,
  // } = req.body;
  // console.log("req.body", req.body);
  try {
    const newAttack = await Attacks.create({
      user_id: id,
      attackInfo: req.body,
    });
    res.json({ status: "ok" });
    // console.log("newAttack", newAttack);
  } catch (error) {
    console.log(error);
    res.json({ status: 405 });
  }
});

module.exports = router;
