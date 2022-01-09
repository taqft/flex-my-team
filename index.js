// profile generator logic
const inquirer = require('inquirer');
const fs = require('fs');

// include needed subclasses to construct a team profile
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// import the function to generate the team profile
const generateTeamProfile = require('./src/generateHTML');

// gather the team data for use in generating the team profile
let teamList = [];

// store questions in arrays to make the later functions more readable
const managerQuestions = [{
        type: 'input',
        message: 'Please enter the Team Manager\'s name: ex:',
        name: 'name',
        default () {
            return 'Ben';
        }
    },
    {
        type: 'input',
        message: 'Please enter the Team Manager\'s employee ID: ex:',
        name: 'id',
        default () {
            return '12345678';
        }
    },
    {
        type: 'input',
        message: 'Please enter the Team Manager\'s email: ex:',
        name: 'email',
        default () {
            return 'test@tester';
        }
    }, {
        type: 'input',
        message: 'Please enter an office phone number: ex:',
        name: 'officeNumber',
        default () {
            return '5551236789';
        }
    }
];

const nextStep = [{
    type: 'list',
    message: 'What would you like to do next?',
    name: 'nextStep',
    choices: ['Add an engineer', 'Add an intern', 'Finish building my team'],
    default () {
        return 'Add an engineer';
    }
}]

const engineerQuestions = [{
        type: 'input',
        message: 'Please enter the Engineer\'s name: ex:',
        name: 'name',
        default () {
            return 'Tony';
        }
    },
    {
        type: 'input',
        message: 'Please enter the Engineer\'s employee ID: ex:',
        name: 'id',
        default () {
            return '12345678';
        }
    },
    {
        type: 'input',
        message: 'Please enter the Engineer\'s email: ex:',
        name: 'email',
        default () {
            return 'test@tester';
        }
    }, {
        type: 'input',
        message: 'Please enter the Engineer\'s GitHub: ex:',
        name: 'github',
        default () {
            return 'theresaqueryforthat';
        }
    }
];

const internQuestions = [{
        type: 'input',
        message: 'Please enter the Intern\'s name: ex:',
        name: 'name',
        default () {
            return 'Joe';
        }
    },
    {
        type: 'input',
        message: 'Please enter the Intern\'s employee ID: ex:',
        name: 'id',
        default () {
            return '12345678';
        }
    },
    {
        type: 'input',
        message: 'Please enter the Intern\'s email: ex:',
        name: 'email',
        default () {
            return 'test@tester';
        }
    }, {
        type: 'input',
        message: 'Please enter the Intern\'s school: ex:',
        name: 'school',
        default () {
            return 'University of Denver';
        }
    }
];

// in this setup, addManager only runs once, but can easily be adjusted later
// to allow for multiple managers, and thus multiple team structure styles
addManager = () => inquirer
        .prompt(managerQuestions)
        .then((data) => {
            const { name, id, email, officeNumber } = data;
            const teamManager = new Manager(name, id, email, officeNumber);
            teamList.push(teamManager);
            console.info('\nManager added.\n')
        })

// after adding an engineer, call buildTeam() once again to return to the menu
addEngineer = () => inquirer
    .prompt(engineerQuestions)
    .then((response) => {
        const { name, id, email, github } = response;
        const newEngineer = new Engineer(name, id, email, github);
        teamList.push(newEngineer);
        console.info('\nEngineer added.\n')
        buildTeam();
    })

// after adding an intern, call buildTeam() once again to return to the menu
addIntern = () => inquirer
    .prompt(internQuestions)
    .then((response) => {
        const { name, id, email, school } = response;
        const newIntern = new Intern(name, id, email, school);
        teamList.push(newIntern);
        console.info('\nIntern added.\n')
        buildTeam();
    })

// write the finalized team profile to file when user input has finished
buildTeamProfile = function () {
    fs.writeFile('./dist/index.html', generateTeamProfile(teamList), e => {
        if (e) {
            console.error('An error occurred:', e);
            return;
        } else {
            console.log(`Team profile successfully generated!
            View your generated page in the /dist/ folder.`);
        }
    });
}

// menu options after a manager has been added
// and before the team is finished being built
// once user input is complete, generate HTML
buildTeam = () => inquirer
    .prompt(nextStep)
    .then((response) => {
        const { nextStep } = response;
        if (nextStep === 'Add an engineer') {
            return addEngineer();
        } else if (nextStep === 'Add an intern') {
            return addIntern();
        } else {
            return buildTeamProfile();
        }
    })

// begin the team profile prompts and menu flow
init = () => {
    console.log(`
  Hello and welcome to the Flex My Team profile generator!

  The below options allow you to input the desired values, or simply
  press the enter key without providing a value if you wish to use 
  the default values to see an example result.
  `);
    addManager()
        .then(buildTeam)
        .catch(e => {
            console.error(e);
        })
}

init();
