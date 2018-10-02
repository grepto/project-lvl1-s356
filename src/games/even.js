import { cons } from 'hexlet-pairs';
import randomInteger from '../utils';
import startGame from '../gameEngine';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".\n';

const pairEven = () => {
  const a = randomInteger(1, 100);
  const answer = a % 2 === 0 ? 'yes' : 'no';

  // console.log(toString(cons(a, answer)));
  return cons(a, answer);
};

const gameEven = () => startGame(pairEven, gameDescription);

export default gameEven;
