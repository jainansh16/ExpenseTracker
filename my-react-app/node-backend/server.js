const express = require('express');
const app = express();

app.get('/api/node', (req, res) => {
  res.json({ message: 'Hello from Node.js backend!' });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Node.js server running on http://localhost:${PORT}`);
});
