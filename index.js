import express from 'express';
import meaning from './analysis.js';

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET / - return name analysis
app.get('/', (req, res) => {
  const name = req.query.name;
  const age = req.query.age;
  const gender = req.query.gender;

// check for valid input
  if (name === undefined || age === undefined || gender === undefined) {
    res.status(400).send('Please provide a name, age, and gender(M or F)');
  } else {
    // call analysis function
    res.send(meaning(name.toLowerCase(), age, gender));
  }
});

// server listen
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
