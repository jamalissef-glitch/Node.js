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

app.use(morgan('shorts'));

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
 res.json('users');
})



mangoose.connect(process.env.MONGO_URI)
 .then(() => console.log('MongoDB connected locally'))
 .catch(err => console.log("error for mongoose connection", err));





// Bilaabidda Server-ka (Tani waa inay joogtaa si aad GET ama POST u hesho)
app.listen(PORT, () => {
 console.log(`Server is running on http://localhost:${PORT}`);
});