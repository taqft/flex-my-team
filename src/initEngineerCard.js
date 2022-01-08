// engineer card generation logic for HTML output
const initEngineerCard = function (engineer) {
    return `<div class="col-sm-4 m-2 py-1">
            <div class="card">
                <div class="card-header">
                    ${engineer.name} <br/>
                    <i class="fas fa-dragon"></i> Engineer
                </div>
                <div class="card-body">
                    <p class="card-text">ID: ${engineer.id}</p>
                    <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p class="card-text">GitHub: ${engineer.github}</p>
                </div>
              </div>
          </div>`;
};
module.exports = initEngineerCard;
