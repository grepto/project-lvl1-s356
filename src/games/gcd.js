import { cons } from 'hexlet-pairs';
import randomInteger from '../utils';
import startGame from '../gameEngine';

const gameDescription = 'Find the greatest common divisor of given numbers.\n';

const getAbsMin = (a, b) => {
  if (Math.abs(a) <= Math.abs(b)) { return Math.abs(a); }
  return Math.abs(b);
};

const getGcd = (a, b) => {
  const minValue = getAbsMin(a, b);
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

const gameGcd = () => startGame(pairGcd, gameDescription);

export default gameGcd;
