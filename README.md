URL Shortener Application

This project is a URL Shortener application built using Vite (React) for the frontend and Node.js for the backend. The project structure contains two main folders: client and server.

Project Structure

.
├── client/  # Frontend application (Vite + React)
└── server/  # Backend application (Node.js + Express)

Setup Instructions

Follow these steps to set up and run the application:

Prerequisites

Ensure that you have the following installed on your system:

Node.js (v14 or later)

npm or Yarn

Running the Application

Backend Setup (Server)

Navigate to the server folder:

cd server

Install dependencies:

npm install

Start the backend server:

npm run dev

Frontend Setup (Client)

Navigate to the client folder:

cd client

Install dependencies:

npm install

Start the frontend development server:

npm run dev

Accessing the Application

Frontend: Open http://localhost:5173 in your browser.

Backend API: The server runs on http://localhost:5001 by default.

Additional Notes

Ensure MongoDB is running if your backend uses it.

Use environment variables in .env files within both the client and server directories for configuration.

Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

Happy coding!
