const fetch = require('node-fetch');
const xlsx = require('xlsx');
const URL = 'http://www.nats-uk.ead-it.com/aip/current/srd/SRD_Spreadsheet.xls';

function getSRD() {

    fetch(URL)
    .then(res => res.arrayBuffer())
    .then(data => {
        console.log('SRD download and write to file successful!');
        var workbook = xlsx.read(data, { type: 'array' });
        var routes = workbook.Sheets['Routes'];
        console.log(routes['A2'].v);
    })
    .catch(err => {
        console.log("Error when attempting to download - " + err);
    });
}

module.exports = getSRD;