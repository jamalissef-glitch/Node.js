const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
 { id: 1, name: 'Mohamed Nur' },
 { id: 2, name: 'Asma Coffe' },
 { id: 3, name: 'Ahlam Jamal' }
];


// create post

app.post('/users', (req, res) => {
 if (!req.body || !req.body.name) {
  return res.status(400).json({ error: 'Fadlan soo dir magaca (name)' });
 }
 users.push(newUser);
 res.status(201).json(newUser)

});


app.get('/users', (req, res) => {
 res.json(users)
});

app.get('/users:id', (req, res) => {
 const user = users.find(u => u.id == req.params.id);
 if (!user) return res.status(404).send('user not found');
 res.json(user);

});

app.push('/users/:id', (req, res) => {
 const user = users.find(u => u.id == req.params.id);

 if (!user) return res.status(404).send('user not found')
 res.json(user);
});

app.put('/users/:id', (req, res) => {
 const user = users.find(u => u.id == req.params.id);

 if (!user) return res.status(404).send('user not found')
 res.json(user);
});


// Bilaabidda Server-ka (Tani waa inay joogtaa si aad GET ama POST u hesho)
app.listen(PORT, () => {
 console.log(`Server-ku wuxuu ka shaqaynayaa port-ka ${PORT}`);
});