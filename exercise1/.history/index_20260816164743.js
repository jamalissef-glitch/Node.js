const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON

// GET route
app.get('/users', (req, res) => {
 res.send('List of users');
});

// // POST route
// app.post('/users', (req, res) => {
//  const userData = req.body;
//  res.send(`User created with name: ${userData.name}`);
// });

// // PUT route
// app.put('/users/:id', (req, res) => {
//  const userId = req.params.id;
//  const updatedData = req.body;
//  res.send(`User ${userId} updated with name: ${updatedData.name}`);
// });

// // DELETE route
// app.delete('/users/:id', (req, res) => {
//  const userId = req.params.id;
//  res.send(`User ${userId} deleted`);
// });

app.listen(PORT, () => {
 console.log(`Server running on http://localhost:${PORT}`);
});
