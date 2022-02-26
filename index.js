
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const OUTPUT_DIR = path.resolve(__dirname, " src-templete");
const outputPath = path.join(OUTPUT_DIR, "index.html")
const ViewHTML = require ("./lib/ViewHTML")



const employees = []


function addMember() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter team member's name",
            name: "name"
        },
        {
            type: "input",
            message: "Enter team member's employee ID",
            name: "id"
        },
        {
            type: "input",
            message: "Enter team member's email",
            name: "email"
        },
        {
            type: 'list',
            message: "Please select this member's role",
            choices: ["Manager", "Engineer", "Intern"],
            name: "role"
        }
    ]).then(function (results) {
        if (results.role === "Intern") {
            intern(results);
        } else if (results.role === "Manager") {
            manager(results);
        } else {
            engineer(results);
        }
    })
}
function intern(originalResults) {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter intern's school.",
            name: "school"
        },
        {
            type: "confirm",
            message: "Enter any addition info if needed.",
            name: "addAnswers"
        }
    ]).then(function (results) {
        const newIntern = new Intern(originalResults.name, originalResults.id, originalResults.email, results.school);
        employees.push(newIntern);
        if (results.addAnswers === true) {
            addMember();
        } else {
            createTeam()
        }
    })
}
function engineer (originalResults){
    inquirer.prompt([
        {
            type: "input",
            message: "Enter the engineer's Github username.",
            name: "Github"
        },
        {
            type: "confirm",
            message: "Enter any addition info if needed.",
            name: "addlAnswers"
        }
    ]).then(function(results){
        const newEngineer = new Engineer(originalResults.name, originalResults.id, originalResults.email, results.github);
        employees.push(newEngineer);
        if(results.addAnswers === true){
            addMember();
        } else {
            createTeam()
        }
    })
}

function manager (originalResults){
    inquirer.prompt([
        {
            type: "input",
            message: "Enter the manager's office number.",
            name: "officeNumber"
        },
        {
            type: "confirm",
            message: "Enter any addition info if needed.",
            name: "addAnswers"
        }
    ]).then(function(results){
        const newManager = new Manager(originalResults.name , originalResults.id, originalResults.email, results.officeNumber);
        employees.push(newManager);
        if(results.addAnswers === true){
            addMember();
        } else {
            createTeam()
        }
    
    })
}
function createTeam() {
    if(!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, `  <!doctype html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    
        <title>Team Profile Generator</title>
      </head>
      <body>
    
        <div class="container-fluid">
            <div class="card justify-content-center">
                <div class="card-body text-center bg-secondary text-white">
                    <h1> My Team Profile </h1>
                </div>
            </div>
    
    
    </div>
       
    <div class="container"style="width: 18rem; justify-content: center; fl" >
    <div class="col-5">
      <div class="card " style="width: 18rem; justify-content: center;">
        <h3 class="card-header">
          Tray Smith <br /><br />Manager</h3> 
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Employee ID: 2</li>
          <li class="list-group-item">Email:Tray@email.com</li>
          <li class="list-group-item">Office Number: 123.123.1234</li>
        </ul>
      </div>
    
    </div>
    
    <div class="col-5">
      <div class="card " style="width: 18rem; justify-content: center;">
        <h3 class="card-header">
          Steve Smith <br /><br />Engineer</h3> 
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Employee ID: 1</li>
          <li class="list-group-item">Email:steavey@email.com</li>
          <li class="list-group-item">Github : $stevesmith</li>
        </ul>
      </div>
    
      <div class="col-5">
        <div class="card " style="width: 18rem; justify-content: center;">
          <h3 class="card-header">
            Tom Stevernson <br /><br />Intern</h3> 
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: 3</li>
            <li class="list-group-item">Email:Tom@email.com</li>
            <li class="list-group-item">School : PSU</li>
          </ul>
        </div>
      
      </div>
    
    </div>
    
    
    
    </div>
       
    
       
        <!-- Separate Popper and Bootstrap JS -->
        
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
       
      </body>
    </html>  `  , "utf-8")
}



addMember()

