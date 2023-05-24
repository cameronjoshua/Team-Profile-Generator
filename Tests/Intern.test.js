const Intern = require('../Lib/Intern');

// Intern object  
test('Intern object', () => {
    const intern = new Intern('JOHN', 24, 'JohnDoe@gmail.com', 'JOB SNR');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// test for Intern school
test('intern school', () => {
    const intern = new Intern('JOHN', 24, 'JohnDoe@gmail.com', 'JOB SNR');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// test for role
test('role of employee', () => {
    const intern = new Intern('JOHN', 24, 'JohnDoe@gmail.com', 'JOB SNR');

    expect(intern.getRole()).toEqual("Intern");
}); 