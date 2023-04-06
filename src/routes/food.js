'use strict';

const express = require('express');
const { foodModel } = require('../models');
const router = express.Router();

router.get('/food', async (request, response, next) => {
  const food = await foodModel.findAll();
  response.status(200).json(food);
});

router.post('/food', async (request, response, next) => {
  try {
    const newFood = await foodModel.create(request.body);
    response.status(200).send(newFood);
  } catch (err) {
    next(err);
  }
});

router.get('/food/:id', async (request, response, next) => {
  try {
    const id = request.params.id;
    const food = await foodModel.findById(id);
    response.status(200).send(food);
  } catch(err) {
    next(err);
  }
});

router.delete('/food/:id', async (request, response, next) => {
  try {
    const id = request.params.id;
    await foodModel.delete(id);
    response.status(200).send('Deleted');
  } catch(err) {
    next(err);
  }
});

router.put('/food/:id', async (request, response, next) => {
  try {
    const id = request.params.id;
    await foodModel.update(request.body, id);
    response.status(200).send('Updated');
  } catch(err) {
    next(err);
  }
})

module.exports = router;
