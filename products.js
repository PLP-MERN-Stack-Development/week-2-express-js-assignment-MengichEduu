const { v4: uuidv4 } = require('uuid');

let products = [
  {
    id: uuidv4(),
    name: 'Laptop',
    description: 'A high-end gaming laptop',
    price: 1500,
    category: 'Electronics',
    inStock: true
  },
  {
    id: uuidv4(),
    name: 'Headphones',
    description: 'Noise-cancelling headphones',
    price: 200,
    category: 'Electronics',
    inStock: true
  }
];

module.exports = products;
