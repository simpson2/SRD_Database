const DB = require("./database");

const getHome = (req, res) => {
    return res.json({ Name: 'SRD_Database', Info: 'Node.JS, Express', Server: 'Online' });
}

const getTime = (req, res) => {
    const time = DB.getTime();
    return res.json({ Time: time });
}

const getTestData = (req, res) => {
    const output = DB.getTestData();
    return res.json(output);
}

module.exports = {
    getHome,
    getTime,
    getTestData
}