const xlsx = require('xlsx');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const url = 'http://www.nats-uk.ead-it.com/aip/current/srd/SRD_Spreadsheet.xls';

function printSRD() {
    var req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.responseType = 'arraybuffer';

    req.onload = (e) => {
        var data = new Uint8Array(req.response);
        var workbook = xlsx.read(data, {type: 'array'});

        console.log('Sheets contained in the SRD: ' + workbook.SheetNames);
    }
}

req.send();

module.exports = printSRD;