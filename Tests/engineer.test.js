const Engineer = require('../Lib/Engineer');


test('Engineer object', () => {
    const engineer = new Engineer('MARKO', 24, 'Marko12@gmail.com', 'MARKJNR');
    
    expect(engineer.github).toEqual(expect.any(String));
});

// test for github name
test('Engineer github name', () => {
    const engineer = new Engineer('MARKO', 24, 'Marko12@gmail.com', 'MARKJNR');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// test for  role 
test('Role of employee', () => {
    const engineer = new Engineer('MARKO', 24, 'Marko12@gmail.com', 'MARKJNR');

    expect(engineer.getRole()).toEqual("Engineer");
});