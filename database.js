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
    let output = null;
    client.connect();
    client.query('SELECT NOW();', (err, res) => {
        if (err) throw err;
        output = res.rows[0];
        console.log("getTime result: "+output);
        client.end();
    })
    return output;
}

function getTestData() {
    let output = null;
    client.query('SELECT * FROM SRD;', (err, res) => {
        if (err) throw err;
        output = res;
        console.log("getTestData result: "+output);
        client.end();
    })
    return output;
}

module.exports = {
    connectToDB,
    getTime,
    getTestData
}