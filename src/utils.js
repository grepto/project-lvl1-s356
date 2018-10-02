import readlineSync from 'readline-sync';

const randomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
};

export const askUser = question => readlineSync.question(`${question} `);

export default randomInteger;
