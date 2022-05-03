// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 


const mysql = require('mysql2');
const inquirier = require('inquirer');
const consoleTable = require('console.table');

//connection to mysql
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password123@',
    database: 'employee_db'
    },
    console.log('successfully connected to employee database')
);

function prompts() {
    inquirier.prompt({
        type: 'list',
        name: 'userOptions',
        message: 'What would you like to do?',
        choices: 
                ["View All Departments", 
                "View All Roles", 
                "View All Employees", 
                "Add Department", 
                "Add Role", 
                "Add Employee", 
                "Update Employee Role", 
                "Quit"]
    }).then(function(answer) {
        switch(answer.userOptions) {
            case "View All Departments":
                departmentView();
                break;
            case "View All Roles":
                roleView();
                break;
            case "View All Employees":
                employeeView();
                break;
            case "Add Department":
                addDepartment();
                break;
            case "Add Role":
                addRole();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Update Employee Role":
                updateEmployee();
                break;
            case "Quit":
                quit();
                break;
        }

    })
}
prompts();

function departmentView() { 
    console.log("hello")    
};
function roleView(){ 
    console.log("hello")    
};
function employeeView(){ 
    console.log("hello")    
};
function addDepartment(){ 
    console.log("hello")    
};
function addRole() { 
    console.log("hello")    
};
function addEmployee(){ 
    console.log("hello")    
};
function updateEmployee(){ 
    console.log("hello")    
};
function quit(){ 
    console.log("hello")    
};

