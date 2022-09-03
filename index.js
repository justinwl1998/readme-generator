// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const md = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the name of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Give a description of your project.",
        name: "desc"
    },
    {
        type: "input",
        message: "What are the installation instructions for this project?",
        name: "install"
    },
    {
        type: "input",
        message: "What are the usage instructions for this project?",
        name: "usage"
    },
    {
        type: "list",
        message: "What license does this project use?",
        name: "license",
        choices: ["None", "Apache 2.0", "GNU General Public License v3.0", "MIT", "BSD-2", "BSD-3", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"]
    },
    {
        type: "input",
        message: "What are the contribution guidelines for this project?",
        name: "contrib"
    },
    {
        type: "input",
        message: "What are the test instructions for this project?",
        name: "test"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "githubUsername"
    },
    {
        type: "input",
        message: "What is your E-mail address?",
        name: "email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data)
        // pass to generateMarkdown eventually
        console.log(md.generateMarkdown(data))
    })
}

// Function call to initialize app
init();
