const queries = require("./queries");

var appRoutes = (app) => {
    app.get("/", queries.getHome);
    app.get("/time", queries.getTime);
}

module.exports = appRoutes;