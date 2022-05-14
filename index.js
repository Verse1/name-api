import express from 'express';
const app = express();
import meaning from './analysis.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const name = req.query.name;
  const age = req.query.age;

  if (name === undefined || age === undefined) {
    res.status(400).send('Please provide a name and age');
  } else {
    res.send(meaning(name.toLowerCase(), age));
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
