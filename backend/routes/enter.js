const router = require('express').Router();
const {
  createUser, login, cookieEntry, logout,
} = require('../controllers/users');
const {
  signupValidation, signinValidation,
} = require('../middlewares/validation');

router.post('/signup', signupValidation, createUser);
router.post('/signin', signinValidation, login);
router.get('/auth-status', cookieEntry);
router.get('/logout', logout);

module.exports = router;
