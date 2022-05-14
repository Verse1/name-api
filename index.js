const express = require('express');
const app = express();

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

const meaning = (name, age) => {
  const consonants = [
    'b',
    'c',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'm',
    'n',
    'p',
    'q',
    'r',
    's',
    't',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const adjectives = [
    'happy',
    'sad',
    'angry',
    'silly',
    'lazy',
    'creative',
    'funny',
    'cute',
    'brave',
    'smart',
    'influential',
    'eccentric',
    'generous',
    'kind',
    'loyal',
    'helpful',
    'lucky',
    'wise',
    'clumsy',
    'curious',
    'encouraging',
    'shy',
    'stubborn',
    'witty',
    'sensitive',
    'loud',
    'quiet',
    'free spirited',
    'confident',
    'courageous',
    'determined',
    'fearless',
  ];
  const nameArray = name.split('');
  const product =
    nameArray.reduce((acc, curr) => {
      if (consonants.includes(curr)) {
        return acc * 2;
      } else if (vowels.includes(curr)) {
        return acc * 3;
      } else {
        return acc;
      }
    }, 1) *
    age *
    name.length;

  console.log(product, consonants.length, vowels.length, adjectives.length);
  const sentence1 = `The name ${name} gives you the ability to be ${
    adjectives[product % consonants.length]
  } while also being ${adjectives[product % vowels.length]} at the same time.`;
  return sentence1;
};

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
