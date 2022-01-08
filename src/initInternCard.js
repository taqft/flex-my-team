// intern card generation logic for HTML output
const initInternCard = function (intern) {
    return `<div class="col-sm-4 m-2 py-1">
            <div class="card">
                <div class="card-header">
                    ${intern.name} <br/>
                    <i class="fas fa-dove"></i> Intern
                </div>
                <div class="card-body">
                    <p class="card-text">ID: ${intern.id}</p>
                    <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                    <p class="card-text">School: ${intern.school}</p>
                </div>
              </div>
          </div>`;
};
module.exports = initInternCard;
