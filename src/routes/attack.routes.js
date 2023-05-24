const router = require("express").Router();
const AddAttack = require("../views/AddAttack");

router.get("/", async (req, res) => {
  const date = (new Date()).toISOString();
//   console.log(typeof date);
  res.render(AddAttack, { date });
});

module.exports = router;
