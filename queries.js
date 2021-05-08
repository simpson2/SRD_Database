const DB = require("./database")

const getHome = (req, res) => {
    return res.json({ Name: 'SRD_Database', Info: 'Node.JS, Express', Server: 'Online'});
}

const getTime = (req, res) => {
    return res.json({ Time: DB.getTime()});
}

module.exports = {
    getHome,
    getTime
}