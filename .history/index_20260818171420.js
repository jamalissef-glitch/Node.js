const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const userRouter = require('./routes/users');
const postRoutes = require('./routes/posts');

const app = express();
const PORT = process.env.PORT || 5000; // Hal mar oo kaliya ayaa la bayaaninayaa

// Middlewares
app.use(express.json());
app.use(cors({
 origin: 'http://localhost:5879'
}));
app.use(morgan('short')); // Waa 'short', ma aha 'shorts'

// Routes
app.use('/users', userRouter);
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
 res.send('API is running...'); // Waa la xalliyay cilladii `users`
});

// Database Connection & Server Start
mongoose.connect(process.env.MONGO_URI)
 .then(() => {
  console.log("mongo is connected");
  app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
  });
 })
 .catch(err => console.log("error for mongoose connection", err));