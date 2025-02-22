const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');
const { restoreUser} = require('../../utils/auth');

// If current user session is valid, set req.user to the user in the database
// If current user session is not valid, set req.user to null
router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
  });

module.exports = router;
