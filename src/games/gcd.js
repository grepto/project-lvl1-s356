import { cons, toString } from 'hexlet-pairs';
import { randomInteger } from '../index';

const getGcd = (a, b) => {
  const minValue = Math.abs(a) <= Math.abs(b) ? Math.abs(a) : Math.abs(b);
  for (let i = minValue; i > 0; i -= 1) {
    if (a % i === 0 && b % i === 0) return i;
  }
  return 1;
};

const gameGcd = () => {
  const a = randomInteger(1, 100);
  const b = randomInteger(1, 100);
  const answer = getGcd(a, b);
  console.log(toString(cons(`${a} ${b}`, answer)));
  return cons(`${a} ${b}`, answer);
};

export default gameGcd;
