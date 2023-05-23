const indexRouter = require('express').Router();
const Layout = require('../views/Layout');

indexRouter.get('/', async (req, res) => {
  res.render(Layout, null);
});

module.exports = indexRouter;
