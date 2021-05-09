const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
    connectionString,
    ssl: {
        rejectUnauthorized: false
    }
});

async function query(query) {
    const { rows, fields } = await pool.query(query);
    console.log("Query results:" + rows);
    return rows;
}

module.exports = query;