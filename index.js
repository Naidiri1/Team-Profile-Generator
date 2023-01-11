
const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require('./src/generateHTML');
const Manager = require("./lib/Manager");
// require your Intern and Engineer class
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
var employeesArr = [];


const manager = [

    {
        type: 'input',
        name: 'managerName',
        message: "What is your name?",
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is your  Id?",
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is your email?",
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is your office number?",
    },
]

const intern =[
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
    name: 'internEmail',
    message: "What is your intern's email?",
},
{
    type: 'input',
    name: 'schoolName',
    message: "What is your intern's school name?"
},

]

const options =  [ {
    type: 'list',
    name: 'teamMembers',
    message: " Do you want to add a team member?",
    choices: ["intern", "engineer", "build team"]
},
]

function optionsPrompt (){
// it will get personal option to prompt questions.
    inquirer
        .prompt(options)
        // prompt for if they want to build an engineer, intern, or build team
        .then((response) => {
            console.log(response)
            // if 'engineer' then run engineerPrompt()
            if (response.teamMembers === 'engineer') {
                engineerPrompt();
            }
            // make a if statement so if they choose intern, it runs intern
            if (response.teamMembers === 'intern'){
                internPrompt();
            }
            if (response.teamMembers === "build team"){
                writeFile(employeesArr);
            }
        })
}


function internPrompt(){
    //prompt question/input from user
    inquirer
        .prompt(intern)
        .then((response) => {
            // make a manager variable to create a new instance of your Manager class
            const intern = new Intern(response.internName, response.internId, response.internEmail, response.schoolName)
            employeesArr.push(intern);
            // we call this line so the user can add more engineers and interns or build their team
            optionsPrompt();
})}

function managerPrompt() {
    inquirer
        .prompt(manager)
        .then((response) => {
            // make a manager variable to create a new instance of your Manager class
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.officeNumber)
            employeesArr.push(manager);
            optionsPrompt();
        })
}


function engineerPrompt() {
    inquirer.prompt([
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
    ])

    .then((response) => {
        // change to be new engineer
        const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.githubUsername)
        employeesArr.push(engineer);
        optionsPrompt();
       })
}

function writeFile(response) {
    fs.writeFile(`index.html`, generateHTML(response),(err) =>
    err ? console.log(err) : console.log('Successfully created html!')
    )
    console.log(employeesArr);
};


 function init (){
    managerPrompt();
 }

init();
