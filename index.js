// Inquirer prompts to create new instances of your class

const inquirer = require("inquirer");
const Manager = require("./lib/Manager");


var employeesArr = [];

function managerPrompt() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is your Manager's name?"
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is your Manager's id?"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is your Manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your Manager's office number?"
        }
    ])

    .then((response) => {
        const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.officeNumber)
        employeesArr.push(manager);
       })
}

managerPrompt();