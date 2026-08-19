const express = require('express');     // Load express
const app = express();                 // Create express app
const PORT = 3000;                     // Choose a port

app.get('/', (req, res) => {
 res.send('Hello from Express!');
});

app.listen(PORT, () => {
 console.log(`Server running on http://localhost:${PORT}`);
});
