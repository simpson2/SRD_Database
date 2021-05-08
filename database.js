const { Client } = require('pg');
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

function connectToDB() {
    try {
        client.connect();
        console.log("Successfully connected to database");
    } catch (e) {
        console.log("Error:" + e);
    }
}

function getTime() {
    client.query('SELECT NOW() as now', (err, res) => {
        if (err) { console.log(err.stack) }
        else { return res.rows[0] }
    });
}

module.exports = {
    connectToDB,
    getTime
}