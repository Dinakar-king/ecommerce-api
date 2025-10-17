const express = require('express');
const cors = require('cors');
const os = require('os');
const http = require('http');
const productsRouter = require('./routes/products');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Use http module to log every request method and URL
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/products', productsRouter);

// Start server and print system info
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('System Info:');
  console.log(`Platform: ${os.platform()}`);
  console.log(`CPU cores: ${os.cpus().length}`);
});
