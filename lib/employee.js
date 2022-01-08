// employee class constructor
// parent of engineer, intern, and manager subclasses
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() { return this.name; }
    getId() { return this.id; }
    getEmail() { return this.email; }
    getRole() { return 'Employee'; }
}
module.exports = Employee;
