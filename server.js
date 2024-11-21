const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bfhlRoutes = require('./routes/bfhl');

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '2mb' }));

app.use('/bfhl', bfhlRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
