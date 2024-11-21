import express from 'express';
import cors from 'cors';
import bfhlRoutes from './routes/bfhlRoutes.js';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/bfhl', bfhlRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
