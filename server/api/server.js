import { app }from '../server.js'; // Import the Express app from server.js

// Serverless function 
export default (req, res) => app(req, res);
