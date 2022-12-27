#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function Welcome() {
  const Neon = chalkAnimation.neon("Welcome to the Word Counter\n");
  await sleep();
  Neon.stop();
}

async function WordCounter() {
  const data: { Sentence: string } = await inquirer.prompt([
    {
      name: "Sentence",
      type: "input",
      message: chalk.bgGrey("Enter the Sentence to Count the words?"),
    },
  ]);
  const words = data.Sentence.trim().split(" ");
  console.log(chalk.bgGray(`The total number of words are ${words.length}`));
}

async function StartAgain() {
  do {
    await WordCounter();
    var again = await inquirer.prompt([
      {
        name: "restart",
        type: "input",
        message: "Do you want to Continue? y or n",
      },
    ]);
  } while (again.restart === "y");
}

await Welcome();
await StartAgain();
