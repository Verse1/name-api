import { syllable } from 'syllable';

export default function meaning(name, age, gender) {
  const nameArray = name.split('');
  // make first letter uppercase
  name = name.charAt(0).toUpperCase() + name.slice(1);

  gender = gender.toUpperCase() === 'M' ? 2 : 5;
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
    syllable(name) *
    gender;

  console.log(
    product,
    consonants.length,
    vowels.length,
    adjectives.length,
    careers.length,
    product % careers.length
  );
  const sentence1 = `The name ${name} gives you the ability to be ${
    adjectives[product % adjectives.length]
  } while also being ${
    adjectives[product % consonants.length]
  } at the same time.`;

  const sentence2 = `In life you you may start garnering an interest to be a ${
    careers[product % careers.length]
  } `;

  return [sentence1, sentence2];
}

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
  'fun',
];

const careers = [
  'doctor',
  'lawyer',
  'teacher',
  'nurse',
  'programmer',
  'writer',
  'musician',
  'singer',
  'actor',
  'comedian',
  'dancer',
  'pianist',
  'engineer',
  'chef',
  'salesman',
  'rapper',
  'realtor',
  'banker',
  'nurse',
  'firefighter',
  'politician',
];

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
