// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown');
const fs = require('fs');
const path = require('path');
const util = require("util");
// TODO: Create an array of questions for user input
const questions = () => {

    return inquirer.prompt([{
        type: "input",
        name: "readME",
        message: "What would you like the name of your prooject to be?",
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project",
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?",
        
    },
    {    
        type: "input",
        name: "usage",
        message: "How can your project be used?",
    },

    {
    
        type: "input",
        name: "installation",
        message: "Do you need to install anything",
    },
    {
    {
        type: "input",
        name: "contact",
        message: "What is your contact information?",
        
    },])};
    

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const generateReadMe = ({ readME, description, installation, usage, github, contact }) =>
  `#${readME}
  ##${description}
  ##${github}
  ##${usage}
  ##${installation}
  ##${contact}`;

  function init() {
    questions()
    .then((answers) => {
        const readMeContent = generateReadMe(answers);
    
        fs.writeFile('README.md', readMeContent, (err) =>
          err ? console.log(err) : console.log('Successfully created!')
        );
      });
}
init();
