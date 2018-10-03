import { cons } from 'hexlet-pairs';
import randomInteger from '../utils';
import startGame from '../gameEngine';

const gameDescription = 'What is the result of the expression?';
const progressionLength = 10;

const pairProgression = () => {
  const startProgression = randomInteger(1, 10);
  const stepProgression = randomInteger(2, 5);
  const answerPosition = randomInteger(1, 10);

  let question = '';
  let answer = '';
  let currentStep = startProgression;
  let currentStepText;

  for (let i = 1; i <= progressionLength; i += 1) {
    if (i === answerPosition) {
      answer = currentStep;
      currentStepText = '..';
    } else {
      currentStepText = currentStep;
    }
    question += ` ${currentStepText}`;
    currentStep += stepProgression;
  }

  return cons(question, answer);
};

export default () => startGame(pairProgression, gameDescription);
