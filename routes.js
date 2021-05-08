const queries = require("./queries");

var appRoutes = (app) => {
    app.get("/", queries.getHome);
}

module.exports = appRoutes;