# URL Shortener Application

This project is a URL Shortener application built using Vite (React) for the frontend and Node.js for the backend. The project structure contains two main folders: `client` and `server`.

## Project Structure
```
.
├── client/  # Frontend application (Vite + React)
└── server/  # Backend application (Node.js + Express)
```

## Setup Instructions
Follow these steps to set up and run the application:

### Prerequisites
Ensure that you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) 

### Running the Application

#### Backend Setup (Server)
1. Navigate to the `server` folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm run dev
   ```

#### Frontend Setup (Client)
1. Navigate to the `client` folder:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

### Accessing the Application
- Frontend: Open [http://localhost:5173](http://localhost:5173) in your browser.
- Backend API: The server runs on [http://localhost:5001](http://localhost:5001) by default.

## Additional Notes
- Ensure MongoDB is running if your backend uses it.
- Use environment variables in `.env` files within both the `client` and `server` directories for configuration.

## Contributing
Contributions are welcome! Please feel free to open issues or submit pull requests.

---
Happy coding!

