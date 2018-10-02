import { cons } from 'hexlet-pairs';
import { randomInteger, randomString } from '../index';

const gameCalculation = () => {
  const a = randomInteger(1, 100);
  const b = randomInteger(1, 100);
  const operation = randomString('+-*', 1);
  let answer;
  switch (operation) {
    case '+':
      answer = a + b;
      break;
    case '-':
      answer = a - b;
      break;
    default:
      answer = a * b;
  }
  // console.log(toString(cons(`${a} ${operation} ${b}`, answer)));
  return cons(`${a} ${operation} ${b}`, answer);
};

export default gameCalculation;
