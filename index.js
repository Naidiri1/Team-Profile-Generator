// Inquirer prompts to create new instances of your class
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./src/generateMarkdown');
const Manager = require("./lib/Manager");

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
            message: "What is your Manager's office number?",
        },

 /*       
        {
            type: 'input',
            name: 'engineerName',
            message: "What is your engineer's name?",
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is your engineer's id?",
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is your engineer's email?",
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: "What is your engineer's github's username?"
        },


        {
            type: 'input',
            name: 'engineerName',
            message: "What is your engineer's name?",
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is your engineer's id?",
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is your engineer's email?",
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: "What is your engineer's github's username?"
        },

       {
            type: 'input',
            name: 'engineerName',
            message: "What is your engineer's name?",
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is your engineer's id?",
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is your engineer's email?",
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: "What is your engineer's github's username?"
        },


        {
            type: 'input',
            name: 'internName',
            message: "What is your intern's name?",
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is your intern's id?",
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is your intern's email?",
        },
        {
            type: 'input',
            name: 'schoolName',
            message: "What is your intern's school name?"
        },
*/
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