
function generateMarkdown(data) {
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
 <div class="card">
  <p>${data.managerName}</p>
   <div class="information">
   <ul>
     <li>ID: ${data.managerId}</li>
     <li>
     Email:
     <a href="mailto:${data.managerEmail}"> ${data.managerEmail}</a>
     </li>
     <li>Office Number: ${data.officeNumber}</li>
   </ul>
 </div>
 </div>
 </body>
</html>
  
`;
}
//  exported values and functions from that module. 
module.exports = generateMarkdown;





















