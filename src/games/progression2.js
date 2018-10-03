import { cons } from 'hexlet-pairs';
import randomInteger from '../utils';
import startGame from '../gameEngine';

const gameDescription = 'What is the result of the expression?';
const progressionLength = 10;

const getProgression = (start, step, question) => {
  const addProgression = (counter, progression, element) => {
    if (counter === progressionLength) {
      return progression;
    }

    const nextElement = element + step;
    const nextElementText = counter + 1 === question ? '..' : nextElement;
    return addProgression(counter + 1, `${progression} ${nextElementText}`, nextElement);
  };
  const startElement = question === 1 ? '..' : start;
  return addProgression(1, startElement, start);
};

const getAnswer = (start, step, question) => {
  const calculation = (counter, answer) => {
    if (counter === question) {
      return String(answer);
    }
    return calculation(counter + 1, answer + step);
  };
  return calculation(1, start);
};

const pairProgression = () => {
  const startProgression = randomInteger(1, 10);
  const stepProgression = randomInteger(2, 5);
  const answerPosition = randomInteger(1, 10);

  const question = getProgression(startProgression, stepProgression, answerPosition);
  const answer = getAnswer(startProgression, stepProgression, answerPosition);

  return cons(question, answer);
};
export default () => startGame(pairProgression, gameDescription);
