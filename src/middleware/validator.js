'use strict';

const validator = (request, response, next) => {
  if (!request.query.name) {
    throw new Error('Name is required');
  } else {
    next();
  }
};

module.exports = validator;
