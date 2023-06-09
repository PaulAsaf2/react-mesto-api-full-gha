require('dotenv').config();
const { errors } = require('celebrate');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const process = require('process');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const {
  mongoDBPath, corsOptions, limiterOptions,
} = require('./utils/constants');
const routerUser = require('./routes/users');
const routerCard = require('./routes/cards');
const routerEnter = require('./routes/enter');
const { auth } = require('./middlewares/auth');
const handleError = require('./errors/handleError');
const NotFoundError = require('./errors/notFound');

const { PORT = 3000 } = process.env;
const app = express();
mongoose.connect(mongoDBPath);



app.use(cors(corsOptions));
app.use(rateLimit(limiterOptions));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routerEnter);

app.use('/users', auth, routerUser);
app.use('/cards', auth, routerCard);

app.all('*', auth, (req, res, next) => next(
  new NotFoundError('Страницы не существует'),
));

app.listen(PORT);

app.use(errors());
app.use(handleError);
