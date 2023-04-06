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
  it('create clothes', async () => {
    const response = await request.post('/clothes').send({
      name: 'Tank Top',
      brand: 'Muscle Man',
      price: 5000,

    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Tank Top');
    expect(response.body.description).toEqual('Muscle Man');
    expect(response.body.price).toEqual(5000);
    expect(response.body.id).toBeTruthy();
  });

  it('get clothes', async () => {
    const response = await request.get('/clothes');
    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('Tank Top');
    expect(response.body[0].description).toEqual('Muscle Man');
    expect(response.body[0].price).toEqual(5000);
    expect(response.body[0].id).toBeTruthy();
  });

  it(`gets all clothes`, async () => {
    const response = await request.get('/clothes');

    expect(response.status).toEqual(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('deletes an item', async () => {
    const response = await request.delete('/clothes/1');
    expect(response.status).toEqual(200);
  });

  it('updates an item', async () => {
    const response = await request.put('/clothes/1').send({
      name: 'Booty Shorts',
      brand: 'Sexy Woman',
      price: 6000,
    });
    expect(response.status).toEqual(200);

  });

});
