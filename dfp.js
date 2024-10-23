const fs = require('fs');

const inputFile = './datafile.csv';
const outputFile = './outputfile.csv';

function processInput(datasheet, delimiter = ';'){
  const lines = fs.readFileSync(datasheet, 'utf-8').split(/\n/);
  const orderedLines = [];

  for (const line of lines) {

    const fields = line.split(delimiter);

    const reversearray = fields.reverse();

    const joinback = reversearray.join(delimiter);

    orderedLines.push(joinback);
  }
  return orderedLines;
}

function cleanInput(orderedLines){
  const cleanedLines = [];

  for (let i=1; i < orderedLines.length; i++){
    const line = orderedLines[i];

    const trimmedLine = line.length > 20 ? line.slice(0,20) : line;

    cleanedLined.push(trimmedLine)
  }
  return cleanedLines;
}
console.log(cleanedLines)
function parseFile(indata, outdata, delimiter = ';') {}




  



// Leave this code here for the automated tests
module.exports = {
  parseFile,
}