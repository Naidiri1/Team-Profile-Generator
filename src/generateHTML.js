const Employee = require("../lib/Employee");


// function that loops through your employeeArr to make html cards for all employees
function htmlCards(employeesArr){
  let cardHtml = '';
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
          </div>
      </div>
        `;
        cardHtml+=managerCard;
    }else if  (employeesArr[index].getRole() === 'Intern') {
     // CREATE INTERN HTML
     const internCard = `
     <div class= "card">
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
           <li>School: ${employeesArr[index].getSchool()}</li>
        </ul>
        </div>
     </div>
      `;
      cardHtml+=internCard;
       // CREATE ENGINEER HTML
    }else if (employeesArr[index].getRole() === 'Engineer'){
      const engineerCard = `
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
           <li>GitHub: 
          <a href="https://github.com/${employeesArr[index].getGithub()}">${employeesArr[index].getGithub()}</a>
           </li>
           </ul>
         </div>
       </div>
       `;
       cardHtml+=engineerCard
    }
   
  }
   // return the cardHtml array which contains all of the employee cards and converts it into a string
  return cardHtml
}
// FUNCTION TO GENERATE THE HTML file and adding the cards with the function 
function generateHTML(response) {
 
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
${htmlCards(response)}
</div>
 </body>
</html>
  
`;
}

//  exported values and functions from that module. 
module.exports = generateHTML;





















