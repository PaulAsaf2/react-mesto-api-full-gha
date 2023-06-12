require('dotenv').config();
const { errors } = require('celebrate');
const express = require('express');
const mongoose = require('mongoose');
const process = require('process');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const {
  mongoDBPath, corsOptions, limiterOptions,
} = require('../config');
const router = require('./routes/index');
const handleError = require('./errors/handleError');

const { PORT = 3000 } = process.env;
const app = express();
mongoose.connect(mongoDBPath);

app.use(cors(corsOptions));
app.use(rateLimit(limiterOptions));
app.use(cookieParser());
app.use(express.json());

app.use(requestLogger);

app.use(router)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.use(errorLogger);

app.use(errors());
app.use(handleError);
