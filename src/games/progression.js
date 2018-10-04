import { cons } from 'hexlet-pairs';
import randomInteger from '../utils';
import startGame from '../gameEngine';

const gameDescription = 'What is the result of the expression?';
const progressionLength = 10;

const pairProgression = () => {
  const start = randomInteger(1, 10);
  const step = randomInteger(2, 5);
  const answerPosition = randomInteger(0, progressionLength - 1);

  const getElement = index => start + (step * index);

  let question = '';
  for (let i = 1; i < progressionLength; i += 1) {
    if (i === 1) { question = answerPosition === 0 ? '..' : start; }
    const nextElement = i === answerPosition ? '..' : getElement(i);
    question += ` ${nextElement}`;
  }

  const answer = String(getElement(answerPosition));
  return cons(question, answer);
};

export default () => startGame(pairProgression, gameDescription);
