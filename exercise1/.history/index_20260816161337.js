const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
 { id: 1, name: 'Mohamed' },
 { id: 2, name: 'Ahlam' },
 { id: 3, name: 'Amiir' }
];

app.get('/users', (req, res) => {
 res.json(users);
});
// creat post route to add a new user

app.post('/users', (req, res) => {
 const newUser = {
  id: users.length + 1,
  name: req.body.name
 }
 users.push(newUser);
 res.status(201).json(newUser);
});