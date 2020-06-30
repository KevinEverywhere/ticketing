import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {
  console.log('start');
  try {
    if (!process.env.JWT_KEY) {
      throw new Error('Undefined env variable');
    }
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('connected to mongo db');
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log('Listening on port 3000!!');
  });
};

start();
