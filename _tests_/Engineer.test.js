// engineer card test logic
const Engineer = require('../lib/engineer');
describe('Engineer', () => {
    it('Should generate a new Engineer object with the given arguments', () => {
        const engineer = new Engineer('Ben Koenig', 12345678, 'test@tester', 'taqft');
        expect(engineer.name).toMatch('Ben Koenig');
        expect(engineer.id).toEqual(expect.any(Number));
        expect(engineer.email).toMatch('test@tester');
        expect(engineer.github).toMatch('taqft');
    });
    it("Should return the engineer's github handle via the getGithub() method", () => {
        const engineer = new Engineer('Ben Koenig', 12345678, 'test@tester', 'taqft');
        expect(engineer.getGithub()).toMatch('taqft');
    });
    it('Should get the role of Engineer with the getRole() method', () => {
        const engineer = new Engineer('Ben Koenig', 12345678, 'test@tester', 'taqft');
        expect(engineer.getRole()).toMatch('Engineer');
    });
});
