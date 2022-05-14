import { syllable } from 'syllable';

export default function meaning(name, age, gender) {
  const nameArray = name.split('');
  // make first letter uppercase
  name = name.charAt(0).toUpperCase() + name.slice(1);

  // give gender a number
  gender = gender.toUpperCase() === 'M' ? 2 : 5;

  // calculate algorithm product from all params
  const product =
    nameArray.reduce((acc, curr) => {
      if (consonants.includes(curr)) {
        return acc * 3;
      } else if (vowels.includes(curr)) {
        return acc * 5;
      } else {
        return acc;
      }
    }, 1) *
    age *
    name.length *
    syllable(name) *
    gender;

  // construct first sentence with adjectives
  const sentence1 = `The name ${name} gives you the ability to be ${
    adjectives[product % adjectives.length]
  } while also being ${
    adjectives[product % consonants.length]
  } at the same time.`;

  // construct second sentence with careers
  const sentence2 = `In life you you may start garnering an interest to be a ${
    careers[product % careers.length]
  } `;

  // construct third sentence with hobbies
  const sentence3 = `In your free time you sometimes are ${
    hobbies[product % hobbies.length]
  }`;
  // return both sentences
  return [sentence1, sentence2, sentence3];
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

const hobbies = [
  'cooking',
  'gardening',
  'painting',
  'writing',
  'dancing',
  'playing music',
  'coding',
  'playing video games',
  'playing sports',
  'making YouTube videos',
  'crying in the shower',
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
