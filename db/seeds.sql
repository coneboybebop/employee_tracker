INSERT INTO department (name)
VALUES
    ('Finance'),
    ('Human Resources'),
    ('Legal'),
    ('Development'),
    ('Sales');

INSERT INTO role (role, salary, dep_id)
VALUES
    ('Accountant', 50000, 1),
    ('Payroll', 45000, 2),
    ('Finance Manager', 75000, 1),
    ('HR Manager', 75000, 2),
    ('Interviewer', 45000, 2),
    ('Lawyer', 85000, 3),
    ('Clerk', 50000, 3),
    ('Lead Engineer', 85000, 4),
    ('Software Engineer', 70000, 4),
    ('Junior Engineer', 50000, 4),
    ('Salesperson', 50000, 5);

INSERT INTO employee(first_name, last_name, role_id)
VALUES
    ('Alan', 'Schwartz', 1),
    ('Gregory', 'Sydney', 1),
    ('Rosemary' 'Friseal', 2),
    ('Stefan', 'Spearing', 2),
    ('Ada', 'Bellini', 3),
    ('Kevin', 'Goggins', 4),
    ('Anne', 'Allman', 5),
    ('Shelley', 'Pickett', 6),
    ('Cameron', 'Fisher', 7),
    ('Jose', 'Farias', 7),
    ('Ronda', 'Keller', 8),
    ('Anthony', 'Ellis', 9),
    ('Nathan', 'Barnes', 9),
    ('Alex', 'Birch', 10),
    ('Zoey', 'Manning', 10), 
    ('Margot', 'Allen', 10),
    ('Miles', 'Anderson', 11),
    ('Clara', 'Marshall', 11);
