const DB = require("./database");

const getHome = (req, res) => {
    return res.json({ Name: 'SRD_Database', Info: 'Node.JS, Express', Server: 'Online' });
}

const getTime = (req, res) => {
    let time = DB.getTime();
    return res.json({ Time: time });
}

const getTestData = (req, res) => {
    let output = DB.getTestData();
    console.log("getTestData JSON result: "+output);
    return res.json(output);
}

module.exports = {
    getHome,
    getTime,
    getTestData
}