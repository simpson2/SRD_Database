const express = require("express");
const routes = require("./routes");

const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

const app = express();
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);

routes(app);

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}
app.listen(port, () => {
    console.log("App running on port " + port);
});

module.exports = {
    app,
    client
}