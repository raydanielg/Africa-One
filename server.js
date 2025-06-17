import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3001; // Choose a different port to avoid conflicts with the React app

// Middleware to handle CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

import bcrypt from 'bcrypt';

const usersFilePath = 'users.json';

app.use(express.json());

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    const user = users.find(u => u.email === email);

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const result = await bcrypt.compare(password, user.password);

    if (result === true) {
      // Passwords match
      return res.json({ message: 'Login successful' });
    } else {
      // Passwords don't match
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (err) {
    console.error('Error reading or comparing passwords:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});