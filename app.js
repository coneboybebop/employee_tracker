const inquirer = require('inquirer');
const consoleTable = require('console.table');
const mysql = require('mysql2');
const { getRandomValues } = require('crypto');
const { allowedNodeEnvironmentFlags } = require('process');
require('dotenv').config();

//connect to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME

  });

  connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });


const initialPrompt = () => {
    inquirer.prompt([
        {
          type: 'list',
          name: 'menu',
          message: 'What would you like to do?',
          choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department','Add a Role', 'Add an Employee', 'Update an Employee']
        },
      ]).then(function ({ menu }) {

    switch(menu) {
      case 'View All Departments':
        getDepartments();
        break;

      case 'View All Roles':
        getRoles();
        break;

      case 'View All Employees':
        getEmployees();
        break;

      case 'Add a Department':
        addDepartment();
        break;

      case 'Add a Role':
        addRole();
        break;

      case 'Add an Employee':
        addEmployee();
        break;

      case 'Update an Employee':
        updateEmployee();
        break;
      }
    });

       
};

const getDepartments = () => {
    const sql = `SELECT id, name FROM department`;
    connection.query(sql, (err, res) => {
      if (err) throw err;
      console.table(res);
      initialPrompt();
    });

};

const getRoles = () => {
    const sql = `SELECT id, role FROM role`;
    connection.query(sql, (err, res) => {
      if (err) throw err;
      console.table(res);
      initialPrompt();
    });
}



initialPrompt();