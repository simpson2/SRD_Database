const client = require("./server");

const getHome = (req, res) => {
    let DB_stat = null;
    try {
        client.connect();
        DB_stat = "Success"
    } catch (e) {
        DB_stat = "Error"
    }
    return res.json({ Name: 'SRD_Database', Info: 'Node.JS, Express', Server: 'Online', Database_Status: DB_stat});
}

module.exports = {
    getHome
}