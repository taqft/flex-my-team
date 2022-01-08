// manager card generation logic for HTML output
const initManagerCard = function (manager) {
    return `<div class="col-sm-4 m-2 py-1">
            <div class="card">
                <div class="card-header">
                    ${manager.name} <br/>
                    <i class="fas fa-compass"></i> Manager
                </div>
                <div class="card-body">
                    <p class="card-text">ID: ${manager.id}</p>
                    <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                    <p class="card-text">Phone: ${manager.officeNumber}</p>
                </div>
            </div>
        </div>`;
};
module.exports = initManagerCard;
