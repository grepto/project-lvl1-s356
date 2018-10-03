import { cons } from 'hexlet-pairs';
import randomInteger from '../utils';
import startGame from '../gameEngine';

const gameDescription = 'What is the result of the expression?';

const pairProgression = () => {
  const startProgression = randomInteger(1, 10);
  const stepProgression = randomInteger(2, 5);
  const questionStep = randomInteger(1, 10);

  let question = '';
  let answer = '';
  let currentStep = startProgression;
  let currentStepText;

  for (let i = 1; i <= 10; i += 1) {
    if (i === questionStep) {
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
