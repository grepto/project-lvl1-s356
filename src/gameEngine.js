import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const welcomeMessage = '\nWelcome to the Brain Games!';
const roundQuantity = 3;

const askUser = question => readlineSync.question(`${question} `);

const startGame = (gameFunction, gameDescription) => {
  console.log(welcomeMessage);
  console.log(`${gameDescription}\n`);

  const userName = askUser('May I have your name user?');
  console.log(`Hello, ${userName}\n`);

  for (let i = 0; i < roundQuantity; i += 1) {
    const gamePair = gameFunction();
    const question = car(gamePair);
    const rightAnswer = cdr(gamePair);
    const userAnswer = askUser(`Question: ${question}\nYour answer:`);

    if (userAnswer === rightAnswer) {
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
