// employee card test logic
const Employee = require('../lib/employee');
describe('Employee', () => { // 
    it('Should generate a new Employee object with the given arguments', () => {
        const employee = new Employee('Ben Koenig', 12345678, 'test@tester');
        expect(employee.name).toMatch('Ben Koenig');
        expect(employee.id).toEqual(12345678);
        expect(employee.email).toMatch('test@tester');
    });
    it('Should return the employee\'s name via the getName() method', () => {
        const employee = new Employee('Ben Koenig', 12345678, 'test@tester');
        expect(employee.getName()).toEqual('Ben Koenig');
    });
    it('Should return the employee\'s id via the getId() method', () => {
        const employee = new Employee('Ben Koenig', 12345678, 'test@tester');
        expect(employee.getId()).toEqual(12345678);
    });
    it('Should return the employee\'s email address via the getEmail() method', () => {
        const employee = new Employee('Ben Koenig', 12345678, 'test@tester');
        expect(employee.getEmail()).toEqual('test@tester');
    });
});
