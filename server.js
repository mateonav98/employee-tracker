// GIVEN a command-line application that accepts user input


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
    console.log("All Departments");
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, res) => {
        if (err) {
            console.log(err)
            return;
        }
        console.table(res);
        prompts();
        }
    )};
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
function roleView(){ 
    console.log("All Roles");
    const sql =`SELECT roles.id, roles.title, roles.salary, department.department_name AS department FROM roles LEFT JOIN department ON roles.department_id = department.id;`;
    db.query(sql, (err, res) => {
        if (err) {
            console.log(err)
            return;
        }
        console.table(res) 
        prompts();
        }
    )};    

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
function employeeView(){ 
    console.log("hello")    
};

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
function addDepartment(){ 
    console.log("hello")    
};

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
function addRole() { 
    console.log("hello")    
};

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
function addEmployee(){ 
    console.log("hello")    
};


function updateEmployee(){ 
    console.log("hello")    
};

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
function quit(){ 
    console.log("hello")    
};

