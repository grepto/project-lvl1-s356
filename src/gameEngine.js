import { car, cdr } from 'hexlet-pairs';
import { askUser } from '.';
import gameCalculation from './games/calculation';
import gameEven from './games/even';


const startGame = (gameName) => {
  const welcomeMessage = '\nWelcome to the Brain Games!';
  let gameFunction;
  let gameDescription;

  if (gameName === 'calculation') {
    gameFunction = gameCalculation;
    gameDescription = 'What is the result of the expression?\n';
  }
  if (gameName === 'even') {
    gameFunction = gameEven;
    gameDescription = 'nswer "yes" if number even otherwise answer "no".\n';
  }

  console.log(welcomeMessage);
  console.log(gameDescription);

  const userName = askUser('May I have your name user?');
  console.log(`Hello, ${userName}\n`);

  let gamePair;
  let question;
  let rightAnswer;
  let userAnswer;

  for (let i = 0; i < 3; i += 1) {
    gamePair = gameFunction();
    question = car(gamePair);
    rightAnswer = cdr(gamePair);
    userAnswer = askUser(`Question: ${question}\nYour answer:`);

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
