const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
 { id: 1, name: 'Mohamed' },
 { id: 2, name: 'Ahlam' },
 { id: 3, name: 'Amiir' }
];

// GET: Soo qaad dhamaan users-ka
app.get('/users', (req, res) => {
 res.json(users);
});

app.post('/users', (req, res) => {
 // Hubi in req.body iyo req.body.name ay jiraan
 if (!req.body || !req.body.name) {
  return res.status(400).json({ error: 'Fadlan soo dir magaca (name)' });
 }

 const newUser = {
  id: users.length + 1,
  name: req.body.name
 };

 users.push(newUser);
 res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
 // Waa req.params (no req.prams)
 const user = users.find(u => u.id == req.params.id);

 // Waa res.status (no res.stutus)
 if (!user) return res.status(404).send('User is not found');

 user.name = req.body.name;
 res.json(user);
});


// Bilaabidda Server-ka (Tani waa inay joogtaa si aad GET ama POST u hesho)
app.listen(PORT, () => {
 console.log(`Server-ku wuxuu ka shaqaynayaa port-ka ${PORT}`);
});