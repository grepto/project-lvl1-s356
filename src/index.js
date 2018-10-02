import readlineSync from 'readline-sync';

export const askUser = question => readlineSync.question(`${question} `);

export const randomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
};

export const randomString = (sequence, length) => {
  let text = '';
  let index;
  for (let i = 0; i < length; i += 1) {
    index = randomInteger(0, sequence.length - 1);
    text += sequence[index];
  }
  return text;
};
