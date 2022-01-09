// intern card test logic
const Intern = require('../lib/intern');
describe('Intern', () => {
    it('Should generate a new Intern object with the given arguments', () => {
        const intern = new Intern('Ben Koenig', 12345678, 'test@tester', 'DU');
        expect(intern.name).toEqual('Ben Koenig');
        expect(intern.id).toEqual(12345678);
        expect(intern.email).toEqual('test@tester');
        expect(intern.school).toEqual('DU');
    });
    it('Should return the intern\'s school via the getSchool() method', () => {
        const intern = new Intern('Ben Koenig', 12345678, 'test@tester', 'DU');
        expect(intern.getSchool()).toEqual('DU');
    });
    it('Should return the Intern\'s role via the getRole() method', () => {
        const intern = new Intern('Ben Koenig', 12345678, 'test@tester', 'DU');
        expect(intern.getRole()).toEqual('Intern');
    });
})