# HMart Server

This is the backend server for the HMart e-commerce application, built with Node.js, Express, and MongoDB.

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://example.com)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://example.com)

## Tech Stack

*   **[Node.js](https://nodejs.org/)**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
*   **[Express.js](https://expressjs.com/)**: A minimal and flexible Node.js web application framework.
*   **[MongoDB](https://www.mongodb.com/)**: A general-purpose, document-based, distributed database.
*   **[CORS](https://www.npmjs.com/package/cors)**: A Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
*   **[Dotenv](https://www.npmjs.com/package/dotenv)**: A zero-dependency module that loads environment variables from a `.env` file into `process.env`.

## Features

*   **RESTful API**: Provides a full suite of API endpoints for e-commerce functionality.
*   **Product Management**: Full CRUD (Create, Read, Update, Delete) operations for products.
*   **User Management**: Endpoints for user registration and data handling.
*   **Order Management**: API for creating, retrieving, and managing customer orders.
*   **Scalable Architecture**: Built with a clean and scalable structure for future enhancements.

## Installation Guide

Follow these steps to get the server up and running on your local machine.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YeasarArefin/hmart-server.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd hmart-server
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add the following variables. Replace the placeholder values with your actual MongoDB credentials.
    ```
    PORT=5000
    DB_USER=your_database_user
    DB_PASS=your_database_password
    ```

5.  **Start the server:**
    To run the server for production:
    ```bash
    npm start
    ```
    To run the server in development mode with live-reloading:
    ```bash
    npm run dev
    ```
    The API will be accessible at `http://localhost:5000`.

## Usage

Once the server is running, you can use a tool like Postman or `curl` to interact with the API endpoints.

**Example: Get all products**
```bash
curl http://localhost:5000/products
```

**Example: Add a new product**
```bash
curl -X POST http://localhost:5000/products \
-H "Content-Type: application/json" \
-d '{"name":"New Product","price":99.99}'
```

## API Documentation

Below is a summary of the primary API routes available.

### Products
*   `GET /products`: Fetches all products.
*   `GET /products/:id`: Fetches a single product by ID.
*   `POST /products`: Creates a new product.
*   `PUT /products/:id`: Updates an existing product.
*   `DELETE /products/:id`: Deletes a product.

### Users
*   `GET /users`: Fetches all users.
*   `POST /users`: Creates a new user.

### Orders
*   `GET /orders`: Fetches all orders.
*   `POST /orders`: Creates a new order.

## Configuration

The server configuration is managed through environment variables. Create a `.env` file in the project root to store these values.

| Variable  | Description                                       |
| --------- | ------------------------------------------------- |
| `PORT`    | The port on which the Express server will run.    |
| `DB_USER` | The username for your MongoDB database.             |
| `DB_PASS` | The password for your MongoDB database.             |

## Contact / Support

For any inquiries or support, please contact:

*   **Email**: [yeasararefin007@gmail.com](mailto:yeasararefin007@gmail.com)
*   **Portfolio**: [yeasararefin.vercel.app](https://yeasararefin.vercel.app/)
