const router = require('express').Router();
const { createUser, login } = require('../controllers/users');
const {
  signupValidation, signinValidation,
} = require('../middlewares/validation');

router.post('/signup', signupValidation, createUser);
router.post('/signin', signinValidation, login);

module.exports = router;
