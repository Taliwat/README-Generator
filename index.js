// TODO: Include packages needed for this application
const generateMarkdown = require("./generateMarkdown")
// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
        {
         type: 'input',
         name: 'TITLE',
         message: 'What is the title of your project?',   
        },
        {
        type: 'input',
        name: 'DESCRIPTION',
        message: 'Add a short description of your project',
        },
        {
        type: 'input',
        name: 'INSTALLATION',
        message: 'Give any installation instructions needed for this project',
        },
        {
        type: 'input',
        name: 'USAGE',
        message: 'Describe how this project will be used',
        },
        {
        type: 'list',
        name: 'LICENSE',
        message: 'Which licenses is associated with this project?',
        choices:    ["MIT", "Boost" , "None"]
        },
        {
        type: 'input',
        name: 'CONTRIBUTING',
        message: 'Give credit to anyone that contributed to this project',
        },
        {
        type: 'input',
        name: 'TESTS',
        message: 'Describe how this project was tested for efficiency',
        },
        {
        type: 'input',
        name: 'QUESTIONS',
        message: 'Contact links for any questions the user might have',    
        }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        err ? console.log(err) : console.log("Readme successfully generated")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data){
        writeToFile("README.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();
