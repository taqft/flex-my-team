// require card templates
const initManagerCard = require('./initManagerCard');
const initEngineerCard = require('./initEngineerCard');
const initInternCard = require('./initInternCard');

generateTeamProfile = team => {
    let teamList = [];
    for (let member of team) {
        const role = member.getRole();
        if (role === 'Manager') {
            const managerCard = initManagerCard(member);
            teamList.push(managerCard);
        } else if (role === 'Engineer') {
            const engineerCard = initEngineerCard(member);
            teamList.push(engineerCard);
        } else if (role === 'Intern') {
            const internCard = initInternCard(member);
            teamList.push(internCard);
        }
    }
    const teamCards = teamList.join('');
    const teamProfile = generateTeamHTML(teamCards);
    return teamProfile;
}
generateTeamHTML = (teamCards) => {
    return `<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Our Team</title>
</head>

<body>
    <header class="header">
        <div class="row m-0">
            <div class="col header_text text-center p-0">
                <h1>Our Team</h1>
            </div>
        </div>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="row justify-content-center">
                        ${teamCards}
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer class="footer mt-2 text-center">
        Flex My Team Profile Generator
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>
</body>

</html>
`;
}

module.exports = generateTeamProfile;
