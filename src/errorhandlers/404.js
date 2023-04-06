'use strict';

module.exports = (request, response, next) => {
  response.status(404).send({
    error: 404,
    route: request.baseUrl,
    message: 'Not Found',
  });
};
