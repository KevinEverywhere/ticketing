import request from 'supertest';
import { app } from '../../app';

it('returns 201 for successful signup', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'tester@test.com',
      password: 'password',
    })
    .expect(201);
});

it('returns 400 with invalid email or password', async () => {
  await request(app)
    // bad email
    .post('/api/users/signup')
    .send({
      email: 'testertest.com',
      password: 'password',
    })
    .expect(400);
});

it('returns 400 with invalid email or password', async () => {
  await request(app)
    // bad password
    .post('/api/users/signup')
    .send({
      email: 'tester@test.com',
      password: '',
    })
    .expect(400);
});

it('returns 400 with invalid email or password', async () => {
  await // no email or password
  request(app).post('/api/users/signup').send({}).expect(400);
});

it('sets a cookie after successful sign up', async () => {
  const response = await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);

  expect(response.get('Set-Cookie')).toBeDefined();
});
