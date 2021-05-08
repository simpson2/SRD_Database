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
    let out = null;
    for(let row = 0; row <= output.length; row++) {
        out += output.rows[row];
        if(row < output.length - 2) out += ",";
    }
    console.log("getTestData JSON result: "+out);
    return res.json(out);
}

module.exports = {
    getHome,
    getTime,
    getTestData
}