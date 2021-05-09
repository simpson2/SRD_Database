const express = require("express");

const indexRouter = require('./routes/index');
const timeRouter = require('./routes/time');
const testRouter = require('./routes/test');

const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    }),
);

app.use('/', indexRouter);
app.use('/time', timeRouter);
app.use('/test', testRouter);

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}
app.listen(port, () => {
    console.log("App running on port " + port);
});

module.exports = app;

//FIXME can't reconnect to client
//FIXME all queried data not returning as expected