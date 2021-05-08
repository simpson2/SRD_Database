const getHome = (req, res) => {
    return res.json({ Name: 'SRD_Database', Info: 'Node.JS, Express', Server: 'Online'});
}

module.exports = {
    getHome
}