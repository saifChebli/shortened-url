import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './config/db.js';
import cors from 'cors';
import urlRoutes from './routes/routes.js';

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(cors());
app.use('/api', urlRoutes);

let server;

// Start the server only if not in test mode
if (process.env.NODE_ENV !== 'test') {
  connectDB().then(() => {
    server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  });
}

export { app, server };
