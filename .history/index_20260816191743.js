const express = required('express');
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
 const newUser = {

  id: users.length + 1,
  name: req.body.name
 };

 users.push(newUser);
 res.status(201).json(newUser)

});



// Bilaabidda Server-ka (Tani waa inay joogtaa si aad GET ama POST u hesho)
app.listen(PORT, () => {
 console.log(`Server-ku wuxuu ka shaqaynayaa port-ka ${PORT}`);
});