import { cons } from 'hexlet-pairs';
import randomInteger from '../utils';
import startGame from '../gameEngine';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  const minValue = Math.min(a, b);
  for (let i = minValue; i > 0; i -= 1) {
    if (a % i === 0 && b % i === 0) return i;
  }
  return 1;
};

const pairGcd = () => {
  const a = randomInteger(1, 100);
  const b = randomInteger(1, 100);
  const answer = getGcd(a, b);
  return cons(`${a} ${b}`, answer);
};

export default () => startGame(pairGcd, gameDescription);
