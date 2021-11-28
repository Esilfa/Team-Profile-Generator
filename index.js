const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


const employees = []
function addMember()
inquirer.prompt([{
    message: "Enter team member's name",
    name: "Name"
},
{
    type: 'list',
    message: 'Select team member role',
    name: 'role',
    choices: [
        'Engineer',
        'Intern',
        'Manager'

    ]
},
{
    message: "Enter team member's id",
    name: "id"
},
{
    message: "Enter team member's email address",
    name: "email"

}

]);

function init() {
    inquirer.prompt(employees)
    .then(function({name,role,id,email}){
        let roleinfo =''
        if (role === 'Engineer' ){
            roleinfo = "GitHub username"
        }
        else if (role === "Intern") {
            roleinfo = "school name";
        } else {
            roleinfo = "office phone number";
        }
        inquirer.prompt([{
            // get message() {
            //     return  roleinfo;
            // },
            // set message() {
            //     this.message =  roleinfo;
            // },
            // name: " roleinfo"
            message: `Enter team member's ${roleinfo}`,
            name: "roleinfo"
        },
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: [
                "yes",
                "no"
            ],
            name: "moreMembers"
        }])
    })
}

init();