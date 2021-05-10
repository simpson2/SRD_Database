const fetch = require('node-fetch');
const xlsx = require('xlsx');
const URL = 'http://www.nats-uk.ead-it.com/aip/current/srd/SRD_Spreadsheet.xls';

function getSRD() {

    fetch(URL)
    .then(res => res.arrayBuffer())
    .then(data => {
        console.log('SRD download and write to file successful!');
        var workbook = xlsx.read(data, {
            type: 'array',
            sheets: 'routes'
        });
        console.log("SRD worksheet names: " + workbook.SheetNames);
    })
    .catch(err => {
        console.log("Error when attempting to download - " + err);
    });
}

module.exports = getSRD;