const xlsx = require('xlsx');
const getSRd = require('./getSRD');
// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// const url = 'http://www.nats-uk.ead-it.com/aip/current/srd/SRD_Spreadsheet.xls';

// function printSRD() {
//     var req = new XMLHttpRequest();
//     req.open('GET', url, true);
//     req.responseType = 'arraybuffer';

//     req.onload = (e) => {
//         var data = new Uint8Array(req.response);
//         console.log("Response array length:" + data.length);
//         var workbook = XLSX.read(data, {type: 'array'});
//         var routes = workbook.Sheets['Routes'];
//     }

//     req.send();
// }

function printSRD() {
    var workbook = xlsx.readFile('SRD.xls');
    console.log(workbook.SheetNames);
}

module.exports = printSRD;