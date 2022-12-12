const middlewares = {
  middleware404 (req, res, next) {
    res.render('404');
    next();
  },
  middlewareSession (req, res, next) {
    console.log('RESULT SESSION EXIST :', req.session.user);
    if (!req.session.user) {
      req.session.user = [];
    }
    next();
  },
};

module.exports = middlewares;
