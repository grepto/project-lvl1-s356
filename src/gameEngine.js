import { car, cdr } from 'hexlet-pairs';
import { askUser } from './utils';

const welcomeMessage = '\nWelcome to the Brain Games!';

const startGame = (gameFunction, gameDescription) => {
  console.log(welcomeMessage);
  console.log(`${gameDescription}\n`);

  const userName = askUser('May I have your name user?');
  console.log(`Hello, ${userName}\n`);

  for (let i = 0; i < 3; i += 1) {
    const gamePair = gameFunction();
    const question = car(gamePair);
    const rightAnswer = cdr(gamePair);
    const userAnswer = askUser(`Question: ${question}\nYour answer:`);

    if (userAnswer === String(rightAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
