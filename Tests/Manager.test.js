const Manager = require('../Lib/Manager');

// Manager object 
test('Manager object', () => {
    const manager = new Manager('POWEL', 100, 'Powelshiety@gmail.com', 1);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// test for role
test('gets role of employee', () => {
    const manager = new Manager('POWEL', 100, 'Powelshiety@gmail.com', 1);

    expect(manager.getRole()).toEqual("Manager");
}); 