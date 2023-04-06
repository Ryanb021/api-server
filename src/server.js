'use strict';

const express = require('express');


// 2 middlewares that perform specific server behaviors
const logger = require('./middleware/logger.js');
const validator =  require('./middleware/validator.js');
const errorFourHundredFour = require('./errorhandlers/404.js')
const errorFiveHundred = require('./errorhandlers/500.js');
const foodRouter = require('./routes/food.js');
const clothesRouter = require('./routes/clothes.js');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(logger);
app.use(foodRouter);
app.use(clothesRouter);

app.get('/', (request, response, next) => {
  const message = `server working`;
  response.status(200).send(message);
});

app.get('/person', validator, (request, response, next) => {
  const name = { name: request.query.name};
  response.status(200).json(name);
});

function start() {
  app.listen(PORT, () => console.log(`listening on${PORT}`));
}

app.use('*', errorFourHundredFour);
app.use(errorFiveHundred);

module.exports = { start, app };
