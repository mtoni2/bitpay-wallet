
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.post('/register', (req, res) => {
    const { email, password } = req.body;
    // Handle user registration logic here
    res.send('User registered');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Handle login logic here
    res.send('User logged in');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
