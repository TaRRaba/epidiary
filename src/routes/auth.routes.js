const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Users, Doctors } = require('../../db/models');
const isAuth = require('../middleware/isAuth');

router.post('/login', async (req, res) => {
  try {
    const { email, pswd } = req.body;
    const user = await Users.findOne({ where: { email }, raw: true });

    if (!user) return res.sendStatus(401);

    const passwordValid = await bcrypt.compare(pswd, user.password);

    if (!passwordValid) return res.sendStatus(401);

    req.session.user = user;
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(401);
  }
});

router.post('/reg', async (req, res) => {
  try {
    const { email, pswd } = req.body;
    const userCheck = await Users.findOne({ where: { email }, raw: true });

    if (userCheck) return res.sendStatus(401);

    const password = await bcrypt.hash(pswd, 10);

    await Users.create(
      {
        email,
        password,
      },
      {
        returning: true,
        plain: true,
      },
    );
    const user = await Users.findOne({ where: { email }, raw: true });
    req.session.user = user;
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(401);
  }
});

router.post('/doc/login', async (req, res) => {
  try {
    const { email, pswd } = req.body;
    const user = await Doctors.findOne({ where: { email }, raw: true });

    if (!user) return res.sendStatus(401);

    const passwordValid = await bcrypt.compare(pswd, user.password);

    if (!passwordValid) return res.sendStatus(401);

    req.session.user = user;
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(401);
  }
});

router.post('/doc/reg', async (req, res) => {
  try {
    const { fullName, email, pswd } = req.body;
    const userCheck = await Doctors.findOne({ where: { email }, raw: true });

    if (userCheck) return res.sendStatus(401);

    const password = await bcrypt.hash(pswd, 10);

    await Doctors.create(
      {
        fullName,
        email,
        password,
      },
      {
        returning: true,
        plain: true,
      },
    );
    const user = await Doctors.findOne({ where: { email }, raw: true });
    req.session.user = user;
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(401);
  }
});

router.get('/logout', isAuth, (req, res) => {
  req.session.destroy((e) => {
    if (e) {
      console.log(e);
    } else {
      res.clearCookie('ECook');
      res.redirect('/users/login');
    }
  });
});

module.exports = router;
