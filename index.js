// TODO: Include packages needed for this application

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
