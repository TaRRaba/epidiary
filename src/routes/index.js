const indexRouter = require('express').Router();
const Layout = require('../views/Layout');
const Login = require('../views/Login');
const Registration = require('../views/Registration');

indexRouter.get('/', async (req, res) => {
  if (!req.session.user) return res.redirect('/user/login');
  res.render(Layout, null);
});

indexRouter.get('/user/login', (req, res) => {
  if (req.session.user) return res.redirect('/');
  res.render(Login, { title: 'Login' });
});

indexRouter.get('/user/reg', (req, res) => {
  if (req.session.user) return res.redirect('/');
  res.render(Registration, { title: 'Registration' });
});

indexRouter.get('/doc/login', (req, res) => {
  if (req.session.user) return res.redirect('/');
  res.render(Login, { title: 'Login', doc: true });
});

indexRouter.get('/doc/reg', (req, res) => {
  if (req.session.user) return res.redirect('/');
  res.render(Registration, { title: 'Registration', doc: true });
});

indexRouter.get('/user/logout', (req, res) => {
  req.session.destroy((e) => {
    if (e) {
      console.log(e);
      return;
    }
    res.clearCookie('ECook');
    res.redirect('/');
  });
});

module.exports = indexRouter;
