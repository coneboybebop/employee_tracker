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
  const sql = `SELECT id, role, dep_id FROM role`;
  connection.query(sql, (err, res) => {
    if (err) throw err;
    console.table(res);
    initialPrompt();
  });
};

const getEmployees = () => {
  const sql = `SELECT first_name, last_name, role_id, manager_id FROM employee`;
  connection.query(sql, (err, res) => {
    if (err) throw err;
    console.table(res);
    initialPrompt();
  });
};

const addDepartment = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "newDepartment",
      message: "What is the name of the new department?"
    }
  ]).then(function ({ newDepartment }) {
    const sql = `INSERT into DEPARTMENT SET ?`;
    connection.query(sql, {name: newDepartment});
    console.log("New Department succesfully added!");
    initialPrompt();
  });
};

const addRole = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "newRole",
      message: "What is the name of the new role?"
    },
    {
      type: "input",
      name: "newSalary",
      message: "What is the yearly salary for the new role?"
    },
    {
      type: "input",
      name: "roleDept",
      message: "what is the department id for the new role?"
    }
  ]).then(function ({ newRole, newSalary, roleDept }) {
    const sql =  `INSERT into ROLE SET ?`;
    connection.query(sql, {role: newRole, salary: newSalary, dep_id: roleDept});
    console.log("New Role succesfully added!");
    initialPrompt();
  });
};

const addEmployee = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "newFirst",
      message: "What is the first name of the new employee?"
    },
    {
      type: "input",
      name: "newLast",
      message: "What is the last name of the new employee?"
    },
    {
      type: "input",
      name: "empRole",
      message: "What is the role id for the new employee?"
    },
    {
      type: "input",
      name: "empManager",
      message: "What is the id of this employee's manager?"
    }
  ]).then(function ({ newFirst, newLast, empRole, empManager }) {
    const sql = `INSERT into EMPLOYEE SET ?`;
    connection.query(sql, {first_name: newFirst, last_name: newLast, role_id: empRole, manager_id: empManager });
    console.log("New employee succesfully added!");
    initialPrompt();
  });
};


initialPrompt();