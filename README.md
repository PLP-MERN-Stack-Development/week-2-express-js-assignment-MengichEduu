# 📦 Express.js REST API – Products Management

A RESTful API built using Express.js to manage products with CRUD functionality, middleware, error handling, filtering, pagination, and search.

---

## 🚀 How to Run the Server

### 🛠️ Prerequisites
- Node.js v18 or higher installed

### 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/PLP-MERN-Stack-Development/week-2-express-js-assignment-MengichEduu.git
cd week-2-express-js-assignment-MengichEduu

INSTALL DEPENDENCIES
npm install

Start the server:
node server.js

The server runs at:
http://localhost:3000

📂 API Endpoints
Base URL - http://localhost:3000/api/products

Routes
| Method | Endpoint           | Description          |
| ------ | ------------------ | -------------------- |
| GET    | /api/products      | Get all products     |
| GET    | /api/products/\:id | Get product by ID    |
| POST   | /api/products      | Create a new product |
| PUT    | /api/products/\:id | Update product by ID |
| DELETE | /api/products/\:id | Delete product by ID |


🧪 Sample Requests & Responses
✅ Create a New Product

POST /api/products

Request Body
{
  "name": "Phone",
  "description": "A smart phone",
  "price": 499.99,
  "category": "Electronics",
  "inStock": true
}

Response
{
  "id": "a-unique-id",
  "name": "Phone",
  "description": "A smart phone",
  "price": 499.99,
  "category": "Electronics",
  "inStock": true
}

📋 Get All Products

GET /api/products

Response
[
  {
    "id": "a-unique-id",
    "name": "Phone",
    "description": "A smart phone",
    "price": 499.99,
    "category": "Electronics",
    "inStock": true
  }
]

🔍 Get Product by ID

GET /api/products/a-unique-id

Response
{
  "id": "a-unique-id",
  "name": "Phone",
  "description": "A smart phone",
  "price": 499.99,
  "category": "Electronics",
  "inStock": true
}


♻️ Update a Product

PUT /api/products/a-unique-id

Request Body
{
  "price": 399.99,
  "inStock": false
}

Response
{
  "id": "a-unique-id",
  "name": "Phone",
  "description": "A smart phone",
  "price": 399.99,
  "category": "Electronics",
  "inStock": false
}

⚙️ .env.example

# Example environment variables
PORT=3000
API_KEY=your-secret-api-key


🧑‍💻 Author

Mengich EdOM
Week 2 – Express.js Assignment
PLP MERN Stack Development Program
