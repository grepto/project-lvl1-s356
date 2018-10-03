import { cons } from 'hexlet-pairs';
import randomInteger from '../utils';
import startGame from '../gameEngine';

const gameDescription = 'What is the result of the expression?';
const progressionLength = 10;

const pairProgression = () => {
  const start = randomInteger(1, 10);
  const step = randomInteger(2, 5);
  const answerPosition = randomInteger(0, 9);

  const getElement = index => start + (step * index);

  const question = () => {
    const getQuestion = (counter, progression) => {
      if (counter === progressionLength) return progression;
      const nextElement = counter === answerPosition ? '..' : getElement(counter);
      return getQuestion(counter + 1, `${progression} ${nextElement}`);
    };
    const startElement = answerPosition === 0 ? '..' : start;
    return getQuestion(1, startElement);
  };

  const answer = getElement(answerPosition);

  return cons(question(), String(answer));
};
export default () => startGame(pairProgression, gameDescription);
