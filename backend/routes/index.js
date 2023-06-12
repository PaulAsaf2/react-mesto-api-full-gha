const router = require('express').Router();
const routerUser = require('./users');
const routerCard = require('./cards');
const routerEnter = require('./enter');
const { auth } = require('../middlewares/auth');
const NotFoundError = require('../errors/notFound');

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

router.use('/', routerEnter);

router.use('/users', auth, routerUser);
router.use('/cards', auth, routerCard);

router.all('*', auth, (req, res, next) => next(
  new NotFoundError('Страницы не существует'),
));

module.exports = router;