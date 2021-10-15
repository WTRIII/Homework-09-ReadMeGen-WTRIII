// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');
// console.log(chalk.blue('chalk test'));
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'Title:',
      name: 'title',
    }
    ,{
        type: 'input',
        message: 'Description:',
        name: 'description',
      }
      ,{
        type: 'input',
        message: 'Table of Contents:',
        name: 'contents',
      }
      ,{
        type: 'input',
        message: 'Installation:',
        name: 'installation',
      }
      ,{
        type: 'input',
        message: 'Usage:',
        name: 'usage',
      }
      ,{
        type: 'input',
        message: 'Contributing:',
        name: 'contributing',
      }
      ,{
        type: 'input',
        message: 'Tests:',
        name: 'tests',
      }
      ,{
        type: 'input',
        message: 'Questions:',
        name: 'question',
      }

  ])};

// TODO: Create a function to write README file
// TODO: Create a function to initialize app
const init = () =>{
  questions()
  .then((response) => fs.writeFileSync('./output/README.md', generateMarkdown(response)))
  .then(() => console.log(chalk.green('Operation successful.')))
  .catch((err) => console.error(chalk.red(err)))
}

// Function call to initialize app
init();
