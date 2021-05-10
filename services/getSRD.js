const http = require('http');
const fs = require('fs');

function getSRD() {
    const file = fs.createWriteStream('SRD.xls');
    const getSRD = http.get('http://www.nats-uk.ead-it.com/aip/current/srd/SRD_Spreadsheet.xls', (res) => {

        if(res.statusCode !== 200) throw new Error("Error when attempting to download.");

        res.pipe(file);
        file.on('finish', () => {
            console.log('SRD download and write to file successful!');
            console.log("File size:" + fs.statSync('SRD.xls').size);
        });
    });
}
module.exports = getSRD;