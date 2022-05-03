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

// prompting user to select an option from the list
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
    // running a function based on what the user selects
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

// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
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
// howing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
function employeeView(){ 
    const sql =`SELECT employee.id, employee.first_name, employee.last_name, roles.title, roles.salary, department.department_name AS department, CONCAT (manager.first_name, " ", manager.last_name) AS manager, manager.id as "manager id" FROM employee JOIN roles ON employee.role_id = roles.id JOIN department ON roles.department_id = department.id JOIN employee manager ON employee.manager_id = manager.id;`;
    db.query(sql, (err, res) => {
        if (err) {
            console.log(err)
            return;
        }
        console.table(res) 
        prompts();
        }
    )};  

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
function addDepartment() { 
    inquirier.prompt({
        type: 'input',
        name: 'newDepartment',
        message: 'Please enter new department name'
    }).then(function(answer) {
        const sql = `INSERT INTO department (department_name) VALUES (?)`;
        const department = answer.newDepartment;
        db.query(sql, department, (err, res) => {
            if (err) {
                console.log(err)
                return;
            }
            console.log("New department added!");
            console.table(res);
            departmentView();
        })
    });  
}
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
function addRole() { 
    sql = 'SELECT * FROM department'
    db.query(sql, (err, res) => {
        if (err) {
        console.log(err)
    };
    const departments = [];
    for (var i=0; i<res.length; i++) {
        departments.push(res[i].department_name);
    };
    roleParameters = inquirier.prompt( [
        {
            type: 'list',
            name: 'department',
            message: 'Select a department for this role',
            choices: departments
        },
        {
            type: 'input',
            name: 'newRole',
            message: 'Please enter new position title'
        },
        {
            type: 'number',
            name: 'salary',
            message: 'Please enter salary amount'
        }]);
    });  
}

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
    db.end
};

