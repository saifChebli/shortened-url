import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`DataBase connected successfully on ${conn.connection.host}`);
  } catch (err) {
    console.error('MongoDB connection error:', err);
    throw new Error('MongoDB connection failed');
  }
};

export const disconnectDB = async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed');
};
