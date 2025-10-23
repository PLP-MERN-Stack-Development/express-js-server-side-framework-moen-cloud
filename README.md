<!-- Product API (MERN Week 2 Assignment) -->

A simple RESTful API built with **Express.js** and **MongoDB (via Mongoose)** for managing products.  
This API supports **CRUD operations** — Create, Read, Update, and Delete products.

---

<!--  Getting Started -->

<!--  1. Prerequisites -->
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) running locally

---

<!-- Installation -->

Clone your repository and move into the project directory:

```bash
git clone <your-repo-url>
cd mern-assignment-wk2


# install dependancies
bash
npm install


# 3. Environment Setup
# Create a .env file in the root of your project with the following variable:

PORT=3000
MONGO_URI=mongodb://localhost:27017/yourdbname

# 4. Run the Server
# Start your server with:

bash
node server.js

If successful, you’ll see:

MongoDB Connected Successfully
Server running on http://localhost:3000


#  API Documentation
Base URL
http://localhost:3000


# Root Route
# GET /

Returns a welcome message.

Response:

{
  "message": "Hello World!"
}



# Products Endpoints
# All product-related routes are prefixed with /api/products.

# 1. Get All Products
# GET /api/products
Response 

[
  {
    "_id": "6718b9d5c5b7b6a9f1d8e1e4",
    "id": 1,
    "name": "iPhone 15 Pro",
    "description": "Apple smartphone with A17 Pro chip and 128GB storage",
    "price": 1350,
    "category": "electronics",
    "instock": true
  }
]


# 2. Get a Product by ID

# GET /api/products/:id

# Example Request:

GET /api/products/6718b9d5c5b7b6a9f1d8e1e4

Response 

[
  {
    "_id": "6718b9d5c5b7b6a9f1d8e1e4",
    "id": 1,
    "name": "iPhone 15 Pro",
    "description": "Apple smartphone with A17 Pro chip and 128GB storage",
    "price": 1350,
    "category": "electronics",
    "instock": true
  }
]


# 3. Create a New Product

# POST /api/products

# Request Body Example:

{
  "id": 4,
  "name": "Blender",
  "description": "Durable 1.5L blender for kitchen use",
  "price": 45,
  "category": "kitchen",
  "instock": true
}


# Response Example:

{
  "_id": "6718ba89b4d8c3e2b8f4f1f5",
  "id": 4,
  "name": "Blender",
  "description": "Durable 1.5L blender for kitchen use",
  "price": 45,
  "category": "kitchen",
  "instock": true,
  "createdAt": "2025-10-23T10:00:00Z",
  "updatedAt": "2025-10-23T10:00:00Z"
}


# 4. Update a Product

# PUT /api/products/:id

# Example Request:
# This how the original product looked like

{
  "_id": "6718ba89b4d8c3e2b8f4f1f5",
  "id": 4,
  "name": "Blender",
  "description": "Durable 1.5L blender for kitchen use",
  "price": 45,
  "category": "kitchen",
  "instock": true
}


PUT /api/products/6718ba89b4d8c3e2b8f4f1f5

# Request Body Example:

{
  "price": 50,
  "instock": false
}

# Response Example:

{
  "_id": "6718ba89b4d8c3e2b8f4f1f5",
  "id": 4,
  "name": "Blender",
  "description": "Durable 1.5L blender for kitchen use",
  "price": 50,
  "category": "kitchen",
  "instock": false
}

# 5. Delete a Product

# DELETE /api/products/:id

# Example Request:

DELETE /api/products/6718ba89b4d8c3e2b8f4f1f5


# Response Example:

{
  "message": "Product deleted"
}

# Testing the API

# You can test the endpoints using:

Postman