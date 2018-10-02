import { cons } from 'hexlet-pairs';
import randomInteger from '../utils';
import startGame from '../gameEngine';

const gameDescription = 'What is the result of the expression?\n';

const pairCalculation = () => {
  const a = randomInteger(1, 100);
  const b = randomInteger(1, 100);
  const operation = '+-*'[randomInteger(0, 2)];
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
  return cons(`${a} ${operation} ${b}`, answer);
};

const gameCalculation = () => startGame(pairCalculation, gameDescription);

export default gameCalculation;
