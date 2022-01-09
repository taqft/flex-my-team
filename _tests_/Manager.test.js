// manager card test logic
const Manager = require('../lib/manager');
describe('Manager', () => {
    it('Should generate a new Intern object with the given arguments', () => {
        const manager = new Manager('Ben Koenig', 12345678, 'test@tester', 5551236789);
        expect(manager.name).toEqual('Ben Koenig');
        expect(manager.id).toEqual(12345678);
        expect(manager.email).toEqual(expect.stringContaining('test@tester'));
        expect(manager.officeNumber).toEqual(5551236789);
    });
    it('Should return the manager\'s office number via the getOfficeNumber() method', () => {
        const manager = new Manager('Ben Koenig', 12345678, 'test@tester', 5551236789);
        expect(manager.getOfficeNumber()).toEqual(5551236789);
    });
    it('Should get the role of Manager with the getRole() method', () => {
        const manager = new Manager('Ben Koenig', 12345678, 'test@tester', 5551236789);
        expect(manager.getRole()).toEqual('Manager');
    });
});