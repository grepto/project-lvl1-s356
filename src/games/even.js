import { cons } from 'hexlet-pairs';
import randomInteger from '../utils';
import startGame from '../gameEngine';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".\n';

const isEven = question => question % 2 === 0;

const pairEven = () => {
  const question = randomInteger(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, answer);
};

const gameEven = () => startGame(pairEven, gameDescription);

export default gameEven;
