import { cons } from 'hexlet-pairs';
import { randomInteger } from '../index';

const gameEven = () => {
  const a = randomInteger(1, 100);
  const answer = a % 2 === 0 ? 'yes' : 'no';

  // console.log(toString(cons(a, answer)));
  return cons(a, answer);
};

export default gameEven;
