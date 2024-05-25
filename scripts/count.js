const slocjs = require('slocjs');
const fs = require('fs');
const path = require('path');

const lines = slocjs.countLinesInDir('./src').replace('SLOC: ', '');

console.log(`SLOC: ${lines}`);

const csvFilePath = path.join(__dirname, 'output.csv');

const newRow = `${new Date().toISOString().slice(0, 10)},${lines},\n`;

if (!fs.existsSync(csvFilePath)) {
  const headers = 'Date,Lines,\n';
  fs.writeFileSync(csvFilePath, headers + newRow, 'utf8');
} else {
  fs.appendFileSync(csvFilePath, newRow, 'utf8');
}

console.log('Output written to output.csv');
