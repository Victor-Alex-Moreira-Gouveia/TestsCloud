const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/data', (req, res) => {
  // Handle GET request to /api/data
  res.json({ message: 'Data retrieved successfully' });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});