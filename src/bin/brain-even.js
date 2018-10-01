#!/usr/bin/env node
import { brainEvenStep, getUserName } from '..';

console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');

const userName = getUserName();

console.log(`Hello ${userName}!\n`);

let result;

result = brainEvenStep(15);
if (result === true) {
  result = brainEvenStep(6);
}
if (result === true) {
  result = brainEvenStep(7);
}

if (result === true) {
  console.log(`Congratulations, ${userName}!`);
} else {
  console.log(`Let's try again, ${userName}!`);
}
