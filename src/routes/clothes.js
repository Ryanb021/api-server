'use strict';

const express = require('express');
const { clothesCollection } = require('../models');
const router = express.Router();

router.get('/clothes', async (request, response, next) => {
  const clothes = await clothesCollection.read();
  response.status(200).send(clothes);
});

router.post('/clothes', async (request, response, next) => {
  try {
    const newClothes = await clothesCollection.create(request.body);
    response.status(200).send(newClothes);
  } catch (err) {
    next(err);
  }
});

router.get('/clothes/:id', async (request, response, next) => {
  try {
    const id = request.params.id;
    const clothes = await clothesCollection.read(id);
    response.status(200).send(clothes);
  } catch (err) {
    next(err);
  }
});

router.delete('/clothes/:id', async (request, response, next) => {
  try {
    const id = request.params.id;
    await clothesCollection.delete(id);
    response.status(200).send('Deleted');
  } catch(err) {
    next(err);
  }
});

router.put('/clothes/:id', async (request, response, next) => {
  try {
    const id = request.params.id;
    await clothesCollection.update(request.body, id);
    response.status(200).send('Updated');
  } catch(err) {
    next(err);
  }
});

module.exports = router;
