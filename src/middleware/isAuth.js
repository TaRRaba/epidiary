function isAuth (req, res, next) {
  const user = req.session?.user;
  if (user) {
    return next();
  }
  res.redirect('/');
}

module.exports = isAuth;
