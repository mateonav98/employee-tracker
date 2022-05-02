INSERT INTO department (department_name)
VALUES  ('Catheter'),
        ('Vision Probe'),
        ('CDE'),
        ('Manufacturing'),
        ('Needles');

INSERT INTO roles (title, salary, department_id)
VALUES  
        ('Catheter Engineering Tech', 65000, 1),
        ('Needles Engineering Tech', 55000, 5),
        ('Vision Probe Engineer', 90000, 2),
        ('CDE Engineer', 100000, 3),
        ('Catheter Engineer', 100000, 1),
        ('Manufacturing Engineer', 90000, 4),
        ('Needles Engineer', 100000, 5),
        ('Vision Probe Manager', 100000, 2),
        ('Needles Manager', 200000, 5),
        ('Manufacturing Lead', 150000, 4),
        ('Catheter Manager', 250000, 1),
        ('CDE Manager', 200000, 3);
  

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  
        ('Joe', 'Callol', 11, NULL),
        ('Mateo', 'Navarro', 1, 1),
        ('Saul', 'Hernandez Moralaes', 5, 1),
        ('Cora', 'Tang', 9, NULL),
        ('Jocelyn', 'Chan', 7, 4),
        ('Mark', 'Miranda', 2, 4),
        ('Andy', 'Hazleton', 8, NULL),
        ('Dominique', 'Brichard', 3, 7),
        ('Kevin', 'Pluckter', 12, NULL),
        ('Alejandra', 'Pachaeco', 4, 9),
        ('Praveen', 'Halappanavar', 10, NULL),
        ('Kyle', 'Kim', 6, 11);
      