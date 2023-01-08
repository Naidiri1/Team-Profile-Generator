// Inquirer prompts to create new instances of your class
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./src/generateMarkdown');


const employees = [

        {
            type: 'input',
            name: 'managerName',
            message: "What is your Manager's name?",
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is your Manager's id?",
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is your Manager's email?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your Manager's office number?"
        }


    ];

    function writeFile(data) {
        fs.writeFile(`index.html`, generateMarkdown(data),(err) =>
        err ? console.log(err) : console.log('Successfully created html!')
        )};

    function init() {
        inquirer
         .prompt(employees)
    .then((response) => {
       writeFile(response)
       })
}

init();