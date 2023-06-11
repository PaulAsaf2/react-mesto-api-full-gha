const { JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorized');

const auth = async (req, res, next) => {
  const token = req.cookies.jwt;
  let payload;

  try {
    payload = await jwt.verify(token, JWT_SECRET || 'dev-secret');
    req.user = payload;
  } catch {
    return next(new UnauthorizedError(
      'Недостаточно прав. Сперва войдите в аккаунт',
    ));
  }

  return next();
};

module.exports = {
  auth,
};