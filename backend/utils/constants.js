/* eslint-disable max-len */
module.exports.INCORRECT_DATA = 400;
module.exports.UNAUTHORIZED = 401;
module.exports.FORBIDDEN = 403;
module.exports.NO_DATA_FOUND = 404;
module.exports.CONFLICT = 409;
module.exports.SERVER_ERROR = 500;

module.exports.mongoDBPath = 'mongodb://127.0.0.1:27017/mestodb';

module.exports.corsOptions = {
  origin: ['http://image.nomoredomains.rocks', 'http://localhost:3001'],
  credentials: true,
  maxAge: 3600,
};

module.exports.limiterOptions = {
  windowMs: 15 * 60 * 1000,
  max: 100,
  standartHeaders: true,
  legacyHeaders: false,
};

module.exports.checkURL = /(https?:\/\/)(w{3}\.)?\w+[-.~:/?#[\]@!$&'()*+,;=]*#?/;
module.exports.checkEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
