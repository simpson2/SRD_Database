const http = require('http');
const fs = require('fs');
const xlsx = require('xlsx');
//const getSRD = require('./getSRD');
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

async function printSRD() {
    
    const file = fs.createWriteStream('SRD.xls');
    const getSRD = http.get('http://www.nats-uk.ead-it.com/aip/current/srd/SRD_Spreadsheet.xls', (res) => {

        if(res.statusCode !== 200) throw new Error("Error when attempting to download.");

        res.pipe(file);
        file.on('finish', () => {
            console.log('SRD download and write to file successful!');
            console.log("File size: " + fs.statSync('SRD.xls').size);

            var workbook = xlsx.readFile('SRD.xls', {
                sheetRows: 1,
                sheets: 'routes'
            });
            console.log("SRD worksheet names: " + workbook.SheetNames);
        });
    });
}

module.exports = printSRD;