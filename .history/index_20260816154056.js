const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
 { id: 1, name: 'Mohamed' },
 { id: 2, name: 'Ahlam' },
 { id: 3, name: 'Amiir' }
];