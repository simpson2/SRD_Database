const express = require("express");

const indexRouter = require('./routes/index');
const timeRouter = require('./routes/time');
const srdRouter = require('./routes/srd');

const app = express();

const getSRD = require('./services/getSRD');

app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    }),
);

app.use('/', indexRouter);
app.use('/time', timeRouter);
app.use('/srd', srdRouter);

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}
app.listen(port, () => {
    console.log("App running on port " + port);
});

getSRD();

module.exports = app;

// http://www.nats-uk.ead-it.com/aip/current/srd/SRD_Spreadsheet.xls