
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
    fs.writeFileSync(outputPath, ViewHTML (employees), "utf-8")
}



addMember()

