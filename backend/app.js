require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const summaryRoutes = require('./routes/summaryRoutes');
const emailRoutes = require('./routes/emailRoutes');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
  origin: "https://ai-powered-meeting-notes-summarizer-and-3pjd.onrender.com",          // Allow frontend origin 
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], 
  allowedHeaders: ["Content-Type", "Authorization"]      
}));

app.use(bodyParser.json());

// Test route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// API routes
app.use('/api/summary', summaryRoutes);
app.use('/api/email', emailRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

