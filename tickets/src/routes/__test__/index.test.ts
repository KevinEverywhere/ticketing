import request from 'supertest';
import { app } from '../../app';
import { createTicketRouter } from '../new';

const createTicket = () => {
  return request(app).post('/api/tickets').set('Cookie', global.signin()).send({
    title: 'notreal',
    price: 20,
  });
};

it('can fetch a list of tickets', async () => {
  console.log('xero times');
  await createTicket();
  await createTicket();
  await createTicket();

  const response = await request(app).get('/api/tickets').send().expect(200);

  console.log('three times');
  expect(response.body.length).toEqual(3);

  console.log('done');
});
