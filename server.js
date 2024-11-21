import express from 'express';
import cors from 'cors';
import bfhlRoutes from './routes/bfhlRoutes.js';

const app = express();
const port = 5000;

// Add CORS middleware with specific configuration
app.use(
  cors({
    origin: 'https://bfhl-frontend-eight-psi.vercel.app', // Your frontend URL
    methods: ['GET', 'POST'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  })
);

// Middleware for parsing JSON
app.use(express.json());

// Use the routes
app.use('/api/bfhl', bfhlRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
