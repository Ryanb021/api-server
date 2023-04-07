'use strict';

const validator = (request, response, next) => {
  if (!request.query.name) {
    new Error('Name is required');
  } else {
    next();
  }
};

module.exports = validator;
