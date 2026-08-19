const express = require('express');
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const mangoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;



let users = [
 { id: 1, name: 'Mohamed Nur' },
 { id: 2, name: 'Asma Coffe' },
 { id: 3, name: 'Ahlam Jamal' }
];

app.use(express.json());
app.use(cors()){
 origin: 'http://localhost:5879'
};



mongoose.connect(process.env.MONGO_URI, {
 useNewUrlParser: true,
 useUnifiedTopology: true
})
 .then(() => console.log('MongoDB connected'))
 .catch(err => console.log(err));


// create post

// app.post('/users', (req, res) => {
//  const newUser = {
//   id: users.length + 1,
//   name: req.body.name
//  };
//  users.push(newUser);
//  res.status(201).json(newUser);
// });



// app.get('/users', (req, res) => {
//  res.json(users)
// });

// app.get('/users:id', (req, res) => {
//  const user = users.find(u => u.id == req.params.id);
//  if (!user) return res.status(404).send('user not found');
//  res.json(user);

// });



// app.put('/users/:id', (req, res) => {
//  const user = users.find(u => u.id == req.params.id);

//  if (!user) return res.status(404).send('user not found')
//  res.json(user);
// });

// app.delete('/users/:id', (req, res) => {
//  users = users.filter(u => u.id != req.params.id);
//  res.send('User deleted');
// });



// Bilaabidda Server-ka (Tani waa inay joogtaa si aad GET ama POST u hesho)
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});