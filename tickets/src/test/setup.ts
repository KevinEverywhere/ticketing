import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../app';
import jwt from 'jsonwebtoken';

declare global {
  namespace NodeJS {
    interface Global {
      signin(): string[];
    }
  }
}

jest.mock('../nats-wrapper');

let mongo: MongoMemoryServer;

beforeAll(async () => {
  process.env.JWT_KEY = 'oicurn0tmt'; // This should be replaced with function/lookup
  mongo = new MongoMemoryServer();
  const mongoUri = await mongo.getUri();
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

beforeEach(async () => {
  jest.clearAllMocks();
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});

global.signin = () => {
  // build a JWT payload {id email}
  const payload = {
    id: mongoose.Types.ObjectId().toHexString(),
    email: 'email@email.com',
  };

  // create the JWT!
  const token = jwt.sign(payload, process.env.JWT_KEY!);

  // build session object { jwt: MY_JWT}
  const session = { jwt: token };

  // Turn that session into JSON
  const sessionJSON = JSON.stringify(session);

  // take JSON and encode it as base64
  const base64 = Buffer.from(sessionJSON).toString('base64');

  // return a string that's the cookie with encoded data
  return [`express:sess=${base64}`];

  // const email = 'test@test.com';
  // const password = 'password';

  // const response = await request(app)
  //   .post('/api/users/signup')
  //   .send({
  //     email,
  //     password,
  //   })
  //   .expect(201);
  // const cookie = response.get('Set-Cookie');
  // return cookie;
};
