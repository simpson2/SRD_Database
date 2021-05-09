const pool = require('./config');

// async function getTime() {
//     pool.query('SELECT NOW()', (err, res) => {
//         if(err) {
//             throw err;
//         }
//         console.log(res.rows);
//         return res.rows;
//     });
// }

// async function selectAll() {
//     pool.query('SELECT * FROM SRD', (err, res) => {
//         if(err) {
//             throw err;
//         }
//         console.log(res.rows);
//         return res.rows;
//     });
// }

async function query(query, params) {
    const { rows, fields } = await pool.query(query, params);
    console.log("Query results:" + rows);
    return rows;
}

module.exports = {
    // getTime,
    // selectAll,
    query
}