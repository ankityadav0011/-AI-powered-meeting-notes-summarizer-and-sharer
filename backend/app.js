
require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const summaryRoutes = require('./routes/summaryRoutes');
const emailRoutes = require('./routes/emailRoutes');

const app = express();
const PORT = process.env.PORT | 3000;


app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server is running!');
});


app.use('/api/summary', summaryRoutes);
app.use('/api/email', emailRoutes);


app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
