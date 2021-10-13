// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');
console.log(chalk.blue('chalk test'));
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// write questions in here then reference the array 
const questions = [
inquirer
  .prompt([
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

  ])
  .then((response) => {
    console.log(`Title: ${response.title}`);
    console.log(`Descr: ${response.description}`);
    console.log(`Table of Contents: ${response.contents}`);
    console.log(`Installation: ${response.installation}`);
    console.log(`Usage: ${response.usage}`);
    console.log(`Contributing: ${response.contributing}`);
    console.log(`Tests: ${response.tests}`);
    console.log(`Questions? ${response.question}`);

  })
];
// function writeToExisting(){
//     fs.appendFile('README.md', `${questions}\n`, (err) =>
//     err ? console.error(chalk.red(err)) : console.log(chalk.green('Success'))
//     );
// }

// TODO: Create a function to write README file
function writeToFile(filename, data) {
    // fs.writeFile(generateMarkdown(data));
        fs.writeFile('./output/newReadme.md', `${questions}\n`,(err) =>
        err ? console.error(chalk.red(err)) : console.log(chalk.green('Success'))
        );
    }
    // fs.writeFile('log.txt', process.argv[2], (err) =>
    // err ? console.error(err) : console.log('Success!')
    // );
    // fs.writeFile('meaning.txt', data.existence, (err)=>{
    //     if(err){console.log(chalk.red(err))}
    //     else{console.log(chalk.green('Success'))}
    // })


// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();

// // log.txt is the title of the file, the string temporate litoral 
// // the template litoral allows you to use special characters and lines
// fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
//   // TODO: Describe how this ternary operator works
//   err ? console.error(chalk.red(err)) : console.log('Commit logged!')
//   // if there is an error in Node, log an error in the console. 
//   //else, console.log the string "Commit Logged!"
// );
