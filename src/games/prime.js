import { cons } from 'hexlet-pairs';
import randomInteger from '../utils';
import startGame from '../gameEngine';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2 || number % 2 === 0) return false;
  if (number === 2) return true;
  const iter = (counter) => {
    if (counter ** 2 > number) { return true; }
    if (number % counter === 0) { return false; }
    return iter(counter + 2);
  };
  return iter(3);
};

const pairPrime = () => {
  const question = randomInteger(1, 1000);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => startGame(pairPrime, gameDescription);
