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
    let time = null;
    client.connect();
    client.query('SELECT NOW()', (err, res) => {
        if (err) { console.log(err.stack) }
        else {
            time = res.rows[0];
            console.log(time);
            client.end();
        }
    })
    return time;
}

module.exports = {
    connectToDB,
    getTime
}