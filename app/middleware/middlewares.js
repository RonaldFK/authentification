const middlewares = {
  middleware404 (req, res, next) {
    res.render('404');
    next();
  },
  middlewareSession (req, res, next) {
    if (!req.session.user) {
      req.session.user = [];
    }
    console.log(req.session.user);
    next();
  },
};

module.exports = middlewares;
