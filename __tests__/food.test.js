'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);
const { sequelizeDB } = require('../src/models');

beforeAll(async () => {
  await sequelizeDB.sync();
});

afterAll(async () => {
  await sequelizeDB.drop();
});

describe('server', () => {
  it('create food', async () => {
    const response = await request.post('/food').send({
      name: 'Chicken Adobo',
      portion: 5,
      calories: 250,
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Chicken Adobo');
    expect(response.body.portion).toEqual(5);
    expect(response.body.calories).toEqual(250);
    expect(response.body.id).toBeTruthy();
  });

  it('get food', async () => {
    const response = await request.get('/food');
    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('Chicken Adobo');
    expect(response.body[0].portion).toEqual(5);
    expect(response.body[0].calories).toEqual(250);
    expect(response.body[0].id).toBeTruthy();
  });

  it('gets all food', async () => {
    const response = await request.get('/food');

    expect(response.status).toEqual(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('deletes an item', async () => {
    const response = await request.delete('/food/1');
    expect(response.status).toEqual(200);
  });

  it('updates an item', async () => {
    const response = await request.put('/food/1').send({
      name: 'Spaghetti',
      portion: 3,
      calories: 350,
    })
    expect(response.status).toEqual(200);
  });
});
