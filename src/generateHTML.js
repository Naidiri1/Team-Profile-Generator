const Employee = require("../lib/Employee");
cardHtml = [];

// you want to make a function that loops through your employeeArr to make html cards for all employees
function htmlCards(employeesArr){
  for (let index = 0; index < employeesArr.length; index++) {
    // employeesArr[index] returns an employee. all employees have a role
    if (employeesArr[index].getRole() === 'Manager' ) {
      // CREATE MANAGER HTML
      const managerCard = `
       <div class="card">
       <div class="topSection">
       <p>${employeesArr[index].getName()}</p>
       <p>${employeesArr[index].getRole()}</p>
       </div>
       <div class="information">
       <ul>
       <li>ID: ${employeesArr[index].getId()}</li>
       <li>Email:
       <a href="mailto:${employeesArr[index].getEmail()}">${employeesArr[index].getEmail()}</a>
       </li>
       <li>Office Number: ${employeesArr[index].getOfficeNumber()}</li>
       </ul>
       <div/>
       </div>
        `;
        cardHtml.push(managerCard)
    }else if  (employeesArr[index].getRole() === 'Intern' ){
     // CREATE INTERN HTML
     const internCard = `
     <div classcard>
     <div class="topSection">
     <p>${employeesArr[index].getName()}</p>
     <p>${employeesArr[index].getRole()}</p>
     <div class="information">
     <ul>
     <li>ID: ${employeesArr[index].getId()}</li>
     <li>Email:
     <a href="mailto:${employeesArr[index].getEmail()}">${employeesArr[index].getEmail()}</a>
     </li>
     <li>Office Number: ${employeesArr[index].getSchool()}</li>
     </ul>
      `;
      cardHtml.push(internCard)
    }else{
    employeesArr[index].getRole() === 'Engineer'

      const engineerCard = `
      <div= card>
      <div class="topSection">
      <p>${employeesArr[index].getName()}</p>
      <p>${employeesArr[index].getRole()}</p>
      <div class="information">
      <ul>
      <li>ID: ${employeesArr[index].getId()}</li>
      <li>Email:
      <a href="mailto:${employeesArr[index].getEmail()}">${employeesArr[index].getEmail()}</a>
      </li>
      <li>Office Number: 
      <a href="https://github.com/${employeesArr[index].getGithub()}">${employeesArr[index].getGithub()}</a>
      </li>
      </ul>
       `;
       cardHtml.push(engineerCard)


    }
    // return the cardHtml array which contains all of the employee cards and converts it into a string
    return cardHtml.join("")
}}
function generateHTML(data) {
    return `

    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team</title>
        <link rel="stylesheet" href="./dist/style.css" />
    </head>
    <body>
    <header>
    <h1> My Team </h1>
    </header>

<div class="container">
${htmlCards(data)}

 </body>
</html>
  
`;
}
//  exported values and functions from that module. 
module.exports = generateHTML;





















