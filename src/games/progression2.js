import { cons } from 'hexlet-pairs';
import randomInteger from '../utils';
import startGame from '../gameEngine';

const gameDescription = 'What is the result of the expression?';
const progressionLength = 10;

const getElement = (start, step, index) => start + (step * index);

const getQuestion = (start, step, answerPosition) => {
  const getProgression = (counter, progression) => {
    if (counter === progressionLength) return progression;
    const nextElement = counter === answerPosition ? '..' : getElement(start, step, counter);
    return getProgression(counter + 1, `${progression} ${nextElement}`);
  };
  return getProgression(0, '');
};

const pairProgression = () => {
  const start = randomInteger(1, 10);
  const step = randomInteger(2, 5);
  const answerPosition = randomInteger(0, progressionLength - 1);
  const question = getQuestion(start, step, answerPosition);
  const answer = getElement(start, step, answerPosition);
  return cons(question, String(answer));
};

export default () => startGame(pairProgression, gameDescription);
