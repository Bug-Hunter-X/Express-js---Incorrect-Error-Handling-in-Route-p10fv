const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operation to fetch user data using userId ...
  if (!user) {
    return res.status(404).send('User not found'); // Correct way
  }
  res.send(user);
});