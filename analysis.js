import { syllable } from 'syllable';

export default function meaning(name, age) {
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
    name.length *
    syllable(name);

  console.log(product, consonants.length, vowels.length, adjectives.length);
  const sentence1 = `The name ${name} gives you the ability to be ${
    adjectives[product % consonants.length]
  } while also being ${adjectives[product % vowels.length]} at the same time.`;

  return sentence1;
}

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
