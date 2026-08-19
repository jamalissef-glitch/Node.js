const express = required('express');
const app = express()
const PORT = 3000;

// middleware

app.use(express.json());

let users = [
 { id: 1, name: "Mohamed Omar", title: "Operation" },
 { id: 2, name: "Siham Abdi", title: "HRM" },
 { id: 3, name: "Asma Coffe", title: "Cook" }
];


// Bilaabidda Server-ka (Tani waa inay joogtaa si aad GET ama POST u hesho)
app.listen(PORT, () => {
 console.log(`Server-ku wuxuu ka shaqaynayaa port-ka ${PORT}`);
});