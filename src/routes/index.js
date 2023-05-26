const indexRouter = require('express').Router();
const Login = require('../views/Login');
const Registration = require('../views/Registration');

indexRouter.get('/', async (req, res) => {
  if (!req.session.user) return res.redirect('/users/login');
  return res.redirect('/users/profile');
});

indexRouter.get('/users/login', (req, res) => {
  if (req.session.user) return res.redirect('/');
  res.render(Login, { title: 'Вход' });
});

indexRouter.get('/users/reg', (req, res) => {
  if (req.session.user) return res.redirect('/');
  res.render(Registration, { title: 'Регистрация' });
});

indexRouter.get('/doc/login', (req, res) => {
  if (req.session.user) return res.redirect('/');
  res.render(Login, { title: 'Вход', doc: true });
});

indexRouter.get('/doc/reg', (req, res) => {
  if (req.session.user) return res.redirect('/');
  res.render(Registration, { title: 'Регистрация', doc: true });
});

module.exports = indexRouter;
