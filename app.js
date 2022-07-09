const inquirer = require('inquirer');


const initialPrompt = () => {
    inquirer.prompt([
        {
            type: 'rawlist',
            name: 'menu',
            message: 'What would you like to do?',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add an Employee', 'Update an Employee']
        },
    ])
};

initialPrompt();