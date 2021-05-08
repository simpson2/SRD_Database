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
        client.end();
    } catch (e) {
        console.log("Error:" + e);
    }
}

function getTime() {
    try {
        client.connect();
        client.query('SELECT NOW()', (err, res) => {
            if (err) { console.log(err.stack) }
            else { return res.rows[0] }
        });
        client.end();
    } catch (error) {
        console.log("Error:" + e);
    }
}

module.exports = {
    connectToDB,
    getTime
}