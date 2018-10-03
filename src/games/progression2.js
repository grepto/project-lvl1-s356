import { cons } from 'hexlet-pairs';
import randomInteger from '../utils';
import startGame from '../gameEngine';

const gameDescription = 'What is the result of the expression?';

const getProgression = (start, step, question) => {
  const addProgression = (counter, progression, element) => {
    if (counter === 10) {
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
      return answer;
    }
    return calculation(counter + 1, answer + step);
  };
  return calculation(1, start);
};

const pairProgression = () => {
  const startProgression = randomInteger(1, 10);
  const stepProgression = randomInteger(2, 5);
  const questionStep = randomInteger(1, 10);

  const question = getProgression(startProgression, stepProgression, questionStep);
  const answer = getAnswer(startProgression, stepProgression, questionStep);

  return cons(question, answer);
};
export default () => startGame(pairProgression, gameDescription);
