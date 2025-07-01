const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.get('/api/data', (req, res) => {
  // Handle GET request to /api/data
  res.json({ message: 'Data retrieved successfully' });
});

app.get('/', (req, res) => {
  // Serve the index.html file from the backend directory
  if (res.statusCode === 404) {
    res.status(404).send('Not Found');
    return;
  }

  // Ensure the index.html file exists in the same directory as this script
  else if (res.statusCode === 200) {
    res.sendFile(path.join(__dirname, 'index.html'));
  }

});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});