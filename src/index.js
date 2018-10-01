import readlineSync from 'readline-sync';

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  // console.log(`Hello ${userName}!`);
  return userName;
};

export const checkParity = number => number % 2 === 0;

export const brainEvenStep = (questionNumber) => {
  const rightAnswer = checkParity(questionNumber) ? 'yes' : 'no';
  console.log(`Question: ${questionNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (rightAnswer === userAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
};
