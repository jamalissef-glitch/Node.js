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

// POST: Sii kor dhiiri isticmaale cusub
app.post('/users', (req, res) => {
 // Hubi in magaca uu soo diray
 if (!req.body.name) {
  return res.status(400).json({ error: 'Fadhlan magaca soo sheeg' });
 }

 const newUser = {
  // Si ka badbaado badan oo ID-ga cusub loogu generat-gareeyo
  id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
  name: req.body.name
 };

 users.push(newUser);
 res.status(201).json(newUser);
});

// Bilaabidda Server-ka (Tani waa inay joogtaa si aad GET ama POST u hesho)
app.listen(PORT, () => {
 console.log(`Server-ku wuxuu ka shaqaynayaa port-ka ${PORT}`);
});