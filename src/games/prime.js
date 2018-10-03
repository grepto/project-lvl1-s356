import { cons } from 'hexlet-pairs';
import randomInteger from '../utils';
import startGame from '../gameEngine';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (question) => {
  if (question < 2) return false;
  const iter = (counter) => {
    if (counter === 1) { return true; }
    if (question % counter === 0) { return false; }
    return iter(counter - 1);
  };
  return iter(question - 1);
};

const pairPrime = () => {
  const question = randomInteger(1, 1000);
  const answer = isPrime(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => startGame(pairPrime, gameDescription);
