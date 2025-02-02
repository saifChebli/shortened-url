# **URL Shortener API**

This project is a simple URL Shortener API built with Node.js, Express, and MongoDB. It provides endpoints to shorten URLs and redirect users to the original URLs.

---

## **Table of Contents**
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Running Tests](#running-tests)
- [API Documentation](#api-documentation)
- [POST `/api/shorten`](#1-post-apishorten)
- [GET `/api/:shortened_id`](#2-get-apishortid)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## **Features**
- Shorten long URLs with a unique short ID.
- Redirect to the original URL when accessing the short link.
- Comprehensive API testing with Jest and Supertest.

---

## **Project Structure**
```
root/
├── config/
│   └── db.js            # MongoDB connection setup
├── controllers/
│   └── urlController.js  # Business logic for URL shortening
├── routes/
│   └── routes.js         # Route definitions
├── server.js             # Main server entry point
└── tests/
    └── unit/
        └── url.test.js    # Unit tests for URL controller
```

---

## **Installation**
1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

---

## **Environment Variables**
Create a `.env` file in the root directory with the following contents:
```env
MONGO_URI=mongodb://localhost:27017/shortener_url_db
NODE_ENV=dev
PORT=5000
```

For testing:
```env
MONGO_URI=mongodb://localhost:27017/testdb
NODE_ENV=test
PORT=5001
```

---

## **Running the Application**
To start the development server:
```bash
npm run dev
```

---

## **Running Tests**
To run unit and integration tests:
```bash
npm test
```

---

## **API Documentation**

### **1. POST `/api/shorten`**
Shortens a given long URL.

#### **Request**
- Method: `POST`
- Headers:
  - `Content-Type: application/json`
- Body:
  ```json
  {
    "longUrl": "https://example.com"
  }
  ```

#### **Response**
- Status: `200 OK`
- Body:
  ```json
  {
    "shortUrl": "http://localhost:5000/<shortId>"
  }
  ```
- Status `400 Bad Request` if the input is invalid.

---

### **2. GET `/api/:shortened_id`**
Redirects to the original URL based on the provided short URL ID.

#### **Request**
- Method: `GET`
- URL Parameters:
  - `shortened_id`: Shortened URL identifier.

#### **Response**
- Status `302 Found`: Redirects to the long URL.
- Status `404 Not Found`: If the shortId does not exist.

---

## **Technologies Used**
- Node.js
- Express.js
- MongoDB
- Mongoose
- Jest & Supertest (for testing)

---

## **Contributing**
Contributions are welcome! Please open an issue or create a pull request.

---

## **License**
This project is licensed under the MIT License.

