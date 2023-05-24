const Employee = require('../Lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Charles', 32, 'charlesme@gmail.com', 'CharlesMiller');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
// test employee name
test('Employee Name', () => {
    const employee = new Employee('Charles', 32, 'charlesme@gmail.com', 'CharlesMiller');

    expect(employee.getName()).toEqual(expect.any(String));
});

// test for employee ID
test('Employee ID', () => {
    const employee = new Employee('Charles', 32, 'charlesme@gmail.com', 'CharlesMiller');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// test for Employee Email
test('Employee Email', () => {
    const employee = new Employee('Charles', 32, 'charlesme@gmail.com', 'CharlesMiller');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// test for Role
test('Role of Employee', () => {
    const employee = new Employee('Charles', 32, 'charlesme@gmail.com', 'CharlesMiller');

    expect(employee.getRole()).toEqual("Employee");
}); 